import { render } from 'preact';
import { CartToast } from './app.tsx';

const cartToast: HTMLElement | null = document.getElementById('cart-toast');
const cartTotalPrice: number | undefined = parseInt(cartToast?.dataset.totalPrice || '0', 10);
const cartCurrency: string | undefined = cartToast?.dataset.currency?.charAt(0) || '$';
const cartState: Object | undefined = JSON.parse(cartToast?.dataset.cartState || "{}") || {};

render(<CartToast cartTotalPrice={cartTotalPrice} cartCurrency={cartCurrency} cartState={cartState} />, cartToast!);
