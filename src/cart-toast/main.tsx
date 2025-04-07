import { render } from 'preact';
import { CartToast } from './CartToast.tsx';
import { CartState } from './types/cart.ts';

const cartToast: HTMLElement | null = document.getElementById('cart-toast');
const cartTotalPrice: number | undefined = parseInt(cartToast?.dataset.totalPrice || '0', 10);
const cartCurrency: string | undefined = cartToast?.dataset.currency?.charAt(0) || '$';
const cartOriginalTotalPrice: number | undefined = parseInt(cartToast?.dataset.originalPrice || '0', 10);
const cartState = JSON.parse(cartToast?.dataset.cartState || '{}') as CartState;

render(<CartToast cartTotalPrice={cartTotalPrice} cartCurrency={cartCurrency} cartState={cartState} cartOriginalTotalPrice={cartOriginalTotalPrice} />, cartToast!);
