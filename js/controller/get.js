import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";

export function isiTableCollections(results) {
    results.forEach(isiRow);
}

function isiRow(value) {
    let content =
        isiTabel.replace("#NAMA#", value.name)
            .replace("#NOHP#", value.location)
            .replace("#JABATAN#", value.establishedYear)
            .replace("#LOKASI#", value.description)
            .replace("#STATUS#", value.website)
            .replace("#HARIKERJA#", value.openingHours)
            .replace("#JAMKERJA#", value.jam_kerja ? value.jam_kerja[0].durasi + " jam" : "Belum diatur")
            .replace("#JAMMASUK#", value.jam_kerja ? value.jam_kerja[0].jam_masuk + " WIB" : "Belum diatur")
            .replace("#JAMKELUAR#", value.jam_kerja ? value.jam_kerja[0].jam_keluar + " WIB" : "Belum diatur")
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}
