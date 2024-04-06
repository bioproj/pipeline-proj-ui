import './styles/index.less';
import './mock';
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide
// import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';

import App from './App';
import store from './stores';

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );

// const container = document.getElementById('root');
// const root = createRoot(container!); // createRoot(container!) if you use TypeScript
// root.render(  <Provider store={store}>
//   <App />
// </Provider>);

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider  store={store} ><App /></Provider>
)
