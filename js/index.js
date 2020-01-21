
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
  const db = firebase.firestore();
  firebase.analytics();
  firebase.auth.Auth.Persistence.LOCAL;
  db.collection('user').get().then((snapshot) => {
      console.log(snapshot.docs);
  })


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

  
  $("#btn").click(function()
  {
      let email = $("#email").val();
      let password = $("#password").val();
      let confirm_pw = $("#confirmpassword").val();

      if(email != "" && password != "" && confirm_pw != "")
      {
          if(password == confirm_pw)
          {
            let result = firebase.auth().createUserWithEmailAndPassword(email, password);

            result.catch(function(error) 
            {
                let errorCode = error.code;
                let errorMessage = error.message;
  
                window.alert("Message : " + errorMessage);
            });
          }
          else {
              window.alert("Password didnt match confirm Password")
          }
      }
      else 
      {
          window.alert("Please fill out all fields")
      }
  });



 $("#btn-logout").click(function()
 {
     firebase.auth().signOut();
 });

 $("#pw-reset").click(function()
 {
    let auth = firebase.auth();
    let email = $("#email").val();

    if(email != "")
    {
        auth.sendPasswordResetEmail(email).then(function()
        {
            window.alert("Email has been sent to you")
        })
        .catch(function(error)
        {
            let errorCode = error.code;
            let errorMessage = error.message;
  
            window.alert("Message : " + errorMessage);
        });
    }
    else 
    {
        window.alert("Email is empty")
    }
 });
  
 $("#btn-update").click(function()
 {
     let phone = $("#phone").val();

     let rootRef = firebase.database().ref().child("Users")
     let userID = firebase.auth().currentUser.uid;
     let usersRef = rootRef.child(userID);
     db.collection("user").add({
        name: "Tokyo",
        country: "Japan"
    });
     

     if(phone != "")
     {
        let userData = 
        {
            "phone": phone
        };

        usersRef.set(userData, (error) => 
        {
            if(error)
            {
                window.alert(error.message)
            }
            else 
            {
                window.location.href = "user_dashboard.html"
            }
        })
     }
     else 
     {
         window.alert("Form is incomplete.")
     }
 });