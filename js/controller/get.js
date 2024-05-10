import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTableCollections(results) {
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
            .replace("#JAMKERJA#", value.biodata.jam_kerja? value.biodata.jam_kerja[0].durasi + " jam" : "Belum diatur") 
            .replace("#JAMMASUK#", value.biodata.jam_kerja? value.biodata.jam_kerja[0].jam_masuk + " WIB" : "Belum diatur") 
            .replace("#JAMKELUAR#", value.biodata.jam_kerja? value.biodata.jam_kerja[0].jam_keluar + " WIB" : "Belum diatur") 
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}
