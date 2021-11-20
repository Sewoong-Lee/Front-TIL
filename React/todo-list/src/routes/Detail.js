import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Deatil() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie_details, setMovie_details] = useState([]);
    const getMovie = async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        // console.log(json);
        console.log(json.data.movie);
        setMovie_details(json.data.movie);
        setLoading(false);
    };
    useEffect(()=>{
        getMovie();
    }, []);
    return (
        <div>
        <h1>Deatil</h1>
        <hr />
        {loading ? <h1>Loading...</h1> : (
        <div>
            <h2>{movie_details.title}</h2>
            <img src={movie_details.medium_cover_image} alt="이미지" />
            <div>개봉일: {movie_details.year}</div>
            <div>소개글: {movie_details.description_intro}</div>
        </div>
        )}
        </div>
    );
}

export default Deatil;