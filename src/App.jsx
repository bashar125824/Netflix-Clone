import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Favlist from "./components/favlist/Favlist";
import Modalmovie from "./components/modalmovie/Modalmovie";
import Movie from "./components/movie/Movie";
import Movielist from "./components/movielist/Movielist";
import Navbar from "./components/navbar/Navbar";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favlist" element={<Favlist />} />
            <Route path="/modalmovie" element={<Modalmovie />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/movielist" element={<Movielist />} />
            <Route path="/navbar" element={<Navbar />} />

        </Routes>
    );
}