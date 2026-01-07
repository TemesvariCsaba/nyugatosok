/** @typedef {{author: string, title1: string, concepts1: string, title2?:string, concepts2?: string}} BodyArr adattombF*/

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

/** @type {HTMLTableElement} a javascriptes tablazat */
const tableJs = document.createElement("table") //letrehozza a tablazat taget
document.body.appendChild(tableJs) //hozzafuzi az oldal bodyjahoz

/** @type {HTMLTableSectionElement} a javascriptes tablazat fejlece*/
const theadJs = document.createElement("thead") //letrehozza a fejec taget
tableJs.appendChild(theadJs) //hozzafuzi a tablazathoz

/** @type {HTMLTableSectionElement} a javascriptes tablazat torzse */
const tbodyJs = document.createElement("tbody") //letrehozza a tablazat torzsenek a taget
tableJs.appendChild(tbodyJs) //hozzafuzi a tablazathoz

/** @type {HTMLTableRowElement} globalis sor valtozo */
const trHeader = document.createElement("tr") //letrehoz egy sort a fejlec cellaknak
theadJs.appendChild(trHeader) //hozzafuzi a tablazat fejlecehez
/**
 * letrehozza a fejlecet
 * @param {string[]} headContentArr fejlec tomb tipus
 * @param {HTMLTableRowElement} parentTr  //sor amihez fuzi
 * @returns {void} nincs visszateresi erteke
 */
function generateHeader(headContentArr, parentTr){ //fuggveny egy string tomb tipusu es egy  tr tipusu parameterrel amihez hozzafuzi magat a cellat
    /** @type {HTMLTableCellElement} fejlec cella*/
    const thAuthor = document.createElement("th") //letrehozza a cellat
    thAuthor.innerText = headContentArr[0] //feltolti tartalommal
    parentTr.appendChild(thAuthor) //hozzafuzi a sorhoz

    /** @type {HTMLTableCellElement} fejlec cella*/
    const thTitle = document.createElement("th") //letrehozza a cellat
    thTitle.innerText = headContentArr[1] //feltolti tartalommal
    parentTr.appendChild(thTitle) //hozzafuzi a sorhoz

    /** @type {HTMLTableCellElement} fejlec cella*/
    const thConcepts = document.createElement("th") //letrehozza a cellat
    thConcepts.innerText = headContentArr[2] //feltolti tartalommal
    thConcepts.colSpan = "2" //oszloposszevonas a fogalmak cellanak
    parentTr.appendChild(thConcepts) //hozzafuzi a sorhoz
}
generateHeader(headerArr, trHeader) //meghivas es kiiratas
createTbody(bodyArr, tbodyJs) //meghivas es kiiras

/**
 * letrehozza a torzset
 * @param {string} cellContent cella tartalma
 * @param {HTMLTableRowElement} parentTr sor amihez fuz
 * @returns {HTMLTableCellElement}  td amivel visszater a fuggveny
 */
function createBodyCell( cellContent, parentTr){ //fuggveny egy string tipusu  es egy tr tipusu parameterrel
        /** @type {HTMLTableCellElement} a cella ami letrejon*/
        const tdCell = document.createElement("td") //letrehoz egy cellat
        tdCell.innerText = cellContent //megtolti tartalommal
        parentTr.appendChild(tdCell) //hozzafuzi a sorhoz
        return tdCell //visszater a cellaval
}
/**
 * letrehozza a js tablazat torzset 
 * @param {BodyArr[]} contentArr // a tomb
 * @param {HTMLTableSectionElement} parentTbody //tbody amihez hozzacsatolja a sorokat 
 * @returns {void} nincs visszateresi erteke
 */
function createTbody(contentArr, parentTbody){ //ket parameteres fuggveny egy adattomb es egy tablazat torzs
    parentTbody.innerHTML = "" //kiuriti a torzs tartalmat
    for(const element in contentArr){ // ciklus ami bejarja a tombot
        /** @type {HTMLTableRowElement} a sor*/
        const trOneConcept = document.createElement("tr") //sor letrehozasa 
        parentTbody.appendChild(trOneConcept) //sort hozzacsatolja a torzshoz
        createBodyCell(contentArr[element].author, trOneConcept) //letrehozza az adott sor szerzo cellajat
        createBodyCell(contentArr[element].title1, trOneConcept) //letrehozza az adott sor mu cellajat

        /** @type {HTMLTableCellElement} a fogalmak cella */
        const tdConcepts = createBodyCell(contentArr[element].concepts1, trOneConcept) //letrehozza az adott sor fogalmak elso cellajat valtozoban van hogy lehessen allitani kesobb az oszloposszevonast

        if(contentArr[element].concepts2){ //ha definialva van a fogalmak masik cellaja is
            createBodyCell(contentArr[element].concepts2, trOneConcept) //hozzafuz az adott sorhoz megegy fogalmak cellat
        }else{ //ha nincs definialva
            tdConcepts.colSpan = "2" //a fogalmak cella oszloposszevonasat beallitja
        }
    }
}
/**
 * uj sorokat ad hozza 
 * 
 * @param {BodyArr} contentArr // a tomb
 * @param {HTMLTableSectionElement} parentTbody //tbody amihez hozzacsatolja a sorokat
 * @returns {void} nincs visszateresi erteke
 */
