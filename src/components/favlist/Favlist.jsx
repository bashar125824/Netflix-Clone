import React from "react";
import { Card, Button } from "react-bootstrap";
import swal from "sweetalert";

export default function Favlist({ movies, getFavMovie }) {
    function handelDelete(id) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
                // if the user confirm deleteing it will delete from the database
                const url = `${process.env.REACT_APP_SERVER}/deleteFavMovie/${id}`;
                const response = fetch(url, {
                    method: "DELETE", // *GET, POST, PUT, DELETE, etc
                }).then(() => {
                    // we recall the getFavRecipe to get the data from the server again after deleting and
                    // it will rernder the component because it is modifying the state
                    getFavMovie();
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    return (
        <Card style={{ width: "18rem" }}>
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
        </Card>
    );
}