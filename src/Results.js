import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
    if (props.results) {
    return (
    <div className="Results">
        <section className="heading-One text-center">
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function(phonetic, index) {
            return (
                <div key={index}>
                <Phonetic phonetic={phonetic} />
                </div>
                );
                })}
        </section>
            {props.results.meanings.map(function(meaning, index) {
            return (
                <section key={index}>
                <Meaning meaning={meaning} />
                </section>
                );
            })}
    </div>
    );
} else {
    return null;
}
}