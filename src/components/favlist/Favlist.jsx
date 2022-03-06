import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import swal from "sweetalert";

export default function Favlist() {

    const [movies, setMovies] = useState(null);
    //"https://bashar-app.herokuapp.com/trending"
    async function getData() {
        let response = await fetch("https://bashar-app.herokuapp.com/getMovie");
        let data = await response.json();
        console.log(data);
        setMovies(data);

    };
    useEffect(() => {
        getData();

    }, []);
    function handelDelete(id) {
        const url = `https://bashar-app.herokuapp.com/getMovie/deleteFavMovie/${id}`;
        const response = fetch(url, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc
        }).then(() => {
            getData();
            // we recall the getFavRecipe to get the data from the server again after deleting and
            // it will rernder the component because it is modifying the state
            // getFavMovie();
        });
    }

    return (
        <div>

            {movies && movies.map((movies)=>{
        return (<Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title> Title: {movies.title}</Card.Title>
                <Card.Title>Comment :{movies.comment}</Card.Title>
                <Card.Text style={{ overflowY: "scroll", maxHeight: "100px" }}>
                    {movies.summary}
                </Card.Text>
                <Button onClick={() => handelDelete(movies.id)} variant="primary">
                    Delete
                </Button>
            </Card.Body>
        </Card >)
    })
    } 
    
            </div >


    );
}