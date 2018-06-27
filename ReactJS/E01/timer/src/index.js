import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(App() , document.getElementById('root'));
setInterval(()=>{
    console.log('hi')
    ReactDOM.render(App(), document.getElementById('root'))
},1000)