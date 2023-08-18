const btnE1 = document.getElementById("btn")
const  birthdayE1 = document.getElementById("birthday")
const  resultE1 = document.getElementById("result")
function calculateAge(){
    const birthdayValue = birthdayE1.value;
    if(birthdayValue === ""){
        alert("please enter valid birthdate");
    }
    else{
        const age = getage(birthdayValue)
        resultE1.innerText = `Your age is  ${age} ${age > 1 ? "years" : "year"} old`;
    }

}

function getage(birthdayValue){
    const CurrentDate = new Date()
    const birthdaydate = new Date(birthdayValue)
    let age = CurrentDate.getFullYear() - birthdaydate.getFullYear();
    const month = CurrentDate.getMonth() - birthdaydate.getMonth();

    if(month<0 || (month === 0 && CurrentDate.getDate() < birthdaydate.getDate() )){
        age--
    }

    return age;
}

btnE1.addEventListener("click", calculateAge)