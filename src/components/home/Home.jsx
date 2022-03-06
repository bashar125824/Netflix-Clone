import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header";
import Movielist from "../movielist/Movielist";

export default function Home() {

<<<<<<< HEAD
    const [movies, setMovies] = useState(null);
    //"https://bashar-app.herokuapp.com/trending"
     async function getData() {
         let response = await fetch("https://bashar-app.herokuapp.com/trending");
         let data = await response.json();
         setMovies(data);
        
=======
    const [movies, setMovies] = useState([]);

    async function getData() {
        let response = await fetch("https://bashar-app.herokuapp.com/trending");
        let data = await response.json();

        setMovies(data);

>>>>>>> 71e53c0f285d8ce99d775cb769f261dda61764af
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
