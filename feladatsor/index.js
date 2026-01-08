
/** @type {string[]} A fejlec tomb */
const headerArr = ["Szerző", "Mű", "Fogalmak"] //fejlec adatait taralmazo tomb

/**@type {BodyArr[]} A torzs tombje*/
const bodyArr = [ // A torzs adatait tarolo tomb
    {
        author: "Ady Endre", //szerzo tulajdonsaga az elso sorban
        title1: "Őrizem a szemed", //mu tulajdonsaga az elso sorban
        concepts1: "Csinszka-vers", //Fogalmak egyik tulajdonsaga az elso sorban
        concepts2: "hitvesi költészet" //Fogalmak masik tulajdonsaga az elso sorban
    },
    {
        author: "Babits Mihály", //szerzo tulajdonsaga a masodik sorban
        title1: "In Horatium", //mu tulajdonsaga a masodik sorban
        concepts1: "óda" // Fogalmak tulajdonsaga a masodik sorban
    },
    {
        author: "Kosztolányi Dezső", //szerzo tulajdonsaga a harmadik sorban
        title1: "A szegény kisgyermek panaszai", //mu tulajdonsaga a harmadik sorban
        concepts1: "versciklus", //Fogalmak egyik tulajdonsaga a harmadik sorban
        concepts2: "freudizmus" //Fogalmak masik tulajdonsaga a harmadik sorban
    },
    {
        author: "Kosztolányi Dezső", //szerzo tulajdonsaga a negyedik sorban
        title1: "Édes Anna", //mu tulajdonsaga a negyedik sorban
        concepts1: "regény" // Fogalmak tulajdonsaga a negyedik sorban
    },
    {
        author: "Móricz Zsigmond", //szerzo tulajdonsaga az otodik sorban
        title1: "Tragédia", //mu tulajdonsaga az otodik sorban
        concepts1: "novella", //Fogalmak egyik tulajdonsaga az otodik sorban
        concepts2: "dzentri" //Fogalmak masik tulajdonsaga az otodik sorban
    },

]
/** @type {HTMLDivElement} a javascript tablazat divje */
const jsDiv = document.createElement("div") // letrehozza a divet
jsDiv.id = "jssection" //beallitja a div azonositojat
jsDiv.classList.add("hide") //beallitja ra a hide osztalyt
document.body.appendChild(jsDiv) //hozzafuzi az oldal torzsehez

/** @type {HTMLTableElement} a javascriptes tablazat */
const tableJs = document.createElement("table") //letrehozza a tablazat taget
jsDiv.appendChild(tableJs) //hozzafuzi a divhez

/** @type {HTMLTableSectionElement} a javascriptes tablazat fejlece*/
const theadJs = document.createElement("thead") //letrehozza a fejec taget
tableJs.appendChild(theadJs) //hozzafuzi a tablazathoz

/** @type {HTMLTableSectionElement} a javascriptes tablazat torzse */
const tbodyJs = document.createElement("tbody") //letrehozza a tablazat torzsenek a taget
tableJs.appendChild(tbodyJs) //hozzafuzi a tablazathoz

/** @type {HTMLTableRowElement} globalis sor valtozo */
const trHeader = document.createElement("tr") //letrehoz egy sort a fejlec cellaknak
theadJs.appendChild(trHeader) //hozzafuzi a tablazat fejlecehez

generateHeader(headerArr, trHeader) //meghivas es kiiratas
createTbody(bodyArr, tbodyJs) //meghivas es kiiras

/** @type {HTMLInputElement} checkbox tipus */
const checkBox = document.getElementById("tableselector") //lekeri a checkboxot azonosito alapjan
checkBoxOnLoad(checkBox) //kiirja a tablazatot az alapjan hogy betolteskor milyen allapotban van a checkbox
checkBox.addEventListener("change", function(e){ ////esemenykezelo akkor lep akcioba ha valtozatunk a checkbox allapotan
    /** @type {HTMLInputElement}  checkbox valtozoja*/
    const checkbTarget = e.target // esemeny targetje
    checkBoxOnLoad(checkbTarget) //valtoztat a kiirason ha valtozott a checkbox allapota 
})
/** @type {HTMLFormElement} a form valtozoja*/
const jsForm = document.createElement("form") // letrehozza a formot
jsForm.id = "jsform" //megadja a formnak az id-t
jsDiv.appendChild(jsForm) //hozzafuzi az oldal torzsehez

