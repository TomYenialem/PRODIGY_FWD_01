import  axios from 'axios';

const base_url=axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})
export default base_url