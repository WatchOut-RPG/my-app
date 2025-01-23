import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './Components/Auth';
import ViewProducts from './Components/ViewProducts';
import AddToBag from './Components/AddToBag';
import { Provider } from 'react-redux';
import { store } from './Components/Store';



const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <App/>
  // },  
    {
      path: 'login',
      element: <Auth/>
    },
    {
      path: 'view-products',
      element: <ViewProducts/>
    },
    {
      path: 'add-to-bag',
      element: <AddToBag/>
    }    
]);


root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <RouterProvider router={allRoutes}>
        <App />
      </RouterProvider>
    {/* </Provider> */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
