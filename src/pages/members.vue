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
        class="flex items-center fixed right-0 mr-5 px-4 py-1 bg-blue-500 text-white font-bold rounded-md"
        @click="toggleForm"
      >
        {{ showForm ? "Close" : "Add new member" }}
      </button>
      <!-- <div class=""> -->
      <!-- form -->
      <div
        :class="{ show: showForm }"
        id="myForm"
        class="bg-gray-50 border border-black"
      >
        <form @submit="handleSubmit">
          <button
            class="left-0 m-2 bg-white px-3 py-1 rounded-sm text-gray-500 hover:text-gray-700 text-xl border border-black"
            @click="toggleForm"
          >
            X
          </button>
          <span class="ml-2 font-bold text-xl">Add New Member</span>
          <div class="m-2">
            <div v-if="previewImage" class="flex h-36 mb-4">
              <div>
                <img
                  :src="previewImage"
                  alt="Preview"
                  class="w-36 h-36 object-cover"
                />
              </div>
              <div class="ml-5">
                <div class="text-2xl">John Doe</div>
                <div class="text-sm">Welde Mikael</div>
                <button
                  class="text-end mt-12 bg-yellow-500 px-3 py-1 rounded-sm text-white font-bold"
                >
                  Medium
                </button>
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              @change="handleImageUpload"
              class="mb-4"
            />
            <div class="grid grid-cols-3">
              <div class="">
                <div class="">firstname:</div>
                <input
                  type="text"
                  placeholder="first name"
                  class="outline-none py-1 border border-solod border-blue-500 rounded-sm px-2 xl:w-52 2xl:w-72"
                />
              </div>
              <div class="">
                <div>father name:</div>
                <input
                  type="text"
                  placeholder="father name"
                  class="outline-none py-1 border border-solod border-blue-500 rounded-sm px-2 xl:w-52 2xl:w-72"
                />
              </div>
              <div>
                <div class="">grand father name:</div>
                <input
                  type="text"
                  placeholder="grand father name"
                  class="outline-none py-1 border border-solod border-blue-500 rounded-sm px-2 xl:w-52 2xl:w-72"
                />
              </div>
            </div>
            <div class="w-full mt-8">
              <div>
                <div class="">
                  <label for="grand father name">Name of Christianity:</label>
                </div>
                <input
                  type="text"
                  placeholder="name"
                  class="outline-none py-1 border border-solod border-blue-500 rounded-sm px-2 xl:w-52 2xl:w-72"
                />
              </div>
            </div>
            <div class="flex w-full mt-8">
              <div>
                <div class="">Gender:</div>
                <input
                  type="text"
                  placeholder="gender"
                  class="outline-none py-1 border border-solod border-blue-500 rounded-sm px-2 xl:w-52 2xl:w-72"
                />
              </div>
              <div class="ml-5">
                <div class="">
                  <label for="grand father name">Age:</label>
                </div>
                <input
                  type="number"
                  placeholder="age"
                  class="outline-none py-1 border border-solod border-blue-500 rounded-sm px-2 w-60"
                />
              </div>
            </div>
            <div class="grid grid-cols-3 mt-8">
              <div class="">
                <div class="">Zone:</div>
                <input
                  type="text"
                  placeholder="zone"
                  class="outline-none py-1 border border-solod border-blue-500 rounded-sm px-2 xl:w-52 2xl:w-72"
                />
              </div>
              <div class="">
                <div>Wereda:</div>
                <input
                  type="text"
                  placeholder="wereda"
                  class="outline-none py-1 border border-solod border-blue-500 rounded-sm px-2 xl:w-52 2xl:w-72"
                />
              </div>
              <div>
                <div class="">Keble:</div>
                <input
                  type="number"
                  placeholder="keble"
                  class="outline-none py-1 border border-solod border-blue-500 rounded-sm px-2 xl:w-52 2xl:w-72"
                />
              </div>
            </div>
            <div class="w-full mt-8">
              <div>
                <div class="">
                  <label for="grand father name">Workplace Place Name:</label>
                </div>
                <input
                  type="text"
                  placeholder="workplace name"
                  class="outline-none py-1 border border-solod border-blue-500 rounded-sm px-2 w-60"
                />
              </div>
            </div>
            <div class="flex mt-8">
              <div>
                <div class="">
                  <label for="first name" class="m-1">Email:</label>
                </div>
                <input
                  type="email"
                  placeholder="email"
                  class="outline-none py-1 border border-solod border-blue-500 rounded-sm px-2 w-60"
                />
              </div>
              <div class="ml-8">
                <div class="">
                  <label for="father name">Phone number:</label>
                </div>
                <input
                  type="tel"
                  placeholder="phone"
                  class="outline-none py-1 border border-solod border-blue-500 rounded-sm px-2 w-60"
                />
              </div>
            </div>
            <div class="flex w-full justify-end mt-8">
              <div class="">
                <button
                  type="reset"
                  class="px-5 py-1 border rounded-md hover:bg-blue-500 hover:text-white font-bold"
                >
                  cancel
                </button>
              </div>
              <div class="ml-3">
                <button
                  type="submit"
                  class="px-5 py-1 border rounded-md hover:bg-blue-500 hover:text-white font-bold"
                >
                  save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- </div> -->
    </div>
    <div class="mt-32 ml-6">
      <v-data-table
        class="overflow-hidden"
        v-model="selected"
        :items="filteredItems"
        item-value="name"
        show-select
      ></v-data-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "MembersPage",
  data() {
    return {
      showForm: false,
      previewImage: null,
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
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.previewImage = URL.createObjectURL(file);
      }
    },
    handleSubmit(event) {
      event.preventDefault();
    },
  },
};
</script>
<style scoped>
#myForm {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  transition: transform 0.5s;
  transform: translateX(100%);
  overflow-y: scroll; /* Add this line */
}
#myForm.show {
  transform: translateX(0%);
}
</style>
