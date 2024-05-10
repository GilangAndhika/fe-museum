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
    isiTabel.replace("#NAMA#", value.biodata.nama)
            .replace("#NOHP#", value.biodata.phone_number)
            .replace("#JABATAN#", value.biodata.jabatan)
            .replace("#LOKASI#", value.location)
            .replace("#STATUS#", value.checkin)
            .replace("#HARIKERJA#", value.biodata.hari_kerja)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}

