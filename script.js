function getNumber(a=0, b=100){
    return Math.floor(Math.random() * (a-b)+b)
}
let ar = []
let table="";
  
function getColor(a){
   if (a >50){
    return 'orange'
   }
}

for(let i = 0;i<30;i++){
   ar[i] = getNumber()
}
for(let i1 = 0;i1<5;i1++){
    let col1 = getNumber()
    let col2 = getNumber()
    let col3 = getNumber()
    let col4 = getNumber()
    let col5 = getNumber()
    table +=`<style>
    table,td,tr{
        border: 1px black solid;
        text-align: center;
    }
    table{
        text-align: center;
    }
    </style>
<table>
<tr>
<td style ="background-color: ${getColor(col1)}">${col1}</td>
<td style ="background-color: ${getColor(col2)}">${col2}</td>
<td style ="background-color: ${getColor(col3)}">${col3}</td>
<td style ="background-color: ${getColor(col4)}">${col4}</td>
<td style ="background-color: ${getColor(col5)}">${col5}</td>
</tr>
</table>`
document.write(table)
i1++;

}
