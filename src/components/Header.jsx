import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
export default function Header() {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/favlist">Favorite-List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/modalmovie">Modal-Movie</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/movie">Movie</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/movielist">Movie-List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/navbar">NavBar</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}