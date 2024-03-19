import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { NavBar } from "./components/NavBar";
import { NavBarLink } from "./components/NavBarLink";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <NavBarLink />

        <div className="card">
          <Routes>{routes}</Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
