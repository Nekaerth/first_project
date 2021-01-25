<template>
  <div id="app">
    <Todos />
    <ItemContainer v-slot="{ items }">
      <div>
        <ItemMaker />
        <template v-for="item in items">
          <Product
            v-if="item.type == 'Product'"
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :description="item.description"
          >
          </Product>
          <Person
            v-else
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :age="item.age"
          />
        </template>
      </div>
    </ItemContainer>
  </div>
</template>

<script>
import ItemMaker from "./components/ItemMaker.vue";
import Person from "./components/Person.vue";
import Product from "./components/Product.vue";
import ItemContainer from "./containers/itemContainer.js";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Person,
    ItemMaker,
    Product,
    Todos: import("./components/Todos.vue"), //Is only imported when Todos-component is used
    ItemContainer,
  },
  methods: {
    ...mapActions("todos", ["fetchTodos"]),
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>

<style></style>
