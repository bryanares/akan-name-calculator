const akanForm = document.querySelector("#akanForm");
const outputContainer = document.querySelector("#output");
const genderValue = ()=>{
    if(document.getElementById("male").selected){
        return document.getElementById('male').value;
    }
    if(document.getElementById("female")).selected{
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

    
})