import React from "react";
import './lateral/index';
import './footer/index';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>Header of the application</header>
      
      <my-lateral></my-lateral>
      
      <p>Bananas amarelas</p>
      
      <my-footer></my-footer>
    </div>
  );
}

export default App;
