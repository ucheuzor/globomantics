import { useParams } from "react-router-dom"
import SearchResultRows from "./SearchResultRows";
import { useContext } from "react";
import HouseContext from "../main-page/context/HouseContext";

const SearchResults = () => {
    const {country} = useParams();
    const allHouses = useContext(HouseContext);
    const filteredHouses = allHouses.filter(h => h.country === country)
  return (
    <div className="mt-2">
        <h4>Result for {country}:</h4>
        <table className="table table-hover">
            <tbody>
                {
                    filteredHouses.map(h => (
                        <SearchResultRows key={h.id} house={h} />
                    )) 
                }
            </tbody>
        </table>
    </div>
  )
}

export default SearchResults