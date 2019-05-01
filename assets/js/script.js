import "normalize.css";
import "babel-polyfill";
import $ from "jquery";
import '../css/style.css';

////////////////////////////////////////////////////////////////////////////////////////////////
import gNews from'./gNews';
import { newsTemplate } from './templates.js';

const getSocialNews = async() =>{
    try{
        let resp = await gNews("/everything?q=social");
        let newsList = resp.data.articles.map(news => newsTemplate(news));
        $("#socialNews").html(newsList);
    } catch(erroe){
        console.log(error);
    }
};

const getEntertainment = async() =>{
    try{
        let resp = await gNews("/everything?q=entertainment");
        let newsList = resp.data.articles.map(news => newsTemplate(news));
        $("#entertainmentNews").html(newsList);
    } catch(erroe){
        console.log(error);
    }
};

const getSportNews = async() =>{
    try{
        let resp = await gNews("/everything?q=sport");
        let newsList = resp.data.articles.map(news => newsTemplate(news));
        $("#sportNews").html(newsList);
    } catch(erroe){
        console.log(error);
    }
};

const getTaiwanNews = async() =>{
    try{
        let resp = await gNews("/everything?q=taiwan");
        let newsList = resp.data.articles.map(news => newsTemplate(news));
        $("#taiwanNews").html(newsList);
    } catch(erroe){
        console.log(error);
    }
};

getSocialNews();
getEntertainment();
getSportNews();
getTaiwanNews();

// w9動態網頁簡報p18///////////////////////////////////////////////////////////////////////////////