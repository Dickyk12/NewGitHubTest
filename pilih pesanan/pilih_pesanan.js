// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAnX8idR3pBq5LsJ1L7dbcxQFk8T_WtG9c",
    authDomain: "pilih-pesanan.firebaseapp.com",
    databaseURL: "https://pilih-pesanan.firebaseio.com",
    projectId: "pilih-pesanan",
    storageBucket: "pilih-pesanan.appspot.com",
    messagingSenderId: "829313074769",
    appId: "1:829313074769:web:a5442ab3780c46deb89a70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function add_task(){
    input_box= document.getElementById("input_box");
    input_date= document.getElementById("Input_date");
    if(input_box.value.length !=0 && input_date.value.length !=0) {





        var key = firebase.database().ref().child("unfinished_task").push().key;
        var task = {
            task: input_box.value,
            date: input_date.value,
            key: key
        };
        var updates = {};
        updates["/unfinished_task/" + key] = task;
        firebase.database().ref().update(updates);


    }
}
    


function task_done(){
    console.log("task_done");
}

function task_edit(){
    console.log("task_edit");
}

function task_delete(){
    console.log("task_delete");
}




  
  
