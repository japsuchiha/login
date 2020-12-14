let grades = document.querySelectorAll("tr")
let tables = document.querySelectorAll("table")
document.querySelectorAll(".smallbodytext")[2].remove()
tables[7].remove()
for(let i =11;i<17;i++) {
    grades[i].remove()
}
grades[17].children[3].innerHTML = "In progress"
grades[18].children[3].innerHTML = "In progress"
grades[19].children[3].innerHTML = "In progress"
grades[20].children[3].innerHTML = "In progress"

grades[18].children[2].innerHTML = "Evolution Advancement"
grades[19].children[2].innerHTML = "Evolution Biodiversity"
grades[20].children[2].innerHTML = "Current Topics in Biological Thesis Research"

grades[21].children[3].innerHTML = "B"
grades[22].children[3].innerHTML = "A"
grades[23].children[3].innerHTML = "B+"

grades[24].children[2].innerHTML = "Field Course"
grades[24].children[3].innerHTML = "A+"

grades[25].children[3].innerHTML = "B"

grades[31].children[2].innerHTML = "Mathematics for Biologist II"
grades[31].children[1].innerHTML = "SC MATH 2023 3.00 D"
grades[31].children[3].innerHTML = "B+"
grades[32].children[2].innerHTML = "Mathematics for Biologist I"
grades[32].children[1].innerHTML = "SC MATH 2024 3.00 P"
grades[32].children[3].innerHTML = "A+"

grades[35].children[1].innerHTML = "SC BIOL 3380 3.00 A"
grades[35].children[2].innerHTML = "Sensory Systems"
grades[35].children[3].innerHTML = "B"

grades[36].children[1].innerHTML = "SC BIOL 3200 3.00 A"
grades[36].children[2].innerHTML = "Process of Evolution"
grades[36].children[3].innerHTML = "A"

grades[37].children[1].innerHTML = "SC BIOL 3200 3.00 A"
grades[37].children[2].innerHTML = "Evolution"
grades[37].children[3].innerHTML = "B+"

let row = tables[6].insertRow(22)
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
cell1.innerHTML = "FW18"
cell2.innerHTML = "SC BIOL 3100 2.00 B"
cell3.innerHTML = "Current Topics in Biological Research"
cell4.innerHTML = "A"

let row1 = tables[6].insertRow(23)
let cell11 = row1.insertCell(0);
let cell21 = row1.insertCell(1);
let cell31 = row1.insertCell(2);
let cell41 = row1.insertCell(3);
cell11.innerHTML = "FW18"
cell21.innerHTML = "SC BIOL 2905 3.00 F"
cell31.innerHTML = "Introduction to Medical Microbiology"
cell41.innerHTML = "B"

grades[38].children[1].innerHTML = "SC BIOL 2010 3.00 B"
grades[38].children[2].innerHTML = "Plant Biology"
grades[38].children[3].innerHTML = "C+"

grades[39].children[3].innerHTML = "B"
grades[40].children[3].innerHTML = "B"

let row2 = tables[6].insertRow(25)
let cell12 = row2.insertCell(0);
let cell22 = row2.insertCell(1);
let cell32 = row2.insertCell(2);
let cell42 = row2.insertCell(3);
cell12.innerHTML = "FW17"
cell22.innerHTML = "SC BIOL 2050 3.00 A"
cell32.innerHTML = "Genetics II"
cell42.innerHTML = "B"

let row3 = tables[6].insertRow(26)
let cell13 = row3.insertCell(0);
let cell23 = row3.insertCell(1);
let cell33 = row3.insertCell(2);
let cell43 = row3.insertCell(3);
cell13.innerHTML = "FW17"
cell23.innerHTML = "SC BIOL 2060 3.00 M"
cell33.innerHTML = "Statistics for Biologists"
cell43.innerHTML = "B"

let row4 = tables[6].insertRow(27)
let cell14 = row4.insertCell(0);
let cell24 = row4.insertCell(1);
let cell34 = row4.insertCell(2);
let cell44 = row4.insertCell(3);
cell14.innerHTML = "FW17"
cell24.innerHTML = "SC BIOL 2030 3.00 M"
cell34.innerHTML = "Animals"
cell44.innerHTML = "A"

grades[42].children[3].innerHTML = "A"
grades[43].children[3].innerHTML = "A"
grades[44].children[3].innerHTML = "A+"
grades[45].children[3].innerHTML = "A"
grades[46].children[3].innerHTML = "A"
grades[47].children[3].innerHTML = "A+"
grades[48].children[3].innerHTML = "A+"
grades[49].children[3].innerHTML = "A"
grades[50].children[3].innerHTML = "B+"

let body = document.querySelectorAll(".bodytext")
body[2].remove()
body[3].remove()

let head = document.querySelectorAll(".heading")
head[2].remove()
head[3].remove()