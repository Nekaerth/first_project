<template>
  <div id="app">
    <p>Todo status: {{ status }}</p>
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
</template>

<script>
import ItemMaker from "./components/ItemMaker.vue";
import Person from "./components/Person.vue";
import Product from "./components/Product.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Person,
    ItemMaker,
    Product,
  },
  computed: {
    ...mapState(["items", "status"]),
  },
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>

<style></style>
