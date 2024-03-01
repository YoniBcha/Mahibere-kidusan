<template>
  <div class="flex mt-16 h-screen w-full items-center justify-center">
    <form action="#" class="w-80justify-center items-center p-5 shadow-2xl">
      <div class="flex flex-col mb-2">
        <div class="flex justify-center mb-4">
          <img src="@/assets/logo.svg" alt="" />
        </div>
        <div class="flex justify-center">Mahiberer Kidusan</div>
      </div>
      <div class="mb-3">
        <div class="text-lg mb-1">Login to the IMS</div>
        <div class="text-xs">Enter your credentials to login</div>
      </div>
      <div class="mb-3">
        <div>
          <label for="email">Username:</label>
          <input
            type="email"
            class="w-full border border-2 rounded-sm py-1 mt-1 px-2"
            placeholder="enter your username or email"
          />
        </div>
        <div class="flex justify-end text-sm text-blue-700 mt-3">
          Forgot password?
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            class="w-full border border-2 rounded-sm py-1 mt-1 px-2"
            placeholder="enter your password"
          />
        </div>
      </div>
      <div>
        <button class="bg-blue-500 text-white w-full py-1 rounded-sm my-3">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
