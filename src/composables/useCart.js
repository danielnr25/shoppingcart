import { computed, ref, watch } from "vue";
import { toast } from "vue3-toastify";


const cart = ref(JSON.parse(localStorage.getItem("cart")) || []);

export function useCart() {

    const addToCart = (product) => {
        const existing = cart.value.find((item)=> item.id === product.id)
        if(existing){
            existing.quantity++;
        }else{
            cart.value.push({...product, quantity:1});
        }
        toast.success("Producto agregado al carrito")
    }

    const removeFromCart = (id) =>{
        cart.value = cart.value.filter((item)=> item.id !== id) 
        toast.info("Producto eliminado del carrito")
    }

    // computed: es una propiedad calculada, que se recalcula automaticamente cuando cambia sus dependencias reactivas (ref, reactive, props)
    const total = computed(()=>
        cart.value.reduce((acc,item) => acc + item.precio * item.quantity,0)
    );

    // contador de items en el carrito
    const count = computed(()=>
        cart.value.reduce((acc,item) => acc + item.quantity,0)
    );

    // watch: vigilar un valor reactivo (ref, reactive, computed, props) y ejecutar una funcion cuando cambia
    /* ideal para:
        - reaccionar a cambios de input
        - llamar apis cuando cambia algo (filtros, search)
        - validar campos en tiempo real 
        - sincronizar estado con localstorage
        - ejecutar lógica cuando cambia una prop
    */

    // deep: se usa en watch, para que tambien detecte cambios internos dentro de un objeto o array
    watch(cart,(newCart) => {
        localStorage.setItem("cart", JSON.stringify(newCart))
    },
    {deep:true}
    );

    return { addToCart,cart,total,count,removeFromCart}
}