import "./index.css";
import MY_IMAGE from './assets/js-icon.png';

const createHtml= () => {
    const h1 = document.createElement('h1');
    h1.className = 'main__title'
    h1.textContent = 'I love JavaScript';

    const img = document.createElement('img');
    img.className = 'main__img';
    img.setAttribute('width', '400');
    img.setAttribute('height', '400');
    img.src = MY_IMAGE;
    img.alt = 'JS logo';

    document.body.append(h1);
    document.body.append(img);
};

createHtml();


