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
      <div v-if="previewImage" class="flex h-36 mb-10">
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
        class="mb-10"
      />
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field label="Firstname" variant="outlined"></v-text-field>
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
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Name of Christianity"
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field label="Gender" variant="outlined"> </v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field label="Age" variant="outlined"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field label="Zone" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field label="Woreda" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field label="Kebele" variant="outlined"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Name of workplace"
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="Phone number" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Enter your mail address"
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <div class="flex w-full justify-end mt-5 mb-8 pr-4">
          <div class="">
            <button
              type="reset"
              class="px-8 py-2 border rounded-md hover:bg-blue-500 hover:text-white font-bold"
            >
              cancel
            </button>
          </div>
          <div class="ml-3">
            <button
              type="submit"
              class="px-8 py-2 border rounded-md bg-blue-400 hover:bg-blue-600 text-white font-bold"
            >
              save
            </button>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-form>
</template>

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
