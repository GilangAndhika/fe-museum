import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";

// Mengubah struktur objek dari MongoDB agar sesuai dengan yang diharapkan
function convertMongoDBData(results) {
    return results.map(result => {
        // Mendapatkan nilai properti yang diinginkan dari objek yang diterima
        const name = result.find(item => item.Key === 'name')?.Value || '';
        const location = result.find(item => item.Key === 'location')?.Value || '';
        const establishedYear = result.find(item => item.Key === 'establishedYear')?.Value || '';
        const description = result.find(item => item.Key === 'description')?.Value || '';
        const website = result.find(item => item.Key === 'website')?.Value || '';
        const openingHours = result.find(item => item.Key === 'openingHours')?.Value || '';
        const jam_kerja = result.find(item => item.Key === 'jam_kerja')?.Value || '';

        return {
            name,
            location,
            establishedYear,
            description,
            website,
            openingHours,
            jam_kerja
        };
    });
}


export function isiTableCollections(results) {
    console.log('Results:', results);
    const convertedResults = convertMongoDBData(results);
    convertedResults.forEach(isiRow);
}

function isiRow(value) {
    console.log('Value:', value);
    let content =
        isiTabel.replace("#NAMA#", value.name)
            .replace("#LOKASI#", value.location)
            .replace("#EST#", value.establishedYear)
            .replace("#DESKRIPSI#", value.description)
            .replace("#WEBSITE#", value.website)
            .replace("#HARIKERJA#", value.openingHours)
            .replace("#JAMKERJA#", value.jam_kerja ? value.jam_kerja[0].durasi + " jam" : "Belum diatur")
            .replace("#JAMMASUK#", value.jam_kerja ? value.jam_kerja[0].jam_masuk + " WIB" : "Belum diatur")
            .replace("#JAMKELUAR#", value.jam_kerja ? value.jam_kerja[0].jam_keluar + " WIB" : "Belum diatur")
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}
