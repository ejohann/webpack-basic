import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading.js';
import addImage from './add-image';
import { EnvironmentPlugin } from 'webpack';

const heading = new Heading();
const helloWorldButton = new HelloWorldButton();

heading.render();
helloWorldButton.render();

addImage();

if(process.EnvironmentPlugin.NODE_ENV === 'production'){
    console.log('production mode');
}
else if(process.EnvironmentPlugin.NODE_ENV === 'development'){
    console.log('development mode');
}