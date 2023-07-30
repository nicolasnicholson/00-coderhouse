import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div class="relative">
        <button>
            <img className='w-5' src={cart} alt="cart-widget" />
        </button>
        <span class="absolute -top-4 -right-4 bg-red-500 rounded-full w-5 h-5 text-white font-semibold flex justify-center items-center text-xs">0</span>
        </div>
    )
}

export default CartWidget