/** @typedef {{author: string, title1: string, concepts1: string, title2?:string, concepts2?: string}} BodyArr adattombF*/

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

/**
 *  checkboxot megnezi hogy be van e pipalva es az alapjan jeleniti meg a tablazatokat az oldalon
 * @param {HTMLInputElement} check //checkbox
 * @returns {void} //nincs visszateresi erteke
 */
function checkBoxOnLoad(check){ //fuggveny egy checkbox  parameterrel
    /** @type {HTMLDivElement} a javascript tablazat kerete*/
    const jsSecDiv = document.getElementById("jssection") // div lekerese es eltarolasa azonosito alapjan
    /** @type {HTMLDivElement} a html tablazat kerete*/
    const htmlSecDiv = document.getElementById("htmlsection") // div lekerese es eltarolasa azonosito alapjan

    if(check.checked) { //megnezi h be van e pipalva a checkbox
        htmlSecDiv.classList.remove("hide") //leszedi a hide osztalyt
        jsSecDiv.classList.add("hide") //rarakja a hide osztalyt
    }
    else{ //ha nincs bepipalva a checkbox
        htmlSecDiv.classList.add("hide") //rarakja a hide osztalyt
        jsSecDiv.classList.remove("hide") //leszedi a hide osztalyt
    }
}

/**
 *  letrehoz egy sortorest
 * @param {HTMLDivElement} parentDiv a div amihez hozzafuzi a sortorest 
 * @returns {void} nincs visszateresi erteke
 */
function generateBr(parentDiv){ //fuggveny egy div parameterrel
    /** @type {HTMLBRElement} br tipusa */
    const brDiv = document.createElement("br") // letrehoz egy sortorest
    parentDiv.appendChild(brDiv) //hozzafuzi a divhez
} 
/**
 *  letrehozza a form egy mezojet
 * @param {string} labelFor // a label for tulajdonsaga
 * @param {string} labelContent // a label szovege
 * @param {string} inputName // a label name tulajdonsaga
 * @param {HTMLFormElement} parentForm //form amihez hozzafuzi
 * @returns {void} nincs visszateresi erteke
 */
function generateLabel(labelFor, labelContent, inputName, parentForm ){ //fuggveny 3 string tipusu es egy form tipusu parameterrel
    /** @type {HTMLDivElement} a mezo divje*/
    const formDiv = document.createElement("div") //letrehozza a divet
    parentForm.appendChild(formDiv) //hozzafuzi a formhoz
    /** @type {HTMLLabelElement} a label */
    const labelForm = document.createElement("label") //letrehozza a label mezot
    labelForm.htmlFor = labelFor //beallitja a label for erteket
    labelForm.innerText = labelContent// Beallitja mi legyen a mezo szovege
    formDiv.appendChild(labelForm) //hozzafuzi a divhez
    generateBr(formDiv) //berak egy sortorest
    /** @type {HTMLInputElement} az input mezo*/
    const inputForm = document.createElement("input") //letrehozza az input mezot
    inputForm.type = "text" //text tipust beallitja
    inputForm.name = inputName //megadja a nev tualdonsag erteket
    inputForm.id = labelFor // megadja az input idjet 
    formDiv.appendChild(inputForm) // hozzafuzi a divhez
    /** @type {HTMLSpanElement} a span*/
    const spanForm = document.createElement("span") //letrehozza a span mezot
    spanForm.classList.add("error") //rateszi az error osztalyt
    formDiv.appendChild(spanForm) //hozzafuzi a divhez
    generateBr(formDiv) //berak egy sortorest
}