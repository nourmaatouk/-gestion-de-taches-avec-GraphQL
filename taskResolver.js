let tasks = [
    { id: '1', title: 'Frontend', description: 'Créer UI en React', completed: false, duration: 5 },
    { id: '2', title: 'Backend', description: 'Implémenter API en Express', completed: false, duration: 8 },
  ];
  
  const taskResolver = {
    Query: {
      task: (_, { id }) => tasks.find(task => task.id === id),
      tasks: () => tasks,
    },
    Mutation: {
      addTask: (_, { title, description, completed, duration }) => {
        const task = { id: String(tasks.length + 1), title, description, completed, duration };
        tasks.push(task);
        return task;
      },
      completeTask: (_, { id }) => {
        const task = tasks.find(t => t.id === id);
        if (task) task.completed = true;
        return task;
      },
      changeDescription: (_, { id, newDescription }) => {
        const task = tasks.find(t => t.id === id);
        if (task) task.description = newDescription;
        return task;
      },
      deleteTask: (_, { id }) => {
        const taskIndex = tasks.findIndex(t => t.id === id);
        if (taskIndex !== -1) {
          tasks.splice(taskIndex, 1);
          return true;
        }
        return false;
      },
    },
  };
  
  module.exports = taskResolver;
  
  