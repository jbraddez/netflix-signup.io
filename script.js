function cardSize(){
    var screenWidth = window.innerWidth;
    var card = document.querySelector(".all-card");
    var logo = document.querySelector('.logo');

    if (screenWidth < 600){
        card.style.height = '80% ';
        card.style.width = '70% ';
        logo.style.width= '150px ';
        //Font sizes
    }else{
        card.style.height = '';
        card.style.width = '';
        logo.style.width= '';
    }

}

window.addEventListener("resize", cardSize);
window.addEventListener("load", cardSize);


document.addEventListener('DOMContentLoaded', function() {
    var passInput = document.querySelector('.signup-pass');
    var passConInput = document.querySelector('.signup-pass-con');

    function validatePasswords() {
        var passValue = passInput.value.trim();
        var passConValue = passConInput.value.trim();

        // Check if both passwords are not just spaces and have a length greater than 7 characters
        if (passValue.trim().length > 7 && passConValue.trim().length > 7 &&
            passValue === passConValue) {
            passInput.style.backgroundColor = 'rgba(144, 238, 144, 0.5)';
            passConInput.style.backgroundColor = 'rgba(144, 238, 144, 0.5)';
        } else {
            passInput.style.backgroundColor = '';
            passConInput.style.backgroundColor = '';
        }
    }

    passInput.addEventListener('input', validatePasswords);
    passConInput.addEventListener('input', validatePasswords);
});