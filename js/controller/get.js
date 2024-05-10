import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";

// Mengubah struktur objek dari MongoDB agar sesuai dengan yang diharapkan
function convertMongoDBData(results) {
    return results.map(result => ({
        name: result.name,
        location: result.location,
        establishedYear: result.establishedYear,
        description: result.description,
        website: result.website,
        openingHours: result.openingHours,
        jam_kerja: result.jam_kerja // Properti jam_kerja diambil langsung dari MongoDB
    }));
}

export function isiTableCollections(results) {
    console.log('Results:', results);
    const convertedResults = convertMongoDBData(results);
    convertedResults.forEach(isiRow);
}

function isiRow(resu) {
    console.log('resu:', resu);
    let content =
        isiTabel.replace("#NAMA#", resu.name)
            .replace("#LOKASI#", resu.location)
            .replace("#EST#", resu.establishedYear)
            .replace("#DESKRIPSI#", resu.description)
            .replace("#WEBSITE#", resu.website)
            .replace("#HARIKERJA#", resu.openingHours)
            .replace("#JAMKERJA#", resu.jam_kerja ? resu.jam_kerja[0].durasi + " jam" : "Belum diatur")
            .replace("#JAMMASUK#", resu.jam_kerja ? resu.jam_kerja[0].jam_masuk + " WIB" : "Belum diatur")
            .replace("#JAMKELUAR#", resu.jam_kerja ? resu.jam_kerja[0].jam_keluar + " WIB" : "Belum diatur")
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}
