// /* eslint-disable no-undef */
// import { applyMiddleware, compose, createStore } from 'redux';
// import promiseMiddleware from 'redux-promise';
// import thunk from 'redux-thunk';
// import makeRootReducer from './reducers';
// // import routerMiddleware from 'react-router-redux/lib/middleware';
// export default (initialState = window.Config, history) => {
//   // ======================================================
//   // Middleware Configuration
//   // ======================================================
//   const middleware = [thunk, promiseMiddleware];


//   // ======================================================
//   // Store Instantiation and HMR Setup
//   // ======================================================
//   const store = createStore(
//     makeRootReducer(),
//     initialState,
//     compose(
//       applyMiddleware(...middleware)
//     )
//   );
//   store.asyncReducers = {};

//   if (module.hot) {
//     module.hot.accept('./reducers', () => {
//       const reducers = require('./reducers').default;
//       store.replaceReducer(reducers);
//     });
//   }

//   return store;
// };
export default ()=>{
  console.log('store')
}
