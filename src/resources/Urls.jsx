const baseURl = 'http://localhost:5000/';

const baseApi = {
	movies: baseURl + 'movies/',
	series: baseURl + 'series/',
	general: baseURl + '/'
};

// this is a exmple data for enpoint api
export const Urls = {
	movies: {
		generate: baseApi.movies + 'generate',
		get: baseApi.movies + 'get',
		getCarousel: baseApi.movies + 'getCarousel',
		search: baseApi.movies + 'search',
		getGenres: baseApi.movies + 'getGenres',
		getDirectors: baseApi.movies + 'getDirectors'
	},
	series: {
		generate: baseApi.series + 'generate',
		get: baseApi.series + 'get',
		getCarousel: baseApi.series + 'getCarousel',
		search: baseApi.series + 'search',
		getGenres: baseApi.series + 'getGenres'
	},
	general: {
		getVideo: baseApi.general + 'get/video'
	}
};
