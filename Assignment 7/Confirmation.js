// Name: Nicholas vicker
// Date: Start date: 6/27/2023 End date: 07/06/2023
// Project: input and conformation

/// object information
function UserData(firstName, lastName, address, state, zip, birthday, phone, email, Major, school) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.state = state;
    this.zip = zip;
    this.birthday = birthday;
    this.phone = phone;
    this.email = email;
    this.Major = Major;
    this.school = school;

    // object
    this.displayDate = function() {
        // Extract year, month and day as integers
        let [year, month, day] = this.birthday.split('-').map(val => parseInt(val, 10));
        // Format the date as "Month Day, Year"
        let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = `${monthNames[month - 1]} ${day}, ${year}`;
        return date;
    };
    // Just for a challenge added a function that will add me users age to the confirmation page
    this.calculateAge = function() {
        let birthDate = new Date(this.birthday);
        let currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        let m = currentDate.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
}


// retrieve object from local storage
var storedData = JSON.parse(localStorage.getItem('userData'));
if (storedData) {
    // create a new object with the stored data
    var userData = new UserData(storedData.firstName, storedData.lastName, storedData.address, storedData.state, storedData.zip, storedData.birthday, storedData.phone, storedData.email, storedData.Major, storedData.school);
    document.getElementById('retrievedData').innerHTML = 'This information has been received and submitted:<br><br>First Name: ' + userData.firstName +
    '<br>Last Name: ' + userData.lastName + 
    '<br>Address: ' + userData.address +
    '<br>State: ' + userData.state +
    '<br>Zip Code: ' + userData.zip +
    '<br>Birthday: ' + userData.displayDate() + 
    '<br> Age:  ' + userData.calculateAge() + 
    '<br>Phone Number: ' + userData.phone +
    '<br>Email: ' + userData.email +
    '<br>Major: ' + userData.Major + 
    '<br>School: ' + userData.school;
} else {
    document.getElementById('retrievedData').innerHTML = 'No data found';
}

