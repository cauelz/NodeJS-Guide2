const { getNotes } = require('./notes');
const yargs = require('yargs');
const chalk = require('chalk');

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
  handler: function (argv) {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a new note',
  handler: function () {
    console.log('Removing a new note!');
  }
})
// Create list command
yargs.command({
  command: 'list',
  describe: 'list a new note',
  handler: function () {
    console.log('Listing notes!');
  }
})
// Create read command
yargs.command({
  command: 'read',
  describe: 'read a new note',
  handler: function () {
    console.log('Reading a new note!');
  }
})

// add, remove, read, list

yargs.parse();

// console.log(yargs.argv);


