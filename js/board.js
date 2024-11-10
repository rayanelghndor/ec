const currentUser = localStorage.getItem('currentUser');
if (!currentUser) {
  window.location.href = 'login.html';
}

document.getElementById('usernameDisplay').textContent = currentUser;

const notesList = document.getElementById('notesList');
const addNoteCard = document.getElementById('addNoteCard');
const noteModal = document.getElementById('noteModal');
const closeModal = document.querySelector('.close');
const saveNoteButton = document.getElementById('saveNoteButton');
const newNoteTextarea = document.getElementById('newNote');

const user = JSON.parse(localStorage.getItem(currentUser));


function renderNotes() {
  notesList.innerHTML = ''; 

  user.notes.forEach((note, index) => {
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');

    const noteText = document.createElement('p');
    noteText.textContent = note;


    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', function() {

      const newNote = prompt('Update your note:', note);
      if (newNote !== null && newNote.trim() !== '') {
        user.notes[index] = newNote; 
        localStorage.setItem(currentUser, JSON.stringify(user));
        renderNotes(); 
      }
    });

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      user.notes.splice(index, 1);
      localStorage.setItem(currentUser, JSON.stringify(user));
      renderNotes(); 
    });

  
    noteCard.appendChild(noteText);
    noteCard.appendChild(updateButton);
    noteCard.appendChild(deleteButton);

    notesList.appendChild(noteCard); 
  });

  
  notesList.appendChild(addNoteCard);
}


renderNotes();


addNoteCard.addEventListener('click', function() {
  noteModal.style.display = 'flex';
});


closeModal.addEventListener('click', function() {
  noteModal.style.display = 'none';
  newNoteTextarea.value = ''; 
});


saveNoteButton.addEventListener('click', function() {
  const newNote = newNoteTextarea.value;
  if (newNote) {
    user.notes.push(newNote);
    localStorage.setItem(currentUser, JSON.stringify(user));

    renderNotes(); 

    noteModal.style.display = 'none'; 
    newNoteTextarea.value = ''; 
  }
});

window.addEventListener('click', function(event) {
  if (event.target === noteModal) {
    noteModal.style.display = 'none';
  }
});

document.getElementById('logoutButton').addEventListener('click', function() {
  localStorage.removeItem('currentUser');
  window.location.href = 'login.html';
});
