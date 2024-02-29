<template>
  <header class="w-full">
    <div class="fixed top-0 left-0 w-full h-16 z-10 bg-gray-100">
      <div class="flex flex-nowrap mx-auto h-full border-b border-solid px-8">
        <div class="flex items-center h-full">
          <img src="@/assets/logo.svg" alt="" srcset="" />
        </div>
        <nav class="h-full ml-8">
          <ul class="flex h-full p-0 m-0 list-none">
            <li class="h-full">
              <NuxtLink
                to="/"
                class="flex items-center h-full py-2.5"
                >Dashboard</NuxtLink
              >
            </li>
            <li
              class="h-full ml-9"
              v-for="menuItem in menuItems"
              :key="menuItem.name"
            >
              <NuxtLink
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.name }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <input
            type="text"
            class="border border-solid w-full px-4 py-1 rounded-md"
            placeholder="Search"
          />
          <div class="bg-green-500 p-5 rounded-full ml-4"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: "Members",
          url: "/members",
        },
        {
          name: "Class",
          url: "/class",
        },
        {
          name: "Woreda",
          url: "/woreda",
        },
        {
          name: "Monthly Payment",
          url: "/monthlyPayment",
        },
   
      ],
    };
  },
};
</script>
