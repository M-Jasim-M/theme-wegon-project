
function fire1() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(email === '' || password === '' ){
        window.alert('please fill the data')
    } else {
        window.alert("add sucessfully")
        
        
        // btn.innerHTML = 'please wait';
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(error)
    // ..
  });
    }


   
}