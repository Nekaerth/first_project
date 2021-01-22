<template>
  <div id="app">
    <TodoContainer v-slot="{ status }">
      Todo status: {{ status }}
    </TodoContainer>
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
import TodoContainer from "./containers/todoContainer.js";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Person,
    ItemMaker,
    Product,
    ItemContainer,
    TodoContainer,
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
