<template>
  <div>
    <ListItem :name="name" :id="id">
      <template #body>
        <p>Age: {{ age }}</p>
      </template>
    </ListItem>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "Person",
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
    age: String,
  },
  data() {
    return {
      type: "person",
    };
  },
};
</script>

<style scoped></style>