function generateHtmlAddRow(contentArr, parentTbody){//ket parameteres fuggveny egy adattomb es egy tablazat torzs
 
     /** @type {HTMLTableRowElement} a sor*/
    const trAdd = document.createElement("tr") //letrehoz egy uj sort
    parentTbody.appendChild(trAdd) //hozzafuzi a torzshoz

    /** @type {HTMLTableCellElement} szerzo cella */
    const tdAddAuthor= createBodyCell(contentArr.author, trAdd) //szerzo cella letrehozasa
    createBodyCell(contentArr.title1, trAdd) // uj cella letrehozasa 
    createBodyCell(contentArr.concepts1, trAdd) // uj cella letrehozasa

    if(contentArr.title2 && contentArr.concepts2){ //ha definialva van a masik cim es fogalom
        tdAddAuthor.rowSpan = "2" // a szerzo ket sort foglal el

        /** @type {HTMLTableRowElement} a sor*/
        const trAddSecRow = document.createElement("tr") // letrehoz egy uj sort
        parentTbody.appendChild(trAddSecRow) //hozzafuzi a torzshoz
        createBodyCell(contentArr.title2, trAddSecRow) //uj cella letrehozasa
        createBodyCell(contentArr.concepts2, trAddSecRow) //uj cella letrehozasa
    }

}
/** @type {HTMLButtonElement} a sima sorok gombja*/

const htmlNormalButton = document.getElementById("htmlbutton") //elkeri azonosito alapjan a rowspanos sor gombjat
htmlNormalButton.addEventListener("click", function(){ // kattintas eseten rahivja a gombra az esemenykezelot
    /** @type {BodyArr} uj sor adatait tartalmazo valtozo tipusa */
    const testSimpleRow = { //adatok eltarolasa egy objektumban
        author: "Új szerző", //szerzo oszlop tuajdonsaganak erteke
        title1: "Új mű", //mu oszlop tulajdonsaganak erteke
        concepts1: "Új fogalom" //fogalmak oszlop tulajdonsaganak erteke
    }
    /** @type {HTMLTableSectionElement} a torzs amihez csatolom az uj sort */
    const htmlTbody = document.getElementById("tablebody") // elkeri a torzset azonosito alapjan
    generateHtmlAddRow(testSimpleRow, htmlTbody) //fuggveny meghivasa a normal gombra
})

/** @type {HTMLButtonElement} a dupla sorok gombja*/

const htmlDoubleButton = document.getElementById("htmlbuttondouble") //elkeri azonosito alapjan a dupla sor gombjat
htmlDoubleButton.addEventListener("click", function(){ // kattintas eseten rahivja a gombra az esemenykezelot
    /** @type {BodyArr} uj sor adatait tartalmazo valtozo tipusa */
    const testDoubleRow = { //adatok eltarolasa egy objektumban
        author: "Új szerző", //szerzo oszlop tuajdonsaganak erteke
        title1: "Új mű", //mu oszlop tulajdonsaganak erteke
        concepts1: "Új fogalom", //fogalmak oszlop tulajdonsaganak erteke
        title2: "Másik műve", // azonos szerzohoz tartozo masik mu
        concepts2: "Másik fogalma" // masik muhoz tartozo fogalom
    }
    /** @type {HTMLTableSectionElement} a torzs amihez csatolom az uj sort */
    const htmlTbody = document.getElementById("tablebody") // elkeri a torzset azonosito alapjan
    generateHtmlAddRow(testDoubleRow, htmlTbody) // fuggveny meghivasa a dupla gombra
  
})

/** @type {HTMLButtonElement} a sima sorok gombja*/

const jsNormalButton = document.createElement("button") //gomb letrehozasa
jsNormalButton.id = "jsbutton" //megadja az idt a gombnak
jsNormalButton.innerText = "colspanos sor hozzaadasa" //gomb szovege
document.body.appendChild(jsNormalButton) //hozzaadja a gombot a torzshoz
jsNormalButton.addEventListener("click", function(){ // kattintas eseten rahivja a gombra az esemenykezelot
    /** @type {BodyArr} uj sor adatait tartalmazo valtozo tipusa */
    const testSimpleRow = { //adatok eltarolasa egy objektumban
        author: "Új szerző", //szerzo oszlop tuajdonsaganak erteke
        title1: "Új mű", //mu oszlop tulajdonsaganak erteke
        concepts1: "Új fogalom" //fogalmak oszlop tulajdonsaganak erteke
    }
    /** @type {HTMLTableSectionElement} a torzs amihez csatolom az uj sort */
    bodyArr.push(testSimpleRow) //belerakja a tablazatba az uj sort
    createTbody(bodyArr, tbodyJs) //fuggveny meghivasa a normal gombra
})
/** @type {HTMLButtonElement} a sima sorok gombja*/

const jsDoubleButton = document.createElement("button") //gomb letrehozasa
jsDoubleButton.id = "jsbuttondouble" //megadja az idt a gombnak
jsDoubleButton.innerText = "dupla fogalmas sor hozzadasa" //gomb szovege
document.body.appendChild(jsDoubleButton) //hozzaadja a gombot a torzshoz
jsDoubleButton.addEventListener("click", function(){ // kattintas eseten rahivja a gombra az esemenykezelot
    /** @type {BodyArr} uj sor adatait tartalmazo valtozo tipusa */
    const testSimpleRow = { //adatok eltarolasa egy objektumban
        author: "Új szerző", //szerzo oszlop tuajdonsaganak erteke
        title1: "Új mű", //mu oszlop tulajdonsaganak erteke
        concepts1: "Új fogalom", //fogalmak oszlop tulajdonsaganak erteke
        concepts2: "Új fogalom 2" //fogalmak oszlop tulajdonsaganak erteke
    }
    /** @type {HTMLTableSectionElement} a torzs amihez csatolom az uj sort */
    bodyArr.push(testSimpleRow) //belerakja a tablazatba az uj sort
    createTbody(bodyArr, tbodyJs) //fuggveny meghivasa a normal gombra
})


