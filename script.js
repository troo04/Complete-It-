var x = 0;
if (sessionStorage.Xvalue) {
  let x = JSON.parse(sessionStorage.XValue);
}
let pendingNotes = new Object();
let completedNotes = new Object();
if (sessionStorage.notes) {
  pendingNotes = JSON.parse(sessionStorage.notes)[0];
  completedNotes = JSON.parse(sessionStorage.notes)[1];
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("defaultOpen").click();
  let arr = [pendingNotes, completedNotes];
  sessionStorage.setItem("notes", JSON.stringify(arr));
  let pnotes = sessionStorage.notes[0];
  let cnotes = sessionStorage.notes[1];
  if (Object.keys(pendingNotes).length !== 0) {
    //console.log(Object.keys(pendingNotes).length);
    addOldNotePen(JSON.parse(sessionStorage.notes)[0]);
  }
   if (Object.keys(completedNotes).length !== 0) {
    //console.log(Object.keys(completedNotes).length);
    addOldNoteCom(JSON.parse(sessionStorage.notes)[1]);
  }
  //A call made to the getDate function
  getDate();
  document.getElementById("addBtn").addEventListener("click", function() {
    x += 1;
    sessionStorage.setItem("XValue", JSON.stringify(x));
    addNote();
  });
  var input = document.getElementById("myInput");
  input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   x += 1;
   sessionStorage.setItem("XValue", JSON.stringify(x));
   addNote();
  }
});
});

//Function to retrieve the date
const getDate = () => {
  var d = new Date();
  var month = d.getUTCMonth();
  var day = d.getUTCDate();
  var dayOfWeek = d.getUTCDay();
  var dictMon = {}
  var dictWeek = {}
  dictMon = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  }
  dictWeek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  }
  let ending = "";
  if (day == 1 || day == 21 || day == 31) {
    ending = "st"
  } else if (day == 2 ||day == 22) {
    ending = "nd"
  } else if (day == 3 || day == 23) {
    ending = "rd"
  } else {
    ending = "th"
  }

  document.getElementById("time").innerHTML = dictWeek[dayOfWeek] +  ", " + dictMon[month] + " " + day + ending;
}

const addNote = () => {
  const input = document.getElementById("myInput");
  
  //const btn = document.getElementById("deleteNoteButton"+x);
  document.getElementById("containerNotePen").innerHTML += 
  `   
    <div id = "noteContainer${x}" class = "noteContainer" style = "margin: 30px; width: 60%; position: relative">

      <img src = "astickynote.jpg" style = "width: 100%; margin: auto;">

      <p id = "noteText${x}" style = "position: absolute; top: 50%; left: 50%; text-align: center; z-index: 2; width: 30%; transform: translate(-50%, -50%); word-wrap: break-word;">${input.value}</p>
    
      <button id = "deleteNoteButton${x}"  class = "close" onclick = "deleteNote(this)" style = "position: absolute; top: 0%; background-color: transparent; background-repeat:no-repeat; border: none; cursor:pointer; overflow: hidden; outline:none; transform: translate(-100%, 0%); padding: 5px; font-size: 20px; z-index: 2;" >✘</button>
    </div>
  `;
  let arr = [pendingNotes, completedNotes];
  pendingNotes[`${x}`] = input.value;
  sessionStorage.setItem("notes", JSON.stringify(arr));
  document.getElementById("myInput").value = "";
};

const addOldNotePen = (input) => {
  let pN = input;
  console.log(pN);
  for (let i = 0; i < Object.keys(pN).length; i++) {
    let curr = Object.keys(pN)[i];
    let text = pN[curr];
    document.getElementById("containerNotePen").innerHTML += 
      `   
      <div id = "noteContainer${curr}" class = "noteContainer" style = "margin: 30px; width: 60%; position: relative">

        <img src = "astickynote.jpg" style = "width: 100%; margin: auto;">

        <p id = "noteText${curr}" style = "position: absolute; top: 50%; left: 50%; text-align: center; z-index: 2; width: 30%; transform: translate(-50%, -50%); word-wrap: break-word;">${text}</p>
      
        <button id = "deleteNoteButton${curr}"  class = "close" onclick = "deleteNote(this)" style = "position: absolute; top: 0%; background-color: transparent; background-repeat:no-repeat; border: none; cursor:pointer; overflow: hidden; outline:none; transform: translate(-100%, 0%); padding: 5px; font-size: 20px; z-index: 2;" >✘</button>
      </div>
    `;
  }
}

