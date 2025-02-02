import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [theme, setTheme] = useState("light"); // Default theme set to 'light'
  
  const Themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  useEffect(() => {
    // Initialize theme when component mounts (set to default theme 'light')
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); // Dependency array ensures the theme is updated when the state changes

  const handleThemeChange = (e) => {
    const newTheme = e.target.getAttribute("data-set-theme");
    setTheme(newTheme); // Update the theme state
    document.documentElement.setAttribute("data-theme", newTheme); // Apply theme to the DOM
  };

  return (
    <>
      <div className="sticky top-0 z-50"></div>
      <div className="container">
        <div className="navbar px-10 items-center top-0 bg-rose-50">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-1 p-2 shadow w-52">
                <li><a>Home</a></li>
                <li><a>Sample Work</a></li>
                <li><a>About Us</a></li>
                <li><a>Blog</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal font-bold px-1">
              <li><a>Home</a></li>
              <li><a>Sample Work</a></li>
              <li><a>About Us</a></li>
              <li><a>Blog</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn"
                aria-expanded="false"
                aria-label="Theme selector"
              >
                {theme} Theme
              </label>
              <ul className="menu menu-sm overflow-y-auto h-96 dropdown-content bg-base-100 rounded-box z-[1] mt-1 p-2 shadow w-52">
                {Themes.map((item, index) => (
                  <li key={index} className={item === theme ? "bg-gray-200" : ""}>
                    <button
                      data-set-theme={item}
                      onClick={handleThemeChange}
                      className={item === theme ? "font-bold" : ""}
                    >
                      {index + 1 + " . " + item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
