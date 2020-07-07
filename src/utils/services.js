import axios from 'axios';
const apiUrl = 'https://nineoneeightstaging.herokuapp.com';



function get(endpoint) {
    axios.get(apiUrl + endpoint)
}