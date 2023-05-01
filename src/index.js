import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cocktails from './pages/Cocktails';
import NotFound from './pages/NotFound';
import CocktailDetail from './pages/CocktailDetail';
import SearchHeader from './components/SearchHeader';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <SearchHeader /> },
      { path: 'cocktails', element: <Cocktails /> },
      { path: 'cocktails/:keyword', element: <Cocktails /> },
      { path: 'cocktails/watch/:drinkId', element:<CocktailDetail />},
    ],
  },
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
