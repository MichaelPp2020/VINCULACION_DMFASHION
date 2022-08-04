const firebaseConfig = {
  apiKey: "AIzaSyDh4lEYJ9pZQqsVUIgX53A7AqivmBYGcjk",
  authDomain: "vinculacion-5a066.firebaseapp.com",
  projectId: "vinculacion-5a066",
  storageBucket: "vinculacion-5a066.appspot.com",
  messagingSenderId: "485633644338",
  appId: "1:485633644338:web:c66c56efeca226d00d292b"
};

  //iniciar firebase
firebase.initializeApp(firebaseConfig);

// referencia
var vinculacionDB = firebase.database().ref("vinculacion")

document.getElementById("vinculacion").addEventListener("submit", submitForm);

function submitForm(e){
  e.preventDefault();

  var nameid = getElementVal('nameid');
  var apellidoid = getElementVal('apellidoid');
  var fechaid = getElementVal('fechaid');
  var telefonoid = getElementVal('telefonoid');
  var gmailid = getElementVal('gmailid');
  var passwordid = getElementVal('passwordid');
  var password1id = getElementVal('password1id');

  saveMessages(nameid, apellidoid, fechaid, telefonoid, gmailid, passwordid, password1id);




  //console.log(nameid, apellidoid, fechaid, telefonoid, gmailid, passwordid, password1id)
}

const saveMessages = (nameid, apellidoid, fechaid, telefonoid, gmailid, passwordid, password1id) => {
    var newvinculacion = vinculacionDB.push();

    newvinculacion.set({
      nameid : nameid,
      apellidoid : apellidoid,
      fechaid : fechaid,
      telefonoid : telefonoid,
      gmailid : gmailid,
      passwordid : passwordid,
      password1id : password1id,
    })
};

const getElementVal = (id) => {
  return document.getElementById(id).value;

};