const app = Vue.createApp({
  data() {
    return {
      newTodoItem: {
        text: "",
      },

      todoList: [
        {
          id: 1,
          text: "primo todo",
          done: false,
        },

        {
          id: 2,
          text: "secondo todo",
          done: false,
        },
      ],
      lastId: 2,
    };
  },
  methods: {
    addTodoItem() {
      const itemClone = { ...this.newTodoItem };
      itemClone.id = ++this.lastId;
      itemClone.done = false;
      this.todoList.push(itemClone);
    },

    deleteTodoItem(itemId) {
      console.log(itemId);
      let indexToDelete = this.todoList.findIndex(
        (todoItem) => todoItem.id === itemId
      );
      console.log(indexToDelete);
      this.todoList.splice(indexToDelete, 1);
    },

    toggleCheckbox(itemId) {
      let index = this.todoList.findIndex((todoItem) => todoItem.id === itemId);
      this.todoList[index].done = !this.todoList[index].done;
      console.log(this.todoList[index].done);
    },
  },
});

app.mount("#app");
