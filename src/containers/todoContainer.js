import { mapActions, mapState } from "vuex";

export default {
  name: "TodoContainer",
  computed: {
    ...mapState("todos", ["status", "todos"]),
  },
  methods: {
		...mapActions("todos", ["fetchTodos"]),
		todoTitles() {
			return this.todos.map(todo => todo.title);
		}
  },
  render() {
    return this.$scopedSlots.default({
      status: this.status,
      todoTitles: this.todoTitles(),
    });
  },
};
