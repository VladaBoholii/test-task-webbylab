import { Outlet, useLocation } from "react-router-dom";
import AddForm from "./views/components/AddForm"

function App() {
  const location = useLocation();

  // This will hold the previous location if we came from the main page
  const state = location.state;

  // backgroundLocation is where we were before going to /add
  const backgroundLocation = state && state.background;

  return (
    <>
      {/* Render the child routes, but if we have a backgroundLocation, render the background location children */}
      <Outlet context={{ backgroundLocation }} />
      
      {/* If there's a background location, and current path is /add, show modal */}
      {backgroundLocation && location.pathname === "/add" && (
        <div className="modal">
          <AddForm />
        </div>
      )}
    </>
  );
}

export default App;
