let a=parseInt(prompt("1 for monday \n 2 for tuesday \n 3 for wednesday \n 4 for thirsday \n 5 for friday \n 6 for saturday \n 7 for sunday"));

switch(a){
    case 1: 
    console.log("monday");
    break;
    case 2:
        console.log("Tuesday");
        break;
        case 3:
            console.log("wednesday");
            break;
            case 4:
                console.log("Thirsday");
                break;
                case 5:
                    console.log("Friday");
                    break;
                    case 6:
                        console.log("saturday");
                        break;
                        case 7:
                            console.log("sunday");
                            break;
                            default:
                                console.log("invalid type");
                                break;
}