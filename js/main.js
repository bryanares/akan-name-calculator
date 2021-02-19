const akanForm = document.querySelector('#akanForm');
const outputContainer = document.querySelector('#output');
const genderValue = ()=>{
    if(document.getElementById('male').selected){
        return document.getElementById('male').value;
    }
    if(document.getElementById('female')).selected{
        return document.getElementById('female').value;
    }
    return false;
};
