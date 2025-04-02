import { render } from 'preact';
import { CartToast } from './app.tsx';

const cartToast: HTMLElement | null = document.getElementById('cart-toast');
let cartTotalPrice: number | undefined = parseInt(cartToast?.dataset.totalPrice || '0', 10);
const cartCurrency: string | undefined = cartToast?.dataset.currency?.charAt(0) || "$";

render(<CartToast cartTotalPrice={cartTotalPrice} cartCurrency={cartCurrency} />, cartToast!);
