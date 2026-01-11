
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
tbodyJs.id = "jstbody" //megadja a tbody idjet 
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

/** @type {HTMLFormElement} a form*/
const jsForm = generateFullForm(jsDiv) //beleteszi a formot egy valtozoba

jsForm.addEventListener("submit", function(e){ //esemenykezelo a formnak adat hozzaadasa a formhoz a gombra nyomaskor
    e.preventDefault() //megakadalyozza az alapveto muvelet vegrehajtasat

    /** @type {HTMLFormElement} a submit target tipusa */
    const targetSubmit = e.target //eltarolja a submit targetjet egy valtozoban
    /** @type {HTMLInputElement} az input */
    const szerzoInp = targetSubmit.querySelector("#elso") //elkeri id alapjan az input mezot
    /** @type {HTMLInputElement} az input */
    const muInp = targetSubmit.querySelector("#masodik") //elkeri id alapjan az input mezot
    /** @type {HTMLInputElement} az input */
    const fogalmakInp = targetSubmit.querySelector("#harmadik") //elkeri id alapjan az input mezot
    /** @type {HTMLInputElement} az input */
    const fogalmakMasikInp = targetSubmit.querySelector("#negyedik") //elkeri id alapjan az input mezot
    /** @type {string} szerzo szovege */
    const szerzoValue = szerzoInp.value //erteke az input mezonek
     /** @type {string} mu szovege */
    const muValue = muInp.value //erteke az input mezonek
     /** @type {string} fogalmak szovege */
    const fogalmakValue = fogalmakInp.value //erteke az input mezonek
     /** @type {string} fogalmak2 szovege */
    const fogalmakMasikValue = fogalmakMasikInp.value //erteke az input mezonek

    /**@type {BodyArr} objektum adatai */
    const valueObj = {} //ures objektum 
    valueObj.author = szerzoValue //szerzo tulajdonsag ertekenek beallitasa
    valueObj.title1 = muValue //mu tulajdonsag ertekenek beallitasa
    valueObj.concepts1 = fogalmakValue //fogalmak tulajdonsag ertekenek beallitasa

    if(fogalmakMasikValue){ //ha definialva van masik fogalom
        valueObj.concepts2 = fogalmakMasikValue //beallitja a fogalmak2 tulajdonsag erteket
    }
    /** @type {HTMLTableSectionElement} a tablazat torzse */
    const tbodyJs = document.getElementById("jstbody") //lekeri a javascriptes tablazat torzset id alapjan
    bodyArr.push(valueObj) //hozzaadjuk a tombhoz a feltoltott objektumot
    createTbody(bodyArr, tbodyJs) //kiirja a frissitett tablazatot
    targetSubmit.reset() //gomb megnyomasa utan kiuriti a mezoket 
    
}) 
/** @type {HTMLFormElement} a htmles form */
const htmlForm = document.getElementById("htmlform") //elkeri a htmles formot id alapjan
htmlForm.addEventListener("submit", function(e){ //esemenykezelo a formnak adat hozzaadasa a formhoz a gombra nyomaskor
     e.preventDefault() //megakadalyozza az alapveto muvelet vegrehajtasat
    /** @type {HTMLFormElement} a submit target tipusa */
    const targetSubmit = e.target //eltarolja a submit targetjet egy valtozoban
    /** @type {HTMLInputElement} az input */
    const szerzoInp = targetSubmit.querySelector("#elso") //elkeri id alapjan az input mezot
    /** @type {HTMLInputElement} az input */
    const muInp = targetSubmit.querySelector("#masodik") //elkeri id alapjan az input mezot
    /** @type {HTMLInputElement} az input */
    const fogalmakInp = targetSubmit.querySelector("#harmadik") //elkeri id alapjan az input mezot
    /** @type {HTMLInputElement} az input */
    const muMasikInp = targetSubmit.querySelector("#negyedik") //elkeri id alapjan az input mezot
    /** @type {HTMLInputElement} az input */
    const fogalmakMasikInp = targetSubmit.querySelector("#otodik") //elkeri id alapjan az input mezot
    /** @type {string} szerzo szovege */
    const szerzoValue = szerzoInp.value //erteke az input mezonek
     /** @type {string} mu szovege */
    const muValue = muInp.value //erteke az input mezonek
     /** @type {string} fogalmak szovege */
    const fogalmakValue = fogalmakInp.value //erteke az input mezonek
    /** @type {string} mu2 szovege */
    const muMasikValue = muMasikInp.value //erteke az input mezonek
     /** @type {string} fogalmak2 szovege */
    const fogalmakMasikValue = fogalmakMasikInp.value //erteke az input mezonek

    /**@type {BodyArr} objektum adatai */
    const valueObj = {} //ures objektum 
    valueObj.author = szerzoValue //szerzo tulajdonsag ertekenek beallitasa
    valueObj.title1 = muValue //mu tulajdonsag ertekenek beallitasa
    valueObj.concepts1 = fogalmakValue //fogalmak tulajdonsag ertekenek beallitasa

    if(muMasikValue && fogalmakMasikValue){ //ha definialva van masik fogalom es mu
        valueObj.concepts2 = fogalmakMasikValue //beallitja a fogalmak2 tulajdonsag erteket
        valueObj.title2 = muMasikValue //beallitja a mu2 tulajdonsag erteket
    }
    /** @type {HTMLTableSectionElement} a tablazat torzse */
    const tbodyHtml = document.getElementById("htmltbody") //lekeri a htmles tablazat torzset id alapjan
    generateHtmlAddRow(valueObj, tbodyHtml) //kiirja a frissitett tablazatot
    targetSubmit.reset() //gomb megnyomasa utan kiuriti a mezoket 
    
})
