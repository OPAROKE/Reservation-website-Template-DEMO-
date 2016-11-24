//<![CDATA[
//rolivesbus.html

function lagCost(){}

function calcTotBusfare(){
 var rolivestcktno = document.getElementById("tcktno");
 var rolivespsngrname = document.getElementById("txtpsngrname");
 var rolivespsprtno = document.getElementById("txtpssport");
 var rolivesnationality = document.getElementById("txtnationality");
 var rolivespsngrsex = document.getElementById("gndr");
 var rolivestravelpurpose = document.getElementById("visitreason");
 var rolivesseatno = document.getElementById("rolivestxtseatno");
 var rolivestravlesrc = document.getElementById("rolivesslctSource");
 var rolivesviabypass = document.getElementById("rolivesslctbypass");
 var rolivestraveldestn = document.getElementById("rolivesslctdstn");
 //var rolivestravelstyle = document.getElementById("");
 var rolivescarno = document.getElementById("rolivestxtcarno");
 var rolivesdeparturedate = document.getElementById("rolivestxtdprtdate");
 var rolivesdeparturetime = document.getElementById("rolivestxtdprttime");
 var rolivesarivedate = document.getElementById("rolivestxtarrvldate");
 var rolivesarrivetime = document.getElementById("rolivestxtarrvtime");
 var rolives_costperseat = document.getElementById("rolivesseatcst");
 var rolives_seatcount = document.getElementById("rolivesseatcnt");
 var rolives_totseatcost;
 var roliveslagkg = document.getElementById("rolivestxtlagwgt");
 var roliveslagcstwgt = document.getElementById("rolivescstperwgt");
 var rolivestotlagcost;
 var roliveschldnumber = document.getElementById("rolivestxtchldcnt");
 var roliveschldchrg = document.getElementById("rolivescstperchld");
 var rolivestotchldcst;
 var rolivescripplednum = document.getElementById("rolivestxtlamepsngr");
 var rolivescrippledchrg = document.getElementById("rolivescrippledchrg");
 var rolivestotcrippledcst;
 var rolivessicknum = document.getElementById("rolivessickpsngrno");
 var rolivessickchrg = document.getElementById("rolivescstpersick");
 var rolivestotsickcst;
 var rolivesbusfare;
 
 var rolivespsngroccptn = document.getElementById("rolivespsngroccptn");
 var rolivespsngrmaritalstatus = document.getElementById("rolivespsngrmarriage");
 var rolivespsngraddrss1 = document.getElementById("roliveshmaddrss");
 var rolivespsngraddrss2 = document.getElementById("rolivespsngraddrss");
 var rolivespsngrtel = document.getElementById("rolivespsngrtel");
 var rolivespsngrmobile = document.getElementById("rolivespsngrmob");
 var rolivespsngremail = document.getElementById("rolivespsngrmail");
 var rolivespsngrdrvlnce = document.getElementById("rolivespsngrdl");
 

 var rolives_seatcst = rolives_costperseat.value;
 var rolives_seatcnt = rolives_seatcount.value;
 var roliveslagwgt = roliveslagkg.value;
 var roliveslagwgtcst = roliveslagcstwgt.value;
 var roliveschldnum = roliveschldnumber.value;
 var roliveschldcst = roliveschldchrg.value
 var rolivescrippledno = rolivescripplednum.value;
 var rolivescrippledcst = rolivescrippledchrg.value
 var rolivessickno = rolivessicknum.value;
 var rolivessickcost = rolivessickchrg.value;

 rolives_totseatcost = parseInt(rolives_seatcst) * parseInt(rolives_seatcnt);
 rolivestotlagcost = parseInt(roliveslagwgt) * parseInt(roliveslagwgtcst);
 rolivestotchldcst = parseInt(roliveschldnum) * parseInt(roliveschldcst);
 rolivestotcrippledcst = parseInt(rolivescrippledno) * parseInt(rolivescrippledcst);
 rolivestotsickcst = parseInt(rolivessickno) * parseInt(rolivessickcost);

 rolivesbusfare = rolives_totseatcost + rolivestotlagcost + rolivestotchldcst + rolivestotcrippledcst + rolivestotsickcst;

 var rolivesoutput_seatcost = document.getElementById("divseatcst");
 var rolivesoutput_seatcnt = document.getElementById("divseatcount");
 var rolivesoutput_totseatcst = document.getElementById("divseatchrg");
 var rolivesoutputlagwgt = document.getElementById("rolivesdivlagkg");
 var rolivesoutputlagweight = document.getElementById("rolivesdivlagkgcst");
 var rolivesoutputtotlagcst = document.getElementById("rolivesdivlagtotcst");
 var rolivesoutputchldnum = document.getElementById("rolivesdivchldnum");
 var rolivesoutputchldcst = document.getElementById("rolivesdivchldcst");
 var rolivesoutputtotchldcst = document.getElementById("rolivesdivchldtotcst");
 var rolivesoutputcripplednum = document.getElementById("rolivesdivcrippledno");
 var rolivesoutputcrippledchrg = document.getElementById("rolivesdivcrippledcst");
 var rolivesoutputtotcrippledcst = document.getElementById("rolivesdivtotcrippledcst");
 var rolivesoutputsicknum = document.getElementById("rolivesdivsickno");
 var rolivesoutputsickchrg = document.getElementById("rolivesdivsickchrg");
 var rolivesoutputtotsickcst = document.getElementById("rolivesdivtotsick");
 var rolivesoutputtotalbusfare = document.getElementById("totalbusfare");
 //var rolivesoutputtcktno = document.getElementById("");
 var rolivesoutputpsngrname = document.getElementById("rolivestraveldivname");
 var rolivesoutputpsprtno = document.getElementById("rolivesdivpassport");
 var rolivesoutputnationality = document.getElementById("rolivesdivnationality");
 var rolivesoutputpsngrsex = document.getElementById("rolivesdivpsngrsex");
 var rolivesoutputtravelpurpose = document.getElementById("rolivesdivtrvlrsn");
 var rolivesoutputseatno = document.getElementById("rolivesdivseatno");
 var rolivesoutputtravlesrc = document.getElementById("rolivesdivsource");
 var rolivesoutputviabypass = document.getElementById("rolivesdivbypass");
 var rolivesoutputtraveldestn = document.getElementById("rolivesdivdestn");
 //var rolivesoutputtravelclass = document.getElementById("");
 var rolivesoutputcarno = document.getElementById("rolivesdivcarno");
 var rolivesoutputdeparturedate = document.getElementById("rolivesdivdeparturedate");
 var rolivesoutputdeprttime = document.getElementById("rolivesdivdeprttime");
 var rolivesoutputarrivdate = document.getElementById("rolivesdivarrvdate");
 var rolivesoutputarrivetime = document.getElementById("rolivesdivarrvtime");
 var rolivesoutputpsngraddrss1 = document.getElementById("roliveshmaddrss");
 var rolivesoutputpsngraddrss2 = document.getElementById("rolivespsngraddrss");
 var rolivesoutputpsngrtel = document.getElementById("rolivespsngrtel");
 var rolivesoutputpsngrmobile = document.getElementById("rolivespsngrmob");
 var rolivesoutputpsngremail = document.getElementById("rolivespsngrmail");
 var rolivesoutputpsngrdrvlnce = document.getElementById("rolivespsngrdl");

 var rolivesoutputpsngroccptn = document.getElementById("rolivesdivoccptn");
 var rolivesoutputpsngrmaritalstatus = document.getElementById("rolivespsngrmarriage");
 var rolivesoutputpsngraddrss1 = document.getElementById("rolivespsngraddrss");
 var rolivesoutputpsngraddrss2 = document.getElementById("rolivespsngraddrss2");
 var rolivesoutputpsngrtel = document.getElementById("rolivespsngrtel");
 var rolivesoutputpsngrmobile = document.getElementById("rolivespsngrmbl");
 var rolivesoutputpsngremail = document.getElementById("rolivespsngremail");
 var rolivesoutputpsngrdrvlnce = document.getElementById("rolivespsngrdrvlnc");
 

 rolivesoutput_seatcost.innerHTML = " $ " +rolives_costperseat.value;
 rolivesoutput_seatcnt.innerHTML = rolives_seatcount.value;
 rolivesoutput_totseatcst.innerHTML = " $ " +rolives_totseatcost;
 rolivesoutputlagwgt.innerHTML = roliveslagkg.value;
 rolivesoutputlagweight.innerHTML = " $ " + roliveslagcstwgt.value;
 rolivesoutputtotlagcst.innerHTML = " $ " + rolivestotlagcost;
 rolivesoutputchldnum.innerHTML = roliveschldnumber.value;
 rolivesoutputchldcst.innerHTML = " $ " + roliveschldchrg.value;
 rolivesoutputtotchldcst.innerHTML = " $ " + rolivestotchldcst;
 rolivesoutputcripplednum.innerHTML = rolivescripplednum.value; 
 rolivesoutputcrippledchrg.innerHTML = " $ " + rolivescrippledchrg.value;
 rolivesoutputtotcrippledcst.innerHTML = " $ " + rolivestotcrippledcst;
 rolivesoutputsicknum.innerHTML = rolivessicknum.value;
 rolivesoutputsickchrg.innerHTML = " $ " + rolivessickchrg.value;
 rolivesoutputtotsickcst.innerHTML = " $ " + rolivestotsickcst;
 rolivesoutputtotalbusfare.innerHTML = " $ " +rolivesbusfare;
//rolivesoutputtcktno.innerHTML
 rolivesoutputpsngrname.innerHTML = rolivespsngrname.value;
 rolivesoutputpsprtno.innerHTML = rolivespsprtno.value;
 rolivesoutputnationality.innerHTML = rolivesnationality.value; 
 rolivesoutputpsngrsex.innerHTML = rolivespsngrsex.value;
 rolivesoutputtravelpurpose.innerHTML = rolivestravelpurpose.value; 
 rolivesoutputseatno.innerHTML = rolivesseatno.value;
 rolivesoutputtravlesrc.innerHTML = rolivestravlesrc.selected;
 rolivesoutputviabypass.innerHTML = rolivesviabypass.selected;
 rolivesoutputtraveldestn.innerHTML = rolivestraveldestn.selected;
//rolivesoutputtravelstyle.innerHTML = rolivestravelstyle.value;
 rolivesoutputcarno.innerHTML = rolivescarno.value;
 rolivesoutputdeparturedate.innerHTML = rolivesdeparturedate.value;
 rolivesoutputdeprttime.innerHTML = rolivesdeparturetime.value;
 rolivesoutputarrivdate.innerHTML = rolivesarivedate.value;
 rolivesoutputarrivetime.innerHTML = rolivesarrivetime.value;

 rolivesoutputpsngroccptn.innerHTML = rolivespsngroccptn.selected; 
 rolivesoutputpsngrmaritalstatus.innerHTML = rolivespsngrmaritalstatus.selected; 
 rolivesoutputpsngraddrss1.innerHTML = rolivespsngraddrss1.value;
 rolivesoutputpsngraddrss2.innerHTML = rolivespsngraddrss2.value;
 rolivesoutputpsngrtel.innerHTML = rolivespsngrtel.value;
 rolivesoutputpsngrmobile.innerHTML = rolivespsngrmobile.value;
 rolivesoutputpsngremail.innerHTML = rolivespsngremail.value;
 rolivesoutputpsngrdrvlnce.innerHTML = rolivespsngrdrvlnce.value;
}

function omrokVideo(){
 var omrokvid = document.getElementById("omrokvid");
 var videoPath = "D:/oparokemmanuel/Docs/Research/OMROKdatafiles/rolivesHTML/";
 omrokvid.src = videoPath + document.getElementById("txtomrokvid").value;
}
//]]