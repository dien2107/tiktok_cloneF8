import { Routes ,Route,Link } from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";
import Contact from "./pages/contact"; 
function App () {
    return (
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      </div>
    )
}

export default App