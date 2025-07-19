import { Outlet, useLocation } from "react-router-dom";
import AddForm from "./views/components/AddForm";
import AuthPopup from "./views/components/AuthPopup";
import Main from "./views/pages/Main";
import Search from "./views/pages/Search";
import "./views/styles.css";
import { useEffect, useState } from "react";
import { getMoviesList, getTokenCookie } from "./data/api";
import { useDispatch } from "react-redux";

function App() {
  const [startScreen, setStartScreen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("animate-in");
  const [logged, setLogged] = useState(!!getTokenCookie());

  const dispatch = useDispatch();

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
    getMoviesList(dispatch);
  }, []);

  return (
    <div id="app" className={animationClass}>
      {!logged && <AuthPopup />}
      {startScreen ? (
        <Main toggleScreen={togglePageVisibility} />
      ) : (
        <Search toggleScreen={togglePageVisibility} />
      )}
    </div>
  );
}

export default App;
