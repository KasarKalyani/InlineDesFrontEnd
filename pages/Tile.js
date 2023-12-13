import { useEffect, useState } from "react";

const {
  TileWrapper,
  ImageWrapper,
  InfoWrapper,
  Title,
  Description,
  DateTime,
  Status,
  Button,
} = require("../styles/Tile.style");

function Tile({ tileInfo, sendToParent }) {
  const [d, setd] = useState([]);
  //const [Id,setId] = useState(0);

  const sendDataFunc = async (id) => {
    const sendData = await fetch(`http://localhost:5000/sendTileData/${id}`);
    const res = await sendData.json();
    setd(res);
    sendToParent(d.text);
  };


  return (
    <>
      {tileInfo &&
        tileInfo.map((tile) => (
          <TileWrapper
            onClick={() => {
              sendDataFunc(tile.detail_id);
            }}
          >
            <ImageWrapper>
              <img src={tile.imagesrc} />
            </ImageWrapper>
            <InfoWrapper>
              <Title>{tile.title}</Title>
              <Description>{tile.description}</Description>
              <DateTime>{tile.datetime}</DateTime>
              <Status>{tile.status}</Status>
              <Button>click</Button>
            </InfoWrapper>
          </TileWrapper>
        ))}
    </>
  );
}

export default Tile;
