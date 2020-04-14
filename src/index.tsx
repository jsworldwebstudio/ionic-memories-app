import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MemoriesContextProvider from './data/MemoriesContextProvider';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<MemoriesContextProvider>
  <App />
</MemoriesContextProvider>,
document.getElementById('root'));

defineCustomElements(window);

serviceWorker.register();
