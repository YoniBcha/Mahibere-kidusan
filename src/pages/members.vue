<template>
  <MainNav />
  <div class="mt-20">
    <v-data-table
      :headers="headers"
      :items="plants"
      density="compact"
      item-key="name"
    ></v-data-table>
  </div>
</template>

<script>
import MainNav from "@/components/mainNav.vue";

export default {
  name: "MenmbersPage",
  components: { MainNav },
  data() {
    return {
      headers: [
        { title: "Plant", align: "start", sortable: false, key: "name" },
        { title: "Light", align: "end", key: "light" },
        { title: "Height", align: "end", key: "height" },
        { title: "Pet Friendly", align: "end", key: "petFriendly" },
        { title: "Price ($)", align: "end", key: "price" },
        { title: "Price ($)", align: "end", key: "price" },
      ],
      plants: [
        {
          name: "Fern",
          light: "Low",
          height: "20cm",
          petFriendly: "Yes",
          price: 20,
        },
        {
          name: "Snake Plant",
          light: "Low",
          height: "50cm",
          petFriendly: "No",
          price: 35,
        },
        {
          name: "Fern",
          light: "Low",
          height: "20cm",
          petFriendly: "Yes",
          price: 20,
        },
        {
          name: "Snake Plant",
          light: "Low",
          height: "50cm",
          petFriendly: "No",
          price: 35,
        },
        // Add more plant data objects here
      ],
    };
  },
};
</script>
