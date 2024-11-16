import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Подключение стилей

// Импортируем страницы
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Home from './components/Home';
import News from './components/News';
import Personnel from './components/Personnel';  // Импортируем компонент для страницы "Особовий склад Кафедри"

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Хедер */}
        <header className="header">
          <nav className="navbar">
            <ul className="navbar-list">
              <li><Link to="/" className="navbar-item">Головна</Link></li>
              <li><Link to="/about" className="navbar-item">Про академію</Link></li>
              <li><Link to="/gallery" className="navbar-item">Галерея</Link></li>
              <li><Link to="/news" className="navbar-item">Новини</Link></li>
              <li><Link to="/contact" className="navbar-item">Контакти</Link></li>
              <li><Link to="/personnel" className="navbar-item">Особовий склад Кафедри</Link></li>  {/* Кнопка */}
            </ul>
          </nav>
        </header>

        {/* Контент */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personnel" element={<Personnel />} />  {/* Страница с табличными данными */}
        </Routes>

        {/* Футер */}
        <footer className="footer">
          <p>© 2024 ASU Portal. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
