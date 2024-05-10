import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";

export function isiTableMuseumCollections(results) {
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
