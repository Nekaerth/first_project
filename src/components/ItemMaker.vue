<template>
  <div class="holder">
    <h1>Create {{ selectedItemType }}</h1>
    <span>Choose item type: </span>
    <select v-model="selectedItemType">
      <option
        v-for="(itemType, index) in itemTypes"
        :value="itemType"
        :key="index"
      >
        {{ itemType }}
      </option>
    </select>
    <br />
    <br />

    <template v-if="selectedItemType === 'Person'">
      <input type="text" placeholder="Name" v-model="itemName" />
      <input type="number" placeholder="Age" v-model="age" />
      <button @click="addItem">
        Add person
      </button>
      <p>{{ itemName }}: {{ age }}</p>
    </template>
    <template v-else>
      <input type="text" placeholder="Product name" v-model="itemName" />
      <input type="text" placeholder="Description" v-model="description" />
      <button @click="addItem">Add product</button>
      <p>{{ itemName }}: {{ description }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "ItemMaker",
  data() {
    return {
      itemName: "",
      description: "",
      age: "",
      selectedItemType: "Product",
      itemTypes: ["Product", "Person"],
    };
  },
  watch: {
    selectedItemType(newValue, oldValue) {
      if (newValue != oldValue) {
        this.clearInputs();
      }
    },
  },
  methods: {
    addItem() {
      var item = {};
      if (this.selectedItemType == "Person") {
        item = {
          name: this.itemName,
          age: this.age,
          type: this.selectedItemType,
        };
      } else {
        item = {
          name: this.itemName,
          description: this.description,
          type: this.selectedItemType,
        };
      }
      this.$store.dispatch("addItem", item);
      this.clearInputs();
    },
    clearInputs() {
      this.itemName = "";
      this.age = "";
      this.description = "";
    },
  },
};
</script>

<style scoped>
.holder {
  text-align: center;
  border-style: solid;
}
</style>
