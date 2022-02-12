console.log("welcome to daily notes.This is app.js");
showNotes(); //so that notes will not be deleted after refreshing
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let notetitl = document.getElementById("notetitle");
  let notetitletxt = localStorage.getItem("notestxt");
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  if (notetitletxt == null) {
    notestxtObj = [];
  } else {
    notestxtObj = JSON.parse(notes);
  }
  notestxtObj.push(notetitle.value);
  notesObj.push(addTxt.value);
  localStorage.setItem("notestxt", JSON.stringify(notestxtObj));
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  notetitl.value = "";
  console.log(notesObj);
  console.log(notestxtObj);
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }


  let html = "";
  notesObj.forEach(function (element,index) {
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" href="#" class="btn btn-primary">Delete</button>
            </div>
        </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a note" section above to add notes`;
  }
}
//delete button js
function deleteNote(index) {
  // console.log('I am deleting',index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
//search button js
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  console.log("Input event fired!");
  let inputVal = search.value;
  let noteCard = document.getElementsByClassName(noteCard);
  Array.from(noteCard).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p");
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
