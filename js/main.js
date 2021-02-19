const akanForm = document.querySelector("#akanForm");
const outputContainer = document.querySelector("#output");
const genderValue = () =>{
    if(document.getElementById("male").selected){
        return document.getElementById('male').value;
    }
    if(document.getElementById("female").selected){
        return document.getElementById("female").value;
    }
    return false;
};
//form manipulation

akanForm.addEventListener("submit", function(e){
    e.preventDefault();
    const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleAkanNames =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const userBirthday = akanForm.elements.date.value;
    //console.log(userBirthday);

    let birthdayArray = userBirthday.split("-");
    let yy = birthdayArray[0];
    let mm = birthdayArray[1]-1;
    let dd = birthdayArray[2];
    let dateOfBirth = new Date(yy, mm, dd);
    let day = dateOfBirth.getDay();
    let weekDay = days[day];
    
    let yourAkan;

    if (userBirthday === ""){
        alert("Please select your Birthday.");
    }
    if (genderValue() === false){
        alert("Please select your Gender.");
    }

    
})