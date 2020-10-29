// const API_KEY = "9b62ac1eafaa86d7ad48e61ebb6dcb5b";
// const baseUrl = "https://api.themoviedb.org/3";
// const requests = {
//     "fetchTrending" : `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     "fetchNetflixOriginals" : `${baseUrl}/discover/tv?api_key=${API_KEY}&with_network=213`,
//     "fetchTopRated" : `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     "fetchActionMovies" : `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     "fetchComedyMovies" : `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     "fetchHorrorMovies" : `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     "fetchRomanticMovies" : `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     "fetchDocumentaries" : `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`,
// };

const baseUrl = "http://freenfx.herokuapp.com";
const requests = {
    "fetchHorror" : `${baseUrl}/api/horror/all/`,
    "fetchAction" : `${baseUrl}/api/action/all/`,
    "fetchRomantic" : `${baseUrl}/api/romantic/all/`,
    "fetchOthers" : `${baseUrl}/api/others/all/`,
    "fetchScifi" : `${baseUrl}/api/scifi/all/`,
    "fetchSeries" : `${baseUrl}/api/series/all/`,
}
export default requests;