const addOldNoteCom = (input) => {
  let cN = input;
  for (let i = 0; i < Object.keys(cN).length; i++) {
    let curr = Object.keys(cN)[i];
    let text = cN[curr];
    document.getElementById("containerNoteCom").innerHTML += 
      `   
      <div id = "noteContainer${curr}" class = "noteContainer" style = "margin: 30px; width: 60%; position: relative">

        <img src = "astickynote.jpg" style = "width: 100%; margin: auto;">

        <p id = "noteText${curr}" style = "position: absolute; top: 50%; left: 50%; text-align: center; z-index: 2; width: 30%; transform: translate(-50%, -50%); word-wrap: break-word;">${text}</p>
      
        <button id = "deleteNoteButton${curr}"  class = "close" onclick = "deleteNote(this)" style = "position: absolute; top: 0%; background-color: transparent; background-repeat:no-repeat; border: none; cursor:pointer; overflow: hidden; outline:none; transform: translate(-100%, 0%); padding: 5px; font-size: 20px; z-index: 2;" >✘</button>

        <button id = "reviveNoteBtn${curr}" onclick = "reviveNote(this)" style = "position: absolute; top: 0px; left: 0px; z-index: 2; border: none; background-color: inherit; width: 20%;"><img src = "file-upload.png" style = "margin-left: 20; width: 90%; left: 0%;"></img></button>
      </div>
    `;
  }
}

function reviveNote(btn) {
  //moves viewable note from completed back into pending
  let parent = btn.parentElement;
  let id = parent.id;
  let btnid = btn.id;
  console.log(btnid);
  parent.removeChild(btn);
  let wrap = document.createElement("div");
  wrap.appendChild(parent);
  let pen = document.getElementById("containerNotePen");
  pen.innerHTML += wrap.innerHTML;
  
  //removes notes from dictionary, within the session storage
  let currentx = parseInt(btnid.match(/\d+$/)[0], 10);
  parent.parentNode.removeChild(parent);
  let text = document.getElementById(`noteText${currentx}`).innerHTML;
  pendingNotes[`${currentx}`] = text;
  delete completedNotes[`${currentx}`];
  let arr = [pendingNotes, completedNotes];
  sessionStorage.setItem("notes", JSON.stringify(arr));
  return
}
function deleteNote(btn) {
  
  var parent = btn.parentElement;
  let id = parent.id;
  if (parent.parentElement.parentElement.id == "Pending") {
    let idnum = parseInt(id.charAt(id.length-1));
    parent.innerHTML += 
    `
      <button id = "reviveNoteBtn${idnum}" onclick = "reviveNote(this)" style = "position: absolute; top: 0px; left: 0px; z-index: 2; border: none; background-color: inherit; width: 20%;"><img src = "file-upload.png" style = "margin-left: 20; width: 90%; left: 0%;"></img></button>

    `
    let btnid = btn.id;
    let currentx = parseInt(btnid.match(/\d+$/)[0], 10);
    var wrap = document.createElement('div');
    wrap.appendChild(parent);
    document.getElementById("containerNoteCom").innerHTML += wrap.innerHTML;
    let text = document.getElementById(`noteText${currentx}`).innerHTML;
    completedNotes[`${currentx}`] = text;
    delete pendingNotes[`${currentx}`];
    let arr = [pendingNotes, completedNotes];
    sessionStorage.setItem("notes", JSON.stringify(arr));
    return parent.parentNode.removeChild(parent);

  } else {
    //Removes notes from completed notes
    let btnid = btn.id;
    let currentx = parseInt(btnid.match(/\d+$/)[0], 10);
    delete completedNotes[`${currentx}`];
    let arr = [pendingNotes, completedNotes];
    sessionStorage.setItem("notes", JSON.stringify(arr));
    return parent.parentNode.removeChild(parent);
  }
}

//Function to open the tabs
function openNote(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

}
