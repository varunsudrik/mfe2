// import React from "react";
// import ReactDOM from "react-dom";

// import "./index.css";

// const App = () => (
//   <div className="container">
//     <div>Name: shell</div>
//     <div>Framework: react</div>
//     <div>Language: JavaScript</div>
//     <div>CSS: Empty CSS</div>
//   </div>
// );
// ReactDOM.render(<App />, document.getElementById("app"));


import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

const Header = React.lazy(() => import('common_components_lib/Header'));
const Footer = React.lazy(() => import('common_components_lib/Footer'));

import './index.css';

const App = () => (
  <>
    <Suspense fallback={<>Loading...</>}>
      <Header />
      Shell Component

      <Footer />
    </Suspense>
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));
