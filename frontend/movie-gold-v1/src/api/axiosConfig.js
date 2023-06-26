import axios from 'axios';

export default axios.create({
    baseURL:'https://263d-99-226-37-109.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});