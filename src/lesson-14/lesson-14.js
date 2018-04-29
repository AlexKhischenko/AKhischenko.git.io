import './lesson-14.scss';
import { modalWindow} from './scrypts/modal-window';

document.querySelector('#btn').addEventListener('click', () => {
    modalWindow.show('Opened via btn');
});

setTimeout(() => {
    modalWindow.show('Hello world');
}, 1000);

setTimeout(() => {
    modalWindow.hide();
}, 4000);