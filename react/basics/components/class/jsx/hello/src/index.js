import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Home from './Home';
// import Cards from './components/Cards';
// import App from './components/App';
import Counter from './components/Counter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter/>











    {/* <App/> */}
    {/* <Cards
    image="https://randomuser.me/portraits/men/3.jpg"
    name="wasim"
    jonined=" jonined in 2002"
    desc=" this is ther description of this tag "
    friends="4"
    /> */}

    {/* <Cards
    image="https://randomuser.me/portraits/women/25.jpg"
    name="saddaf"
    jonined=" jonined in 2012"
    desc=" this is ther description of this tag "
    friends="10"
    /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
