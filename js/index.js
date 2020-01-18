var firebaseConfig = 
{
    apiKey: "AIzaSyAmyCuK6ZtTuJ4AeX8sGYA0CbVV2V-zr78",
    authDomain: "trellpy.firebaseapp.com",
    databaseURL: "https://trellpy.firebaseio.com",
    projectId: "trellpy",
    storageBucket: "trellpy.appspot.com",
    messagingSenderId: "892327697068",
    appId: "1:892327697068:web:79b2eb1444158d07fc5d09",
    measurementId: "G-PR3LFLQBMG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth.Auth.Persistence.LOCAL;


  $("#btn-login").click(function()
  {
    let email = $("#email").val();
    let password = $("#password").val();

    if(email != "" && password != "")
    {
        let result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function(error) 
        {
            let errorCode = error.code;
            let errorMessage = error.message;

            window.alert("Message : " + errorMessage);
        });
    }
    else 
    {
        window.alert("Please fill out all fields")
    }
  });