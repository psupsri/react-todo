import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
