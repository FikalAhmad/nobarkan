/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MOVIE_SEARCH: process.env.MOVIE_SEARCH,
    API_MOVIE: process.env.API_MOVIE,
    LINK_IMAGE: process.env.LINK_IMAGE,
    BEARER_TOKEN: process.env.BEARER_TOKEN,
    MOVIE_GENRE: process.env.MOVIE_GENRE,
  },
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
      },
    ],
  },
};

module.exports = nextConfig;
