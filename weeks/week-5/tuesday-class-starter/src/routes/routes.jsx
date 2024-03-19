import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { SongInfoPage } from "../pages/SongInfoPage";
import { MyInfoPage } from "../pages/MyInfoPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/my-info" element={<MyInfoPage />} />
    <Route path="*" element={<NotFoundPage />} />
    {/* DYNAMIC ROUTING */}
    <Route path="/song/:songTitle" element={<SongInfoPage />} />
  </>
);