/** @type {HTMLDivElement} a szerzo mezo divje*/
const szerzoDiv = document.createElement("div") //letrehozza a divet
jsForm.appendChild(szerzoDiv) //hozzafuzi a formhoz
/** @type {HTMLBRElement} sortores*/
const brSzerzo = document.createElement("br") //letrehoz egy sortorest
szerzoDiv.appendChild(brSzerzo) //hozzafuzi a divhez
/** @type {HTMLLabelElement} a label */
const labelSzerzo = document.createElement("label") //letrehozza a label mezot
labelSzerzo.htmlFor = "elso" //beallitja a label for erteket
labelSzerzo.innerText = "Szerző " // Beallitja mi legyen a mezo szovege
szerzoDiv.appendChild(labelSzerzo) //hozzafuzi a divhez
/** @type {HTMLBRElement}  sortores*/
const brSzerzoo = document.createElement("br") //letrehoz egy sortorest
szerzoDiv.appendChild(brSzerzoo) //hozzafuzi a divhez
/** @type {HTMLInputElement} az input mezo*/
const inputSzerzo = document.createElement("input") //letrehozza az input mezot
inputSzerzo.type = "text" //text tipust beallitja
inputSzerzo.name = "szerzo" //megadja a nev tualdonsag erteket
inputSzerzo.id = "elso" // megadja az input idjet 
szerzoDiv.appendChild(inputSzerzo) // hozzafuzi a divhez
/** @type {HTMLSpanElement} a span*/
const spanSzerzo = document.createElement("span") //letrehozza a span mezot
spanSzerzo.classList.add("error") //rateszi az error osztalyt
szerzoDiv.appendChild(spanSzerzo) //hozzafuzi a divhez
/** @type {HTMLBRElement}  sortores*/
const brSzerzooo = document.createElement("br") //letrehoz egy sortorest
szerzoDiv.appendChild(brSzerzooo) //hozzafuzi a divhez


/** @type {HTMLDivElement} a mu mezo divje*/
const muDiv = document.createElement("div") //letrehozza a divet
jsForm.appendChild(muDiv) //hozzafuzi a formhoz
/** @type {HTMLLabelElement} a label */
const labelMu = document.createElement("label") //letrehozza a label mezot
labelMu.htmlFor = "masodik" //beallitja a label for erteket
labelMu.innerText = "Mű" // Beallitja mi legyen a mezo szovege
muDiv.appendChild(labelMu) //hozzafuzi a divhez
/** @type {HTMLBRElement}  sortores*/
const brMuu = document.createElement("br") //letrehoz egy sortorest
muDiv.appendChild(brMuu) //hozzafuzi a divhez
/** @type {HTMLInputElement} az input mezo*/
const inputMu = document.createElement("input") //letrehozza az input mezot
inputMu.type = "text" //text tipust beallitja
inputMu.name = "mu" //megadja a nev tualdonsag erteket
inputMu.id = "masodik" // megadja az input idjet 
muDiv.appendChild(inputMu) // hozzafuzi a divhez
/** @type {HTMLSpanElement} a span*/
const spanMu = document.createElement("span") //letrehozza a span mezot
spanMu.classList.add("error") //rateszi az error osztalyt
muDiv.appendChild(spanMu) //hozzafuzi a divhez
/** @type {HTMLBRElement}  sortores*/
const brMuuu = document.createElement("br") //letrehoz egy sortorest
muDiv.appendChild(brMuuu) //hozzafuzi a divhez

