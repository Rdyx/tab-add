var html= "";

function tableNumber(tabNumber, arg1, arg, arg2, rowNumber, colNumber){
  for(i = tabNumber; i < arg1; i++){
    html += "<table>\
    <tr> Tableau " + i;
        loopTR(arg, arg2, rowNumber, colNumber);
        loopTD(arg2, colNumber);
    html += "</tr>\
    </table><br\>";
  }

function loopTR(arg, arg2, rowNumber, colNumber){
for(j = rowNumber; j < arg; ++j){
    html += "<tr class='lol'>";
      loopTD(arg2, colNumber);
    html += "</tr>";
  }
}

function loopTD(arg2, colNumber){
  for(k = colNumber; k < arg2; ++k){
  html += "<td class='lol'>Col " + j + "." + k + "</td>";
  }
}
}

 tableNumber(1,3,4,3,1,1);
 tableNumber(3,5,3,4,1,1);

$(".container").append(html);
  
