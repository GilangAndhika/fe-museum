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

function isiRow(result) {
    console.log('Result:', result);
    let content =
        isiTabel.replace("#NAMA#", result.name)
            .replace("#LOKASI#", result.location)
            .replace("#EST#", result.establishedYear)
            .replace("#DESKRIPSI#", result.description)
            .replace("#WEBSITE#", result.website)
            .replace("#JAMOPERASI#", result.openingHours)
            .replace("#KARYA#", result.items ? (result.items[0].name || "-") : "-")
            .replace("#SENIMAN#", result.items ? (result.items[0].artist || "-") : "-")
            .replace("#DESKRIPSIKARYA#", result.items ? (result.items[0].description || "-") : "-")
            .replace("#TAHUN#", result.items ? (result.items[0].year || "-") : "-")
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}
