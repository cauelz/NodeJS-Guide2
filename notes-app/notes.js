const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes..';
}

const addNotes = (title, body) => {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // })
  const duplicateNote = notes.find((note) => {
    return note.title === title;
  })

  debugger //node inspect app.js --title ...

  console.log(duplicateNotes)

  if (!duplicateNote) {

    notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes);
    console.log(chalk.green.inverse('New Note Created!'));

  } else {

    console.log(chalk.red.inverse('Note title already Taken!'));

  }

}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse('Your Notes!'));

  notes.forEach(note => {
    console.log(note.title)
  });
}

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => {
    return note.title === title;
  })

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('Note not found'))
  }
}

const removeNotes = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  })
  console.log(notesToKeep);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note Removed!'))
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }

}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {

  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

  } catch (e) {

    return []
  }

}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote
};