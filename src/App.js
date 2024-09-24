import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navigation from './Compoent/navigation/navigation';
import Footer from './Compoent/footer/footer';
import About from './Pages/About/about';
import Project from './Pages/Project/project';
import DetailBlog from './Pages/DetailBlog/detailBlog';
import Newsletter from './Pages/NewsLetter/newsLetter';
import NotFone from "./Pages/NotFone/NotFone"
import {DarkModeProvider } from './Compoent/DarkValue/DarkModeContext';
function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/detailBlog' element={<DetailBlog />} />
          <Route path='/newsLetter' element={<Newsletter />} />
          <Route path='*' element={<NotFone />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </DarkModeProvider >
      );
}

      export default App;