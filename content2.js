let grades = document.querySelectorAll("tr")
let tables = document.querySelectorAll("table")
document.querySelectorAll(".smallbodytext")[2].remove()
console.log(tables)
tables[7].remove()
for(let i =11;i<17;i++) {
    grades[i].remove()
}
grades[17].children[3].innerHTML = "In progress"
grades[18].children[3].innerHTML = "In progress"
grades[19].children[3].innerHTML = "In progress"
grades[20].children[3].innerHTML = "In progress"

grades[17].children[2].innerHTML = "Evolution Advancement"
grades[17].children[1].innerHTML = "SC BIOL 2051 3.00 A"
grades[18].children[2].innerHTML = "Evolution Biodiversity"
grades[18].children[1].innerHTML = "SC BIOL 3220 3.00 A"
grades[19].children[2].innerHTML = "Genomics"
grades[19].children[1].innerHTML = "SC BIOL 4020 3.00 M"
grades[20].children[2].innerHTML = "Current Topics in Biological Thesis Research"
grades[20].children[1].innerHTML = "SC BIOL 3000 2.00 A"

grades[22].children[1].innerHTML = "SC PSYC 1010 3.00 B"

grades[21].children[1].innerHTML = "AP EN 1101 3.00 A"
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

grades[34].children[1].innerHTML = "SC BIOL 3380 3.00 A"
grades[34].children[2].innerHTML = "Sensory Systems"
grades[34].children[3].innerHTML = "B"

grades[35].children[1].innerHTML = "SC BIOL 3200 3.00 A"
grades[35].children[2].innerHTML = "Process of Evolution"
grades[35].children[3].innerHTML = "A"

grades[36].children[1].innerHTML = "AP PHIL 2075 3.00 M"
grades[36].children[2].innerHTML = "Introduction to Applied Ethics"
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
head[3].innerHTML = "Winter 2020 Academic Decision: Continue in Specialized Honours Program"

let t = document.createElement("table")
t.border = "1"
t.style.width = "100%"
let tb = document.createElement("tbody")
t.appendChild(tb)
t.style.marginTop = "50px"

let html = `
<tr bgColor=#eeeeee>
<th></th>
<th>Sessional GPA</th>
<th>Sesional Credits</th>
<th>Cumulative GPA</th>
<th>Cumulative Credits</th>
</tr>
<tr>
<td>Overall GPA</td>
<td>7.52</td>
<td></td>
<td>7.71</td>
<td></td>
</tr>
<tr>
<td>Faculty GPA</td>
<td>7.93</td>
<td></td>
<td>7.93</td>
<td></td>
</tr>
<tr>
<td>Major 1 GPA</td>
<td>8.01</td>
<td></td>
<td>8.01</td>
<td></td>
</tr>
<tr>
<td>Credits Taken</td>
<td></td>
<td>In Progress</td>
<td></td>
<td>104.00</td>
</tr>
<tr>
<td>Credits Passed</td>
<td></td>
<td>In Progress</td>
<td></td>
<td>104.00</td>
</tr>
<tr>
<td>Credits Failed</td>
<td></td>
<td>0.00</td>
<td></td>
<td>0.00</td>
</tr>
`
tb.innerHTML = html

tables[5].children[0].children[0].children[0].insertBefore(t,tables[5].children[0].children[0].children[0].childNodes[25])
let div = document.createElement("div")
div.style.marginTop = "30px"
let nas = `
<a>Strike Implication:</a><p style="display:inline">Lab credits awarded in total credits taken, however, are in progress.</p>
<a style="display:block; margin-top:20px" >Graduation:</a><p style="display:inline">Student is on track to graduation SU21</p><p>Student is eligible for distinction if GPA of 8 is maintained.</p>
<p>The progran core (24 credits) is defined as: <a>COMPLETED</a></p>
<ul>
<li>SC/BIOL 1000 3.00 and SC/BIOL 1001 3.00 (or SC/BIOL 1010 6.00);</li>
<li>SC/BIOL 2070 3.00 or any three of SC/BIOL 2010 4.00, SC/BIOL 2030 4.00, SC/BIOL 2050 4.00.
Both SC/CHEM 2020 3.00and SC/CHEM 2021 3.00 may replace one of these three biology
courses;</li>
<li>additional courses from the following for a total of at least 18 2000-level credits: SC/BIOL 2010
4.00, SC/BIOL 2020 3.00, SC/BIOL 2021 3.00, SC/BIOL 2030 4.00, SC/BIOL 2040 3.00, SC/BIOL
2050 4.00, SC/BIOL 2060 3.00, SC/BIOL 2070 3.00, both SC/CHEM 2020 3.00 and SC/CHEM
2021 3.00.</li>
<li>non-science requirement: 12 credits;</li>
<li>mathematics: SC/MATH 1505 6.00, or six credits from SC/MATH 1013 3.00, SC/MATH 1014 3.00,
SC/MATH 1025 3.00;</li>
<li>computer science: LE/EECS 1520 3.00 or LE/EECS 1530 3.00 or LE/EECS 1540 3.00;</li>
<li>foundational science: six credits from SC/CHEM 1000 3.00 and SC/CHEM 1001 3.00 within the 68
biology credits, at least 18 credits must be at the 3000 level or higher, of which at least 12 credits
must be at the 4000 level. This must also include a minimum of seven credits from 3000 level or
higher biology courses with an associated laboratory component. <a>ON TRACK FOR COMPLETION</a></li>
<li>Additional credits taken to reach 120 credits <a>ON TRACK FOR COMPLETION</a></li>
</ul>
`
div.innerHTML = nas
tables[5].children[0].children[0].children[0].insertBefore(div,tables[5].children[0].children[0].children[0].childNodes[39])

