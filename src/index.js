import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading.js';
import addImage from './add-image';

const heading = new Heading();
const helloWorldButton = new HelloWorldButton();

heading.render();
helloWorldButton.render();

addImage();