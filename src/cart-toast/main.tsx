import { render } from 'preact';
import { CartToast } from './app.tsx';

const cartToast: HTMLElement | null = document.getElementById('cart-toast');
let cartItemCount = cartToast?.dataset.itemCount;

render(<CartToast cartItemCount={parseInt(cartItemCount || '0', 10)} />, document.getElementById('cart-toast')!);
