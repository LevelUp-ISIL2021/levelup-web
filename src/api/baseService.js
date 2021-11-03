import axios from 'axios';
require('dotenv').config();

const http = axios.create({
	// baseURL: process.env.BASE_API
	baseURL: "http://localhost:4000/api"
});

http.interceptors.response.use(undefined, (error) => {
	if (error.message === 'Network Error' && !error.response) {
		console.error('Network error - make sure the API server is running');
	}

	const { status, data, config } = error.response;

	if (status === 404) {
		// console.log('/notFound');
	}

	// eslint-disable-next-line no-prototype-builtins
	if (
		status === 400 &&
		config.method === 'get' &&
		data.errors.hasOwnProperty('id')
	) {
		console.info('/notFound');
	}

	if (status === 500) {
		console.error('Server error - check the terminal for more info!');
	}

	throw error;
});

const responseBody = (response) => response.data;

const responseWithHeaders = (res) => ({
	response: res.data,
	headers: res.headers,
});

const baseApi = {
	get: (url) => http.get(url).then(responseBody),
	post: (url, body) => http.post(url, body).then(responseBody),
	put: (url, body) => http.put(url, body).then(responseBody),
	delete: (url) => http.delete(url).then(responseBody),

	getWithCredentials: (url, axiosConfig) =>
		http.get(url, axiosConfig).then(responseWithHeaders),

	postWithCredentials: (
		url,
		body,
		axiosConfig
	) => http.post(url, body, axiosConfig).then(responseWithHeaders),

	putWithCredentials: (
		url,
		body,
		axiosConfig
	) => http.put(url, body, axiosConfig).then(responseWithHeaders),

	deleteWithCredentials: (url, axiosConfig) =>
		http.delete(url, axiosConfig).then(responseWithHeaders),
};

export default baseApi;