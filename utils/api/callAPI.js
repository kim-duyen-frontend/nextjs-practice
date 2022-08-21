import axios from 'axios'

export const myAPI = axios.create({
	baseURL: 'https://kimduyen.free.beeceptor.com/api'
})
export const getPosts = async () => {
	const response = await myAPI.get("/students");
	return response.data
}