//  step 1 add eventhander
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit btn check');

    //  setp - 2 get the email address inside the email input field.
    //  alawyas remember to use .value to get text from an input filed

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    //  step - 3 get pass

    const passdordField = document.getElementById('user-passdord');
    const passdord = passdordField.value;
    // console.log(passdord);

    //  verify email and pass

    if(email === 'sontan@baap.com' && passdord === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('toke ami ber kore dilam tui pass bule gesos');
    }
})

