//<![CDATA[
//rolivesbus.html

//rolivestrain.html

function rolivesTraindata(){
 //DECLARE VALUE VARIABLES
 var rolives_tckno = document.getElementById("roltxttcktno");
 var rolives_psngrname = document.getElementById("roltxtpsngrname");
 var rolives_psngrid = document.getElementById("roltxtpsngrid");
 var rolives_psngrpsprtno = document.getElementById("rolpssprtno");
 var rolives_psngrnationality = document.getElementById("roltxtnation");
 var rolives_psngroccptn = document.getElementById("rolivespsngroccptn");
 var rolives_psngrhmaddrss = document.getElementById("rolivespsngrhmaddrs");
 var rolives_psngrtel = document.getElementById("rolivespsngrtele");
 var rolives_psngrmobile = document.getElementById("rolivespsngrmob");
 var rolives_psngremail = document.getElementById("rolivespsngrmail");

//DECLARE DISPLAY VARIABLES
 var rolivesoutput_tckno = document.getElementById("rolivesdivpsngrtcktno");
 var rolivesoutput_psngrname = document.getElementById("rolivesdivpsngrname");
 var rolivesoutput_psngrid = document.getElementById("rolivesdivpsngrid");
 var rolivesoutput_psngrpsprtno = document.getElementById("rolivesdivpasspno");
 var rolivesoutput_psngrnationality = document.getElementById("rolivesdivpsngrcitizen");
 var rolivesoutput_psngroccptn = document.getElementById("rolivesdivpsngroccptn");
 var rolivesoutput_psngrhmaddrss = document.getElementById("rolivesdivhmaddrss");
 var rolivesoutput_psngrtel = document.getElementById("rolivesdivtel");
 var rolivesoutput_psngrmobile = document.getElementById("rolivesdivmobile");
 var rolivesoutput_psngremail = document.getElementById("rolivesdivemail");

//DISPLAY VALUE DATA USING innerHTML
 rolivesoutput_tckno.innerHTML = rolives_tckno.value;
 rolivesoutput_psngrname.innerHTML = rolives_psngrname.value;
 rolivesoutput_psngrid.innerHTML = rolives_psngrid.value;
 rolivesoutput_psngrpsprtno.innerHTML = rolives_psngrpsprtno.value; 
 rolivesoutput_psngrnationality.innerHTML = rolives_psngrnationality.value; 
 rolivesoutput_psngroccptn.innerHTML = rolives_psngroccptn.value;
 rolivesoutput_psngrhmaddrss.innerHTML = rolives_psngrhmaddrss.value;
 rolivesoutput_psngrtel.innerHTML = rolives_psngrtel.value;
 rolivesoutput_psngrmobile.innerHTML = rolives_psngrmobile.value;
 rolivesoutput_psngremail.innerHTML = rolives_psngremail.value;

}

function btnPrint(){
 document.Form.print();
 
}
//]]