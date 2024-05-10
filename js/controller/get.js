import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";

export function isiTableCollections(results) {
    results.forEach(isiRow);
}

function isiRow(value) {
    if (!value || typeof value !== 'object') {
      throw new Error('The input value must be a non-empty object.');
    }
  
    const requiredProperties = ['collections', 'name', 'location', 'establishedYear', 'description', 'website', 'openingHours'];
    requiredProperties.forEach(prop => {
      if (!value.hasOwnProperty(prop) || value[prop] === null || value[prop] === undefined) {
        throw new Error(`Missing required property: ${prop}`);
      }
    });
  
    if (!value.collections.hasOwnProperty('name') || !value.collections.hasOwnProperty('location') || !value.collections.hasOwnProperty('establishedYear')) {
      throw new Error('The collections object must have name, location, and establishedYear properties.');
    }
  
    if (typeof value.collections.name !== 'string' || typeof value.location !== 'string' || typeof value.establishedYear !== 'number') {
      throw new Error('The name, location, and establishedYear properties must be a string and a number, respectively.');
    }
  
    if (typeof value.description !== 'string' || typeof value.website !== 'string' || typeof value.openingHours !== 'string') {
      throw new Error('The description, website, and openingHours properties must be a string.');
    }
  
    if (!Array.isArray(value.jam_kerja) || value.jam_kerja.length === 0) {
      value.jam_kerja = [{ durasi: 0, jam_masuk: 'Belum diatur', jam_keluar: 'Belum diatur' }];
    }
  
    let content =
      isiTabel.replace('#NAMA#', value.collections.name)
        .replace('#LOKASI#', value.location)
        .replace('#EST#', value.establishedYear)
        .replace('#DESKRIPSI#', value.description)
        .replace('#WEBSITE#', value.website)
        .replace('#HARIKERJA#', value.openingHours)
        .replace('#JAMKERJA#', value.jam_kerja ? value.jam_kerja[0].durasi + " jam" : "Belum diatur")
        .replace('#JAMMASUK#', value.jam_kerja ? value.jam_kerja[0].jam_masuk + " WIB" : "Belum diatur")
        .replace('#JAMKELUAR#', value.jam_kerja ? value.jam_kerja[0].jam_keluar + " WIB" : "Belum diatur")
        .replace('#WARNA#', getRandomColor())
        .replace(/#WARNALOGO#/g, getRandomColorName());
  
    addInner("iniTabel", content);
  }

// function isiRow(value) {

//     let content =

//         isiTabel.replace("#NAMA#", value.collections.name)
//             .replace("#LOKASI#", value.location)
//             .replace("#EST#", value.establishedYear)
//             .replace("#DESKRIPSI#", value.description)
//             .replace("#WEBSITE#", value.website)
//             .replace("#HARIKERJA#", value.openingHours)
//             .replace("#JAMKERJA#", value.jam_kerja ? value.jam_kerja[0].durasi + " jam" : "Belum diatur")
//             .replace("#JAMMASUK#", value.jam_kerja ? value.jam_kerja[0].jam_masuk + " WIB" : "Belum diatur")
//             .replace("#JAMKELUAR#", value.jam_kerja ? value.jam_kerja[0].jam_keluar + " WIB" : "Belum diatur")
//             .replace("#WARNA#", getRandomColor())
//             .replace(/#WARNALOGO#/g, getRandomColorName());
//     addInner("iniTabel", content);
// }
