import './App.css';

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/Nav.Bar";
import About from "./Components/About.js";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/hats" element={<Index />} />
                        <Route path="/hats/new" element={<New />} />
                        <Route path="/hats/:id" element={<Show />} />
                        <Route path="/hats/:id/edit" element={<Edit />} />
                        <Route path="*" element={<FourOFour />} /> 
                        <Route path="/hats/about" element={<About />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;