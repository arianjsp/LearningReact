import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//removi a parte do serviceWorker pq não seria necessário para esse projeto

// renderização das aplicações feitas naquela div do index.html na pasta public
ReactDOM.render(<App />, document.getElementById('root'));

