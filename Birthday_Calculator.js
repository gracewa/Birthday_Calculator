var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Calculate the day of the week that the user was born
function dayCalculator() {
  birthDate = prompt("Please enter your birth date in this format dd/mm/yyyy");
  confirm("Please confirm that you were born on " + birthDate);
  // Figure out the century
  CC = birthDate.charAt(0) + birthDate.charAt(1);
  console.log(CC);
}
