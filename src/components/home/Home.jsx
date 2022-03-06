import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header";
import Movielist from "../movielist/Movielist";

export default function Home() {

    const [movies, setMovies] = useState(null);
    //"https://bashar-app.herokuapp.com/trending"
     async function getData() {
         let response = await fetch("https://bashar-app.herokuapp.com/trending");
         let data = await response.json();
         setMovies(data);
        
    };
    useEffect(() => {
        getData();

    }, []);
    return (
        <>
            <h1>From Home Page</h1>
            <Header />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", height: "100px" }}>
                {movies && <Movielist movies={movies} />}
            </div>
        </>
    )
};
