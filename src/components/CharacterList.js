import React from "react";

import Character from "./Character";
import '../index.css';

const CharacterList = props => {
  console.log(props)
  return (
    <ul>
      {props.characters.map(character => {        
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
