import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import FeaturedHouse from "./Featured-House";
import "./main-page.css";
import SearchResults from "../search/SearchResults";
import HouseFilter from "./HouseFilter";
import HouseFromQuery from "../house/HouseFromQuery";
import UseHouses from "../hooks/UseHouses";
import UseFeaturedHouse from "../hooks/UseFeaturedHouse";
import HouseContext from "./context/HouseContext";

function App() {
  const allHouses = UseHouses();
  const featuredHouse = UseFeaturedHouse(allHouses);

  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle="providing Houses all over the world" />
          <HouseFilter />
          <Routes>
            <Route
              path="/searchresults/:country"
              element={<SearchResults />}
            />
            <Route
              path="/house/:id"
              element={<HouseFromQuery />}
            />
            <Route
              path="/"
              exact
              element={<FeaturedHouse house={featuredHouse} />}
            />
          </Routes>
        </div>
      </HouseContext.Provider>
    </Router>
  );
}

export default App;
