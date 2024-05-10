import { get } from "https://bukulapak.github.io/api/process.js"; 
import { setInner } from "https://bukulapak.github.io/element/process.js";

let urlAPI = "https://ws-gilang-ats-65a7295ec924.herokuapp.com/museum/collections";

get(urlAPI, isiTableCollections);

function isiTableCollections(results){
    console.log(results);
    results.forEach(isiRow);
}

function isiRow(value) {
    let content = 
    isiTabel.replace("#NAME#", value.name)
            .replace("#DESCRIPTION#", value.description)
            .replace("#YEAR#", value.year)
            .replace("#ARTIST#", value.artist)
            .replace("#MEDIUM#", value.medium)
            .replace("#DIMENSIONS#", value.dimensions)
            .replace("#ORIGIN#", value.origin)
            .replace("#ACQUISITION#", value.acquisition)
            .replace("#CONDITION#", value.condition);
    addInner("iniTabel", content);
}
