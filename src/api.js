import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "f3341ae37fe392613293736e7f266ef5",
        language: "ko-KR"
    }
});

const getMovieApi = {
    latest: () => api.get("movie/latest", {
        params: {
            api_key: "f3341ae37fe392613293736e7f266ef5",
            language: "ko-KR"
        }
    }),
    nowPlaying: () => api.get('movie/now_playing', {
        params: {
            api_key: "f3341ae37fe392613293736e7f266ef5",
            language: "ko-KR"
        }
    }),
    popular:() => api.get('movie/popular', {
        params: {
            api_key: "f3341ae37fe392613293736e7f266ef5",
            language: "ko-KR"
        }
    }) ,
    topRated:() => api.get('movie/top_rated', {
        params: {
            api_key: "f3341ae37fe392613293736e7f266ef5",
            language: "ko-KR"
        }
    }) ,
    upcomming:() => api.get('movie/upcoming', {
        params: {
            api_key: "f3341ae37fe392613293736e7f266ef5",
            language: "ko-KR"
        }
    }),
    detail: id => api.get(`movie/${id}`, {
        params: {
            api_key: "f3341ae37fe392613293736e7f266ef5",
            language: "ko-KR",
            append_to_response: "videos"
        }
    }),
    search: term => api.get("search/movie", {
        params: {
            api_key: "f3341ae37fe392613293736e7f266ef5",
            language: "ko-KR",
            query: encodeURIComponent(term) // api 마다 다르다
        }
    })
}

export default getMovieApi;