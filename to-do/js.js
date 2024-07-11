const form = document.getElementById('form');
const input = document.getElementById('thoughts');
const notes = document.getElementById('.notes');

const thoughts = JSON.parse(localStorage.getItem('thoughts'));

if(thoughts){
    thoughts.forEach(thoughts => addNotes(thoughts))
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addNotes()
})

function addNotes(thoughts) {t 
    let notesText = input.Value
}
if(thoughts){
    notesText = notes.text
}
