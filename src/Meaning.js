
import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul className="list-group mb-2">
              <li className="list-group-item p-2 bg-light border">
              <strong>Definition: </strong> {definition.definition}
              <br />
              <em className="example">{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
              </li>
          </ul>
          </div>
        );
      })}
    </div>
  );
}