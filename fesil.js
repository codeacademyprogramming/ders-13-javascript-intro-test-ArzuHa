var mevsim=prompt("Fesilleri daxil edin");

 switch(mevsim)
 {
 case "Yay":
 document.write("Iyun,Iyul,Avqust");
 break;
 case "Payiz":
 document.write("Sentyabr,Oktyabr,Noyabr");
 break;
 case "Qis":
 document.write("Dekabr,Yanvar,Fevral");
 break;
case "Yaz":
 document.write("Mart,Aprel,May");
 break;
 default:
 document.write("Fesilleri qeyd etmediniz");
 break;
 }
