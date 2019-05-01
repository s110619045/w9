import axios from 'axios';
const apiKey="5fe4177b59454e18b05b85f319368894";

export default axios.create({
    method:"get",
    baseURL:"https://newsapi.org/v2",
    params:{
        pageSize:6
    },
    headers:{
        Authorization: apiKey
    }
});

// w9動態網頁簡報p17