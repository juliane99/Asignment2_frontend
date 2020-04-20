  import { onload } from './onload';
  import { calculateTip } from './calculateTip';

onload();

const button = document.querySelector<HTMLElement>('#calculate');
button!.onclick = () => {
  calculateTip();
}