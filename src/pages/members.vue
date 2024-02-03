<template>
  <div>
    <MainNav />
    <div
      class="flex items-center fixed top-16 left-0 w-full h-24 bg-white z-10"
    >
      <div class="flex items-center ml-8 h-full">
        <input
          type="text"
          class="flex items-center border border-solid px-10 py-3 rounded-sm focus:border-blue-500"
          placeholder="Search members"
          v-model="search"
          @input="filterItems"
        />
      </div>

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
        <AddMemberForm @form-data="handleFormData" @toggle-form="toggleForm" />
      </div>
    </div>
    <div class="mt-40 mx-8">
      <v-data-table
        class="overflow-hidden border border-black mb-10"
        v-model="selected"
        :items="filteredItems"
        item-value="firstname"
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
      items: [],
    };
  },
  computed: {
    filteredItems() {
      if (this.search) {
        const searchQuery = this.search.toLowerCase();
        return this.items.filter((item) =>
          item.firstname.toLowerCase().includes(searchQuery)
        );
      } else {
        return this.items;
      }
    },
  },
  methods: {
    handleFormData(formData) {
      this.items.push(formData); // Add the form data to the items array
    },
    toggleForm() {
      this.showForm = !this.showForm;
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
