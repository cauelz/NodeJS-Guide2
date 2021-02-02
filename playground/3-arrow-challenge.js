const tasks = {
  tasks: [
    {
      text: 'Grocery shopping',
      completed: true,
    },
    {
      text: 'Clean yard',
      completed: false,
    },
    {
      text: 'Film course',
      completed: false,
    }
  ],
  getTasksToDo() {
    const uncompletedTasks = this.tasks.filter((task) => {
      return task.completed === false;
    })
    return console.log(uncompletedTasks)
  }
}

console.log(tasks.getTasksToDo());