import { useState } from "react";
import "./Navbar.css"; // create this file

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Jaismeet Kaur</div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "menu active" : "menu"}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </header>
  );
}

export default Navbar;
