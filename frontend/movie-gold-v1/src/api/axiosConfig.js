import axios from 'axios';

export default axios.create({
    //baseURL:'https://263d-99-226-37-109.ngrok-free.app',
    //headers: {"ngrok-skip-browser-warning": "true"}
    baseURL: 'http://localhost:8080/'

    //changing base url to make it easier to deploy locally without the need of ngrok
});