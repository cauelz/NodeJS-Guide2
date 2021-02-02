const notes = require('./notes');
const yargs = require('yargs');
const chalk = require('chalk');
const { readNote } = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'My name is ',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  }
})
// Create list command
yargs.command({
  command: 'list',
  describe: 'list a new note',
  handler() {
    notes.listNotes();
  }
})
// Create read command
yargs.command({
  command: 'read',
  describe: 'read a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
})

// add, remove, read, list

yargs.parse();

// console.log(yargs.argv);


