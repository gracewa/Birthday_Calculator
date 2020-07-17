var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Calculate the day of the week that the user was born
function dayCalculator() {
  birthDate = prompt("Please enter your birth date in this format dd/mm/yyyy");
  confirm("Please confirm that you were born on " + birthDate);
  CC = parseInt(birthDate.charAt(6) + birthDate.charAt(7)); // Figure out the century digits
  YY = parseInt(birthDate.charAt(8) + birthDate.charAt(9));//Figure out the Year digits
  MM = parseInt(birthDate.charAt(3) + birthDate.charAt(4));//Figure out the Month
  console.log();
}
