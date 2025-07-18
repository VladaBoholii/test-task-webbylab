import { Outlet, useLocation } from "react-router-dom";
import AddForm from "./views/components/AddForm";
import Main from "./views/pages/Main";
import Search from "./views/pages/Search";
import "./views/styles.css";
import { useEffect, useState } from "react";

function App() {
  const [startScreen, setStartScreen] = useState(true);
  const [animating, setAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("animate-in");

  const togglePageVisibility = () => {
    if (animating) return;

    setAnimating(true);
    setAnimationClass("animate-out");

    setTimeout(() => {
      setStartScreen((prev) => !prev);
      setAnimationClass("animate-in");
    }, 500);

    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  useEffect(() => {
    document.body.style.overflowY = startScreen ? "hidden" : "scroll";
  }, [startScreen]);

  return (
    <div id="app" className={animationClass}>
      {startScreen ? (
        <Main toggleScreen={togglePageVisibility} />
      ) : (
        <Search toggleScreen={togglePageVisibility} />
      )}
    </div>
  );
}

export default App;
