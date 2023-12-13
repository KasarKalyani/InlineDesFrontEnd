import { useEffect, useState } from "react";
import Tile from "./Tile";
const { DetaileWrapper } = require("../styles/Tile.style");

function AllTickets() {

  const [tileInfo, setTileInfo] = useState([]);
  const [dataFromChild, setDataFromChild] = useState('');
  useEffect(() => {
    async function get() {
      const data = await fetch("http://localhost:5000/getTileData");
      const res = await data.json();
      setTileInfo(res);
    }
    get();
  }, []);

  const handleDataFromChild =(data)=>{
    setDataFromChild(data);

  }
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
      <div>
        <Tile tileInfo={tileInfo} sendToParent={handleDataFromChild}/>
      </div>
      <div>
        <DetaileWrapper>{dataFromChild}</DetaileWrapper>
      </div>
    </div>
  );
}

export default AllTickets;
