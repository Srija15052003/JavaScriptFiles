let day="Holiday";

switch(day)
{
    case "Monday":
    case "Tuesday":
    case "Thursday":
    case "Friday":
        console.log("5am");
        break;
    case "Wednesday":
        console.log("6am");
        break;
    case "Saturday":
    case "Sunday":
        console.log("7am");
        break;
    default :
        console.log("Sleep");
}