import { useState } from 'react';

export default function NoteEditor({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAdd = () => {
    if(!title && !content) return;
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className="note-editor">
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea placeholder="Write your note..." value={content} onChange={e=>setContent(e.target.value)} />
      <button onClick={handleAdd}>Add Note</button>
    </div>
  );
}
