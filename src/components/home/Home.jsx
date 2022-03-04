import { useState, useEffect } from "react";
import Header from "../Header";
import Movielist from "../movielist/Movielist";

export default function Home() {

    const [movies, setMovies] = useState([]);

    async function getData() {
        let response = await fetch(`${process.env.REACT_APP_SERVER}/movies`);
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
            
        </>
    )
};