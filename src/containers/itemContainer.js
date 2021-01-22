import { mapActions, mapState } from "vuex";

export default {
  name: "ItemContainer",
  computed: {
    ...mapState("items", ["items"]),
  },
  methods: {
    ...mapActions("items", ["addItem", "removeItem"]),
  },
  render() {
    return this.$scopedSlots.default({
      items: this.items,
    });
  },
  provide() {
    return {
      itemContainer: this,
    };
  },
};
