const apiConfig = {
    baseURL: process.env.REACT_APP_API_END_POINT,
    API_KEY: process.env.REACT_APP_API_KEY,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}
export default apiConfig;

