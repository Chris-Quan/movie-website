import axios from 'axios';

export default axios.create({
    baseURL:'https://c47f-99-226-37-109.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});