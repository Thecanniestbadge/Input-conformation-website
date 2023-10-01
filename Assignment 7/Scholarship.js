// Name: Nicholas vicker
// Date: Start date: 6/27/2023 End date: 07/06/2023
// Project: input and conformation

// object information
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
        // Construct a date string in the format "Month Day, Year"
        let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = `${monthNames[month - 1]} ${day}, ${year}`;
        return date;
    };
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var state = document.getElementById('State').value;
    var zip = document.getElementById('Zip').value;
    var birthday = document.getElementById('birthday').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('Email').value;
    var Major = document.getElementById('Major').value;
    var school = document.getElementById('school').value;

    // validate phone number
    var phoneVal = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
    if (!phoneVal.test(phone)) {
        alert("Invalid phone number");
        return;
    }


    // validate zip code
    var zipVal = /^\d{5}$/;
    if (!zipVal.test(zip)) {
        alert("Invalid Zip Code");
    return;
}

    // validate email
    var emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal.test(email)) {
        alert("Invalid email");
        return;
    }
    // Validates the user is 18
    var birthDate = new Date(birthday);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    if(age < 18){
        alert("You must be 18 or older to apply");
        return;
    }
    // create object
    var userData = new UserData(firstName, lastName, address, state, zip, birthday, phone, email, Major, school);

    // save object to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // redirect to the Confirmation page
    window.location.href = 'Confirmation.html';
});
