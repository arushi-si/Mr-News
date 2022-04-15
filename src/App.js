import React from "react";
import Nav from "./components/Nav";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News key="business" category="business" />}
          />
          <Route
            exact
            path="/technology"
            element={<News key="technology" category="technology" />}
          />
          <Route
            exact
            path="/health"
            element={<News key="health" category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" category="sports" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News key="entertainment" category="entertainment" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
