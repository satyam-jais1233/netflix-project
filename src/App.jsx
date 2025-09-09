import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Components
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
    <Router>
      <Routes>
        {/* Home Page */}
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

        {/* Login Page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;


