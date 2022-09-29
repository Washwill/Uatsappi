
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyANl_OEeY_TkOQH42xAh9JPudJa2a1jMWw",
  authDomain: "kwitter-d1136.firebaseapp.com",
  databaseURL: "https://kwitter-d1136-default-rtdb.firebaseio.com",
  projectId: "kwitter-d1136",
  storageBucket: "kwitter-d1136.appspot.com",
  messagingSenderId: "40000085657",
  appId: "1:40000085657:web:7984c0c2658b7a90fca208"
};

firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");
document.getElementById("userName").innerHTML = "Bem vindo(a) " + userName + "!";

  function addRoom()
  {
    roomName = document.getElementById("roomName").value;
    console.log(roomName);
    firebase.database().ref("/").child(roomName).update({
      objetivo:"Adicionar Sala"
    });


    localStorage.setItem("roomName", roomName);
    window.location = "kwitterPage - cópia.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         roomNames = childKey;
         console.log("Nome da Sala - " + roomNames);
        row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  getData();
  
  function redirectToRoomName(name){
    localStorage.setItem("roomName", name);
    window.location = "kwitterPage - cópia.html";
  }

  function logout(){
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index - cópia.html";
  }