  import { onload } from './onload';
  import { calculateTip } from './calculateTip';
  import {showmyContainer} from './showContainer';

onload();

const button = document.querySelector<HTMLElement>('#calculate');
button!.onclick = () => {
  calculateTip();
}

const button2 = document.querySelector<HTMLElement>('#show');
button2!.onclick = () => {
  showmyContainer();
}