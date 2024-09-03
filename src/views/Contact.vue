<template>
  <div class="grid grid-cols-2 mt-4">
    <div class="ml-[15pc] my-20">
      <img
        src="/photo/contact.jpg"
        alt=""
        class="w-[30pc] object-cover rounded-md"
      />
    </div>

    <div class="my-20">
      <div class="flex">
        <div class="">
          <h1 class="text-[50px]  font-redhat ml-[5pc]">
            Contact Me
          </h1>
        </div>
        
      </div>

      <div class="mt-5">
        <label class="text-2xl font-redhat" htmlFor="">Name</label> <br />
        <input
          type="text"
          placeholder="Name"
          class="border border-black rounded-md font-redhat w-[30pc] h-[3pc] p-4 text-xl outline-none"
        />
      </div>
      <div class="mt-5">
        <label class="text-2xl font-redhat" htmlFor="">Email</label> <br />
        <input
          type="email"
          placeholder="Email"
          class="border-black border rounded-md font-redhat w-[30pc] h-[3pc] p-4 text-xl outline-none"
        />
      </div>
      <div class="mt-5">
        <label class="text-2xl font-redhat" htmlFor=""
          >Leave us your messages...</label
        >
        <br />
        <textarea
          placeholder="Tell me something..."
          name=""
          id=""
          class="w-[30pc] border h-[15pc] font-redhat p-4 text-xl rounded-md outline-none border-black"
        ></textarea>
      </div>
      <div class="mt-5">
        <button
          class="border w-[30pc] h-[3pc] rounded-md text-xl bg-green-500 text-white"
        >
          <a href="https://tiktok.com" target="_blank">Submit</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
