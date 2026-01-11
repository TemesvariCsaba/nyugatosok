/** @typedef {{author: string, title1: string, concepts1: string, title2?:string, concepts2?: string}} BodyArr adattombF*/

/**
 * letrehozza a fejlecet
 * @param {string[]} headContentArr fejlec tomb tipus
 * @param {HTMLTableRowElement} parentTr  //sor amihez fuzi
 * @returns {void} nincs visszateresi erteke
 */
function generateHeader(headContentArr, parentTr){ //fuggveny egy string tomb tipusu es egy  tr tipusu parameterrel amihez hozzafuzi magat a cella
    createBodyCell("th", headContentArr[0], parentTr) //kiirja a fejlec elso cellajat
    createBodyCell("th", headContentArr[1], parentTr) //kiirja a fejlec masodik
    /** @type {HTMLTableCellElement} fejlec harmadik cellaja*/
    const thColspan = createBodyCell("th", headContentArr[2], parentTr) //kiirja a fejlec harmadik cellajat
    thColspan.colSpan = 2 //beallitja az oszloposszevonast
}

/**
 * letrehozza a torzset
 * @param {HTMLTableCellElement} cellType //cella tipusa td v th
 * @param {string} cellContent cella tartalma
 * @param {HTMLTableRowElement} parentTr sor amihez fuz
 * @returns {HTMLTableCellElement}  td amivel visszater a fuggveny
 */
function createBodyCell( cellType, cellContent, parentTr){ //fuggveny egy cella,  egy string tipusu es egy tr tipusu parameterrel
        /** @type {HTMLTableCellElement} a cella ami letrejon*/
        const tdCell = document.createElement(cellType) //letrehoz egy cellat
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
        createBodyCell("td" ,contentArr[element].author, trOneConcept) //letrehozza az adott sor szerzo cellajat
        createBodyCell("td" ,contentArr[element].title1, trOneConcept) //letrehozza az adott sor mu cellajat

        /** @type {HTMLTableCellElement} a fogalmak cella */
        const tdConcepts = createBodyCell("td" ,contentArr[element].concepts1, trOneConcept) //letrehozza az adott sor fogalmak elso cellajat valtozoban van hogy lehessen allitani kesobb az oszloposszevonast

        if(contentArr[element].concepts2){ //ha definialva van a fogalmak masik cellaja is
            createBodyCell("td" ,contentArr[element].concepts2, trOneConcept) //hozzafuz az adott sorhoz megegy fogalmak cellat
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
    const tdAddAuthor= createBodyCell("td" ,contentArr.author, trAdd) //szerzo cella letrehozasa
    createBodyCell("td" ,contentArr.title1, trAdd) // uj cella letrehozasa 
    createBodyCell("td" ,contentArr.concepts1, trAdd) // uj cella letrehozasa

    if(contentArr.title2 && contentArr.concepts2){ //ha definialva van a masik cim es fogalom
        tdAddAuthor.rowSpan = "2" // a szerzo ket sort foglal el

        /** @type {HTMLTableRowElement} a sor*/
        const trAddSecRow = document.createElement("tr") // letrehoz egy uj sort
        parentTbody.appendChild(trAddSecRow) //hozzafuzi a torzshoz
        createBodyCell("td" ,contentArr.title2, trAddSecRow) //uj cella letrehozasa
        createBodyCell("td" ,contentArr.concepts2, trAddSecRow) //uj cella letrehozasa
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
function generateInput(labelFor, labelContent, inputName, parentForm ){ //fuggveny 3 string tipusu es egy form tipusu parameterrel
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

/**
 *  letrehozza a teljes formot
 * @param {HTMLDivElement} sectionDiv div amihez hozzafuzi
 * @returns {void} nincs visszateresi ertek
 */
function generateFullForm(sectionDiv){ // fuggveny egy div parameterrel
    
    /** @type {{labelfor: string, content: string, name: string }[]} a tomb tartalma */
    const formArr = [ // az form tulajdonsagait taralmazo tomb
        {
            labelfor: "elso", //label mezo for tulajdonsaga egyben az input idje
            content: "Szerző", //label mezo tartalom tulajdonsaga
            name: "szerzo" //input mezo name tulajdonsaga
        },
        {
            labelfor: "masodik",//label mezo for tulajdonsaga egyben az input idje
            content: "Mű", //label mezo tartalom tulajdonsaga
            name: "mu" //input mezo name tulajdonsaga
        },
        {
            labelfor: "harmadik",//label mezo for tulajdonsaga egyben az input idje
            content: "Fogalmak", //label mezo tartalom tulajdonsaga
            name: "fogalmak1" //input mezo name tulajdonsaga
        },
        {
            labelfor: "negyedik",//label mezo for tulajdonsaga egyben az input idje
            content: "Másik fogalmak", //label mezo tartalom tulajdonsaga
            name: "fogalmak2" //input mezo name tulajdonsaga
        },

    ]

    /** @type {HTMLFormElement} a form valtozoja*/
    const jsForm = document.createElement("form") // letrehozza a formot
    jsForm.id = "jsform" //megadja a formnak az id-t
    sectionDiv.appendChild(jsForm) //hozzafuzi az oldal torzsehez

    for(const element of formArr){ //vegigjarja a tombot
    generateInput(element.labelfor, element.content, element.name, jsForm) //kiirja a mezoket 
    }



    /** @type {HTMLButtonElement} a hozzaadas gomb */
    const buttonForm = document.createElement("button") //letrehozza a gombot
    buttonForm.innerText = "Hozzáadás" //beallitja a szoveget
    jsForm.appendChild(buttonForm) //hozzafuzi a formhoz
}
