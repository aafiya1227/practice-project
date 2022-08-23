const addbox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const popupTitle = document.querySelector("header p");
const closeIcon = document.querySelector("header i");

const titleTag = document.querySelector("input");
const description = document.querySelector("textarea");
const addButton = document.querySelector("button");
let month = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const notes = JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false,
  updateId;

addbox.addEventListener("click", () => {
  titleTag.focus();
  popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  isUpdate = false;
  titleTag.value = "";
  description.value = "";
  addButton.innerText = "Add Note";
  popupTitle.innerHTML = "Add a new Note";
  popupBox.classList.remove("show");
});

function showNotes() {
  document.querySelectorAll(".note").forEach((note) => note.remove());
  notes.forEach((note, index) => {
    let liTag = ` <li class="note">
    <div class="details">
      <p>${note.title}</p>
      <span
        >${note.description}</span>
    </div>
    <div class="bottom-content">
      <span>${note.date}</span>
      <div class="setting">
        <i class="fa-solid fa-ellipsis"></i>
        <ul class="menu">
          <li onclick="editNote(${index}, '${note.title}', '${note.description}')"><i class="fa-solid fa-pen"> Edit</i></li>
          <li onclick="deleteNote(${index})"><i class="fa-solid fa-trash">Delete</i></li>
        </ul>
      </div>
    </div>
  </li>`;

    addbox.insertAdjacentHTML("afterend", liTag);
  });
}

showNotes();

function deleteNote(noteId) {
  let confirmDel = confirm("Are you sure you want to delete this note?");
  if (!confirmDel) return;

  notes.splice(noteId, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function editNote(noteId, title, desc) {
  isUpdate = true;
  updateId = noteId;
  addbox.click();
  titleTag.value = title;
  description.value = desc;
  addButton.innerText = "Edit Note";
  popupTitle.innerHTML = "Edit a Note";
  console.log(noteId, title, desc);
}

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  let noteTitle = titleTag.value,
    noteDesc = description.value;
  if (noteTitle || noteDesc) {
    let date = new Date();
    let day = date.getDate();
    let months = month[date.getMonth()];
    let year = date.getFullYear();

    let notesInfo = {
      title: noteTitle,
      description: noteDesc,
      date: `${months} ${day}, ${year}`,
    };
    if (!isUpdate) {
      notes.push(notesInfo);
    } else {
      isUpdate = false;
      notes[updateId] = notesInfo;
    }

    localStorage.setItem("notes", JSON.stringify(notes));
    closeIcon.click();
    showNotes();
  }
});
