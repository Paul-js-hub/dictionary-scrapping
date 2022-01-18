import axios from "axios";

exports.getUrlText = (url) =>{
    return axios.get(url)
    .then(response =>{
        return response.data
    })
    .catch(err =>{
        console.log(err);
    })
}