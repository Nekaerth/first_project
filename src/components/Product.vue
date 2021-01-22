<template>
  <div>
    <ListItem :name="name" :id="id">
      <template #body>
        <p>{{ description }}</p>
        <p>{{ selectedCaterory }}</p>
        <select v-model="selectedCaterory">
          <option
            v-for="(category, index) in categories"
            :value="category"
            :key="index"
          >
            {{ category }}
          </option>
        </select>
      </template>
    </ListItem>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "Product",
  components: {
    ListItem,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      type: "product",
      selectedCaterory: "Food",
      categories: ["Food", "Electronic", "Vehicle"],
    };
  },
};
</script>

<style scoped></style>
