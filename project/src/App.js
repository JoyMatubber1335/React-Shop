// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Home } from "./Home/Home.js";
import { AboutUs } from "./AboutUs/AboutUs";
import { FeaturedProduct } from "./Product/FeaturedProduct.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category } from "./Category/Category.js";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<FeaturedProduct />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/Category/:category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
