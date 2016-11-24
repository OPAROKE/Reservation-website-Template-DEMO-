//<![CDATA[
//rolivestrain.html

function rolivesTraindata(){

// INPUT PASSENGER BOOKING DETAILS 

 omrok_tcktno = document.getElementById("omroktxttcktno");
 omrok_psgrname = document.getElementById("omroktxtpsngrname");
 omrok_psgrid = document.getElementById("omroktxtpsngrid");
 omrok_psgrpsprt = document.getElementById("omrokpssprtno");
 omrok_psgrnation = document.getElementById("omroktxtnation");
 omrok_psrc = document.getElementById("omrokpsrc");                   //select source port
 omrok_via = document.getElementById("omrokviapdestn");               //select via route
 omrok_pdestn = document.getElementById("omrokdestn");                //selct destination port
 omrok_deptdate = document.getElementById("omrokdeptdate");           //dat od depature
 omrok_deptime = document.getElementById("omrokdeptime");             //tim of depature
 omrok_arrvdate = document.getElementById("omrokarrvdate");           //dat of arrival
 omrok_arrvtime = document.getElementById("omrokarrvtime");  	      //tim of arrival
 omrok_travelclass = document.getElementById("omrokclass");           //travel class
 omrok_trvlpurpose = document.getElementById("omroktrvlpurpose");     //reason for travel
 omrok_trname = document.getElementById("omroktrainname");
 omrok_trno = document.getElementById("omroktrainnum");
 //omrok_trtyp = document.getElementById("omroktraintyp");
 omrok_trcbno = document.getElementById("omroktraincarbin");
 omrok_trstno = document.getElementById("omrokseatno");
 omrok_phealth = document.getElementById("omrokphealth");
 omrok_trsickchrg = document.getElementById("omroksickchrgs");
 omrok_trlagkg = document.getElementById("omroktrkg");
 omrok_trkgcost = document.getElementById("omrokkgcost");
 omrok_trchldno = document.getElementById("omroktrchldno");
 omrok_trtotpsngr = document.getElementById("omroktotpassengers");

// PRINT PASSENGER BOOKING DATAILS 

 omrok_tcktout = document.getElementById("omrokdivtcktno");
 omrok_pnam = document.getElementById("omrokdivpname");
 omrok_pid = document.getElementById("omrokpid");
 omrok_pssprt = document.getElementById("omrokpssprt");
 omrok_nat = document.getElementById("omroknationality");
 omrok_divsrc = document.getElementById("omrokdivsrc");
 omrok_divia = document.getElementById("omrokviaroute");
 omrok_divpdstn = document.getElementById("omrokpdstn");
 omrok_divdeptdate = document.getElementById("omrokdeptdat");
 omrok_divdeptim = document.getElementById("omrokdeptim");
 omrok_divarrvdat = document.getElementById("omrokarrvdat");
 omrok_divarrvtim = document.getElementById("omrokarrvtim");
 omrok_divtrvlclass = document.getElementById("omroktrvlclass");
 omork_divtrvlrsn = document.getElementById("omroktrvlrsn");
 omrok_divtrname = document.getElementById("omroktrname");
 omrok_divtrno = document.getElementById("omrok_trainnum");
 //omrok_divtrtyp = document.getElementById("");
 omrok_divtrcbno = document.getElementById("omrok_traincarbinnum");
 omrok_divtrstno = document.getElementById("omrok_seatno");
 omrok_divphealth = document.getElementById("omrok_trainhealth");
 omrok_divtrsickchrg = document.getElementById("omrok_trainhealthcst");
 omrok_divtrlagkg = document.getElementById("omrok_trainpsngrcargo");
 omrok_divtrkgcost = document.getElementById("omrok_kgcost"); 
 omrok_divtrchldno = document.getElementById("omrok_trainchldnum");
 omrok_divtrtotpsngr = document.getElementById("omrok_trainpsngrnum");
 
// DISPLAY PASSENGER BOOKING DETAILS 
 
 omrok_tcktout.innerHTML = omrok_tcktno.value;
 omrok_pnam.innerHTML = omrok_psgrname.value;
 omrok_pid.innerHTML = omrok_psgrid.value;
 omrok_pssprt.innerHTML = omrok_psgrpsprt.value; 
 omrok_nat.innerHTML = omrok_psgrnation.value;
 omrok_divsrc.innerHTML = omrok_divsrc.select; 
 omrok_divia.innerHTML = omrok_divia.select;
 omrok_divpdstn.innerHTML = omrok_divpdstn.select;
 omrok_divdeptdate.innerHTML = omrok_divdeptdate.value;
 omrok_divdeptim.innerHTML = omrok_divdeptim.value;
 omrok_divarrvdat.innerHTML = omrok_divarrvdat.value;
 omrok_divarrvtim.innerHTML = omrok_divarrvtim.value;
 omrok_divtrvlclass.innerHTML = omrok_divtrvlclass.value;
 omork_divtrvlrsn.innerHTML = omork_divtrvlrsn.value;
 omrok_divtrname.innerHTML = omrok_divtrname.select; 
 omrok_divtrno.innerHTML = omrok_divtrno.value;
 //omrok_divtrtyp.innerHTML = omrok_divtrtyp.select;
 omrok_divtrcbno.innerHTML = omrok_divtrcbno.value;
 omrok_divtrstno.innerHTML = omrok_divtrstno.value; 
 omrok_divphealth.innerHTML = omrok_divphealth.value;
 omrok_divtrsickchrg.innerHTML = omrok_divtrsickchrg.value;
 omrok_divtrlagkg.innerHTML = omrok_divtrlagkg.value;
 omrok_divtrkgcost.innerHTML = omrok_divtrkgcost.value; 
 omrok_divtrchldno.innerHTML = omrok_divtrchldno.value;
 omrok_divtrtotpsngr.innerHTML = omrok_divtrtotpsngr.value;

}
//]]