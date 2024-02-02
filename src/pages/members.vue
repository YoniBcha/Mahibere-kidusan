<template>
  <div>
    <MainNav />
    <div
      class="flex items-center fixed top-16 left-0 w-full h-16 bg-white z-10"
    >
      <input
        type="text"
        class="fixed top-20 left-8 border border-solid px-4 py-1 rounded-md"
        placeholder="Search"
        v-model="search"
        @input="filterItems"
      />

      <button
        @click="toggleForm"
        class="flex items-center fixed right-0 mr-8 px-5 py-2 bg-blue-500 text-white font-bold rounded-md"
      >
        {{ showForm ? "Close" : "Add new member" }}
      </button>
      <div
        :class="{ show: showForm }"
        id="myForm"
        class="border border-black bg-[#edf2f4]"
      >
        <AddMemberForm @toggle-form="toggleForm"></AddMemberForm>
      </div>
    </div>
    <div class="mt-32 mx-8">
      <v-data-table
        class="overflow-hidden border border-black mb-10"
        v-model="selected"
        :items="filteredItems"
        item-value="name"
        show-select
      ></v-data-table>
    </div>
  </div>
</template>

<script>
import AddMemberForm from "@/components/addMemberForm.vue";

export default {
  name: "MembersPage",
  components: { AddMemberForm },
  data() {
    return {
      previewImage: null,
      showForm: false,
      selected: [],
      search: "",
      items: [
        {
          name: "🍎 Apple",
          location: "Washington",
          height: "0.1",
          base: "0.07",
          volume: "0.0001",
        },
        {
          name: "🍌 Banana",
          location: "Ecuador",
          height: "0.2",
          base: "0.05",
          volume: "0.0002",
        },
        {
          name: "🍇 Grapes",
          location: "Italy",
          height: "0.02",
          base: "0.02",
          volume: "0.00001",
        },
        {
          name: "🍉 Watermelon",
          location: "China",
          height: "0.4",
          base: "0.3",
          volume: "0.03",
        },
        {
          name: "🍍 Pineapple",
          location: "Thailand",
          height: "0.3",
          base: "0.2",
          volume: "0.005",
        },
        {
          name: "🍒 Cherries",
          location: "Turkey",
          height: "0.02",
          base: "0.02",
          volume: "0.00001",
        },
        {
          name: "🥭 Mango",
          location: "India",
          height: "0.15",
          base: "0.1",
          volume: "0.0005",
        },
        {
          name: "🍓 Strawberry",
          location: "USA",
          height: "0.03",
          base: "0.03",
          volume: "0.00002",
        },
        {
          name: "🍑 Peach",
          location: "China",
          height: "0.09",
          base: "0.08",
          volume: "0.0004",
        },
        {
          name: "🥝 Kiwi",
          location: "New Zealand",
          height: "0.05",
          base: "0.05",
          volume: "0.0001",
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      if (this.search) {
        const searchQuery = this.search.toLowerCase();
        return this.items.filter((item) =>
          item.name.toLowerCase().includes(searchQuery)
        );
      } else {
        return this.items;
      }
    },
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
    addName() {
      const newName = prompt("Enter a name");
      if (newName) {
        this.items.push({ name: newName });
      }
    },
    filterItems() {
      this.selected = [];
    },
  
  },
};
</script>
<style scoped>
#myForm {
  position: fixed;
  top: 0;
  right: 0;
  width: 800px;
  height: 100%;
  transition: transform 0.5s;
  transform: translateX(100%);
  overflow-y: scroll; /* Add this line */
}
#myForm.show {
  transform: translateX(0%);
}
</style>
