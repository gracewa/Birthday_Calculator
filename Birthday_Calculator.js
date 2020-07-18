var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dateComponents = []
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// Calculate the day of the week that the user was born
function dayCalculator() {
  var birthDate = document.getElementById("userBirthday").value;
  var dateComponents = birthDate.split("-"); // Split date into day, month, year
  console.log(dateComponents);
  var DD = parseInt(dateComponents[2]);
  var MM = parseInt(dateComponents[1]);
  var YY = parseInt(dateComponents[0]);
  var newDate = new Date(YY, MM-1, DD); // Deduct 1 because computers count from 0 so January will be 0
  weekDayIndex = newDate.getDay();
  var gender = document.getElementById("userGender").value;
  if (gender === "Female") {
    var akanName = femaleNames[weekDayIndex];
    alert("Your Akan Name is " + akanName);
  } else {
    var akanName = maleNames[weekDayIndex];
    alert("Your Akan Name is " + akanName);
  }

}
