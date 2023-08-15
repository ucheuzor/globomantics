import { useParams } from "react-router-dom" 
import House from "./House";
import { useContext } from "react";
import HouseContext from "../main-page/context/HouseContext";


const HouseFromQuery = () => {
    const {id} = useParams();
    const allHouses = useContext(HouseContext);
    const house = allHouses.find(h => h.id === parseInt(id));

    if(!house) return <div>House not found.</div>
  return <House house={house} />

}

export default HouseFromQuery