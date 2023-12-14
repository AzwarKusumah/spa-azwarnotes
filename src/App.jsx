import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Misc/Navigation";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import ArchivePage from "./pages/ArchivePage";

import Page404 from "./pages/Page404";
import Footer from "./components/Misc/Footer";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<Page404 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/archive" element={<ArchivePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
