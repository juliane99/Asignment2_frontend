  import { onload } from './onload';
  import { calculateTip } from './calculateTip';
  import {showContainer} from './showTheContainer';
  import {popup} from './popUp';

onload();

const button = document.querySelector<HTMLElement>('#calculate');
button!.onclick = () => {
  calculateTip();
}

const button2 = document.querySelector<HTMLElement>('#show');
button2!.onclick = () => {
 showContainer();
}

popup();
