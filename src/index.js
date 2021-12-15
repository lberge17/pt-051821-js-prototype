const noteList = document.getElementById('notes-list')

const notes = [
  "learning some JS",
  "start JS project next week",
  "prototypes are a bit confusing but COOL"
]

notes.forEach(n => {
  const noteObj = new Note(n)
  noteList.append(noteObj.render())
})