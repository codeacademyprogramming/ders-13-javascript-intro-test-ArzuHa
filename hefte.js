var hefte = prompt("gunleri daxil edin");

switch (hefte) {
    case "1":
        document.write("Bazar ertesi");
        break;
    case "2":
        document.write("Cersenbe axsami");
        break;
    case "3":
        document.write("Cersenbe");
        break;
    case "4":
        document.write("Cume axsami");
        break;
    case "5":
        document.write("Cume");
        break;
    case "6":
        document.write("Senbe");
        break;
    case "7":
        document.write("Bazar");
        break;




    default:
        document.write("Ele bir gun yoxdur");
        break;
}