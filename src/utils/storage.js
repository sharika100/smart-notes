export function saveNotes(notes) {
  localStorage.setItem('smart-notes', JSON.stringify(notes));
}

export function loadNotes() {
  const notes = localStorage.getItem('smart-notes');
  return notes ? JSON.parse(notes) : [];
}