/** @type {HTMLDivElement} a fogalmak1 mezo divje*/
const fogalmakElsoDiv = document.createElement("div") //letrehozza a divet
jsForm.appendChild(fogalmakElsoDiv) //hozzafuzi a formhoz
/** @type {HTMLLabelElement} a label */
const labelFogalmakElso = document.createElement("label") //letrehozza a label mezot
labelFogalmakElso.htmlFor = "harmadik" //beallitja a label for erteket
labelFogalmakElso.innerText = "Fogalmak" // Beallitja mi legyen a mezo szovege
fogalmakElsoDiv.appendChild(labelFogalmakElso) //hozzafuzi a divhez
/** @type {HTMLBRElement}  sortores*/
const brFogalmakElso = document.createElement("br") //letrehoz egy sortorest
fogalmakElsoDiv.appendChild(brFogalmakElso) //hozzafuzi a divhez
/** @type {HTMLInputElement} az input mezo*/
const inputFogalmakElso = document.createElement("input") //letrehozza az input mezot
inputFogalmakElso.type = "text" //text tipust beallitja
inputFogalmakElso.name = "fogalmak1" //megadja a nev tualdonsag erteket
inputFogalmakElso.id = "harmadik" // megadja az input idjet 
fogalmakElsoDiv.appendChild(inputFogalmakElso) // hozzafuzi a divhez
/** @type {HTMLSpanElement} a span*/
const spanFogalmakElso = document.createElement("span") //letrehozza a span mezot
spanFogalmakElso.classList.add("error") //rateszi az error osztalyt
fogalmakElsoDiv.appendChild(spanFogalmakElso) //hozzafuzi a divhez
/** @type {HTMLBRElement}  sortores*/
const brFogalmakElsoo = document.createElement("br") //letrehoz egy sortorest
fogalmakElsoDiv.appendChild(brFogalmakElsoo) //hozzafuzi a divhez

/** @type {HTMLDivElement} a fogalmak2 mezo divje*/
const fogalmakMasodikDiv = document.createElement("div") //letrehozza a divet
jsForm.appendChild(fogalmakMasodikDiv) //hozzafuzi a formhoz
/** @type {HTMLLabelElement} a label */
const labelFogalmakMasodik = document.createElement("label") //letrehozza a label mezot
labelFogalmakMasodik.htmlFor = "negyedik" //beallitja a label for erteket
labelFogalmakMasodik.innerText = "Másik Fogalmak" // Beallitja mi legyen a mezo szovege
fogalmakMasodikDiv.appendChild(labelFogalmakMasodik) //hozzafuzi a divhez
/** @type {HTMLBRElement}  sortores*/
const brFogalmakMasodik = document.createElement("br") //letrehoz egy sortorest
fogalmakMasodikDiv.appendChild(brFogalmakMasodik) //hozzafuzi a divhez
/** @type {HTMLInputElement} az input mezo*/
const inputFogalmakMasodik = document.createElement("input") //letrehozza az input mezot
inputFogalmakMasodik.type = "text" //text tipust beallitja
inputFogalmakMasodik.name = "fogalmak2" //megadja a nev tualdonsag erteket
inputFogalmakMasodik.id = "negyedik" // megadja az input idjet 
fogalmakMasodikDiv.appendChild(inputFogalmakMasodik) // hozzafuzi a divhez
/** @type {HTMLSpanElement} a span*/
const spanFogalmakMasodik = document.createElement("span") //letrehozza a span mezot
spanFogalmakMasodik.classList.add("error") //rateszi az error osztalyt
fogalmakMasodikDiv.appendChild(spanFogalmakMasodik) //hozzafuzi a divhez
/** @type {HTMLBRElement}  sortores*/
const brFogalmakMasodikk = document.createElement("br") //letrehoz egy sortorest
fogalmakMasodikDiv.appendChild(brFogalmakMasodikk) //hozzafuzi a divhez

/** @type {HTMLButtonElement} a hozzaadas gomb */
const buttonForm = document.createElement("button") //letrehozza a gombot
buttonForm.innerText = "Hozzáadás" //beallitja a szoveget
jsForm.appendChild(buttonForm) //hozzafuzi a formhoz