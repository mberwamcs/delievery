
var $ = function(id){
		return document.getElementById(id);
	};
//moble screen ****************;
function newDay(){
     $("startday").style.display = "block";
     $("newdaybtn").style.display = "none";
     $("enddaybtn").style.display = "none";
     $("editbtn").style.display = "none";
}
function endDay(){
     $("endday").style.display = "block";
     $("newdaybtn").style.display = "none";
     $("enddaybtn").style.display = "none";
     $("editbtn").style.display = "none";
}
function editInfor(){
    $("startday").style.display = "block";
     $("endday").style.display = "block";
     $("newdaybtn").style.display = "none";
     $("enddaybtn").style.display = "none";
     $("editbtn").style.display = "none";
}
/*function selection() {
     var toDo = $("activity").value;
     //var empt = $("activity").value;
     //var startDay = $("startofday").value;
     //var endDay = $("endd").value;
    if (toDo == "startd") {
        $("startday").style.display = "block";
        $("endday").style.display = "none";
         $("paystub").style.display = "none";
         $("errorM").style.display = "none";
    } else if (toDo == "endd"){
        $("endday").style.display = "block";
        $("startday").style.display = "block";
         $("paystub").style.display = "none";
         $("errorM").style.display = "none";
    } else if (toDo == "paystub"){
        $("startday").style.display = "none";
        $("paystub").style.display = "block";
         $("endday").style.display = "none";
        $("errorM").style.display = "none";
    } else if (toDo == "empty"){
        $("errorM").style.display = "inline-block";
        $("errorM").firstChild.nodeValue = "*** MAKE A VALID SELECTION ***";
        $("errorM").style.color = "red";
        /*
        $("saveBtn").value = "MAKE A VALID SELECTION";
        $("saveBtn").disabled = true;
        $("saveBtn").style.textAlign = "center";
        $("saveBtn").style.width = "100%";
    }
}
/*function totalMiles(){
    var startMiles = $("startmiles").value;
    var endtMiles = $("endmiles").value;
    var usedMiles = (endtMiles - startMiles);
    $("totalmiles").value = usedMiles;
    
//income
    var totalItem = $("numItem").value;
    var priceEach = $("priceeach").value;
    var dayIncome = (totalItem * priceEach);
    $("dayincome").value = dayIncome;
    
    return;
}
*/
window.onload = function(){
    $("newdaybtn").onclick = newDay;
    $("enddaybtn").onclick = endDay;
    $("editbtn").onclick = editInfor;
  /*  $("goahead").onclick = selection;*/
}
/*$("saveBtn").onclick = totalMiles;
$("goahead").onclick = selection;*/