import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/header";
import Banner from "./assets/components/homebanner";
import Login from "./assets/components/login";
import MovieList from "./assets/components/movie";
import Card from "./assets/components/card";
import Accordion from "./assets/components/list";
import Restart from "./assets/components/last";
import Footer from "./assets/components/footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Banner />
                <MovieList />
                <Card />
                <Accordion />
                <Restart />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
