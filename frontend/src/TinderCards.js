import React, { useState, useEffect } from "react";
import "./TinderCards.js";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/tinder/cards");
      setPeople(data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing", nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name);
  };

  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {people.map((p) => (
          <TinderCard
            className='swipe'
            key={p.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, p.name)}
            onCardLeftScreen={() => outOfFrame(p.name)}
          >
            <div
              style={{ backgroundImage: `url(${p.imgUrl})` }}
              className='card'
            >
              <h3>{p.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
