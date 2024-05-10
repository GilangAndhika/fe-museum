import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-gilang-ats-65a7295ec924.herokuapp.com/collections";
get(urlAPI,isiTableCollections);
function isiTableCollections(results){
    console.log(results);
}