import { get } from "https://bukulapak.github.io/api/process.js"; 
import { setInner } from "https://bukulapak.github.io/element/process.js";
let urlAPI = "https://ws-gilang-ats-65a7295ec924.herokuapp.com/collections";
get(urlAPI,isiTableCollections);
function isiTableCollections(results){
    console.log(results);
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#NAMA#", value.nama)
            .replace("#NOHP#", value.location)
            .replace("#JABATAN#", value.establishedYear)
            .replace("#LOKASI#", value.description)
            .replace("#STATUS#", value.checkin)
            .replace("#HARIKERJA#", value.biodata.hari_kerja)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}

