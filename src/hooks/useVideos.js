import React, {useState, useEffect} from 'react';
import youtubeAPI from "../apis";

const UseVideos = (defaultTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        Search(defaultTerm);
    }, [])

    const Search = async term => {
        const data = await youtubeAPI.get("/search", {
            params: {
                q: term,
            },
        });
        setVideos(data.data.items)
    };

    return [videos, Search]
};

export default UseVideos;