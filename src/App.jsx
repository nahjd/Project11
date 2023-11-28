
import Home from "./pages/Home"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About";
import AddCategory from "./pages/AddCategory";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import Contact from "./pages/Contact";
import Header from "./components/Header";


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" index element={<Home />} />
        <Route path="categories">
        <Route index element={<Categories/>} />
        <Route path=":id" element={<CategoryDetail />} />
        </Route>
        <Route path="add" element={<AddCategory />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
