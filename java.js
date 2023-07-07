//age in days 

function ageindays(){
    birthdate = new Date(prompt('Enter your birthdate in YYYY-MM-DD format'));
    const today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear() -(today.getMonth() < birthdate.getMonth() || 
    (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
    console.log(age);

    //age now gives the age in years
    // to get in days , we multiply by 365 as an year has 365 days
    
    age = 365 * age;
    var h1 = document.createElement('h1');
    var textans=document.createTextNode('You are ' + age + ' days old');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textans);
    document.getElementById('result').appendChild(h1)
}

function reset(){
    document.getElementById('ageindays').remove();
}