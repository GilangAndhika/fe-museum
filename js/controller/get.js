import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";

// Mengubah struktur objek dari MongoDB agar sesuai dengan yang diharapkan
function convertMongoDBData(results) {
    return results.map(obj => ({
        name: obj.Value.name,
        location: obj.Value.location,
        establishedYear: obj.Value.establishedYear,
        description: obj.Value.description,
        website: obj.Value.website,
        openingHours: obj.Value.openingHours,
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
            .replace("#HARIKERJA#", result.openingHours)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}
