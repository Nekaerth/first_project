<template>
  <div class="holder">
    <div class="header">
      <slot name="header">
        <h1>{{ name }}</h1>
      </slot>
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
    <div>
      <slot name="footer">
        <button @click="removeItem(id)">
          Discard
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ListItem",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      default: "List item",
    },
  },
  methods: {
    ...mapActions("items", ["removeItem"]),
  },
};
</script>

<style scoped>
.holder {
  text-align: center;
  border-style: solid;
  border-color: rgb(126, 163, 175);
  border-width: 2px;
  margin: 4px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 40px minmax(100px, auto) 40px;
}

.header {
  grid-column: 1 / 1;
  grid-row: 1 / 3;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.6rem;
  color: white;
  background-color: rgb(126, 163, 175);
}

.body {
  grid-column: 1 / 1;
  grid-row: 2 / 3;
  background-color: white;
}

.footer {
  grid-column: 1 / 1;
  grid-row: 3 / 3;
  background-color: rgba(223, 250, 250, 0.836);
}
</style>
