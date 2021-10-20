const apiConfig = {
    baseURL: process.env.API_END_POINT,
    API_KEY: process.env.API_KEY,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}
export default apiConfig;

