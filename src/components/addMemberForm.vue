<template>
  <v-form @submit="handleSubmit" class="">
    <v-container>
      <div class="">
        <button
          class="left-0 top-0 px-3 py-1 rounded-sm hover:bg-blue-500 hover:text-white font-bold text-xl border border-black mb-7"
          @click="toggleForm"
        >
          X
        </button>
        <span class="ml-10 font-bold text-xl">Add New Member</span>
      </div>
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
        v-if="previewImage === null"
        type="file"
        accept="image/*"
        @change="handleImageUpload"
        class="mb-4"
      />
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            class="bg-whi"
            label="Firstname"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field label="Lastname" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            label="Grandfather name"
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<!-- <template>
  <form @submit="handleSubmit">
    <button
      class="left-0 m-2 px-3 py-1 rounded-sm hover:bg-blue-500 hover:text-white font-bold text-xl border border-black mb-10"
      @click="toggleForm"
    >
      X
    </button>
    <span class="ml-2 font-bold text-xl">Add New Member</span>
    <div class="ml-5">
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
          <v-text-field
            label="Your landing page"
            hint="www.example.com/page"
            persistent-hint
            variant="outlined"
          ></v-text-field>
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
      <div class="flex w-full justify-end mt-8 mb-5 pr-10">
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
            class="px-5 py-1 border rounded-md bg-blue-400 hover:bg-blue-600 text-white font-bold"
          >
            save
          </button>
        </div>
      </div>
    </div>
  </form>
</template> -->

<script>
export default {
  name: "AddMemberForm",
  data() {
    return { previewImage: null };
  },
  methods: {
    toggleForm() {
      this.$emit("toggle-form");
    },
    handleSubmit(event) {
      event.preventDefault();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.previewImage = URL.createObjectURL(file);
      }
    },
  },
};
</script>
