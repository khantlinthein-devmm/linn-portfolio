<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="container-home">
    <img src="../../public/photo/linn-photo.JPG" alt="" />

    <div class="absolute mt-[8pc] ml-[10pc] inset-1">
      <h1 class="ml-5 font-semibold font-Montserrat">
        <span class="text-[10pc] font-amsterdam tracking-widest text-gray-600">
          Linn
        </span>
      </h1>
    </div>

    <div class="summary font-redhat ">
      <h1
        class="flex items-center justify-center text-[2.5pc]  p-5 tracking-widest font-redhat "
      >
        Summary
      </h1>
    </div>

    <div>
        <p class=" pl-5 text-[28px] font-redhat ">
          Versatile and dedicated script writer and actor with 5 years of
          experience in film, television and movie series. Proven ability to
          develop original content, create dynamic characters and deliver
          engaging dialogue. Adept at collaborating with directors, producers
          and co-writers to bring stories to life on stage and screen. Skilled
          in project management,creative direction and collaborative teamwork.
        </p>
      </div>

      <div class="grid grid-cols-2 mt-[5pc]">
        <div>
          <img
            src="/photo/contact-2.jpg"
            class="w-[30pc] rounded-full ml-[10pc]"
          />
        </div>
        <div>
          <h2 class="text-[5pc] font-redhat">Get In Touch </h2>

          <div class="">
            <section class="space-y-10 ">
              <div class="flex mt-10 ">
                <Icon
                  icon="el:phone-alt"
                  class="w-[3pc] h-[3pc]"
                  style= " color: #0000a0 " 
                />
                <h2 class="mt-2 ml-5 text-3xl font-redhat">
                  +66 84 006 2958 | +95 9402607449
                </h2>
              </div>

              <div class="flex">
                <Icon icon="logos:google-gmail" class="w-[3pc] h-[3pc]" />
                <a href= "mailto:linpyaebo1@gmail.com" target='_blank' class="mt-2 ml-5 text-3xl underline text-violet-800 font-redhat">
                  linpyaebo1@gmail.com
                </a>
              </div>

              <div class="flex">
              <Icon icon="logos:youtube-icon" class='w-[3pc]  h-[3pc]' />
                <a href='https://youtube.com/@linpyaebo?si=GJoeo6_MEpYN7haH' target='_blank' class="mt-2 ml-5 text-3xl font-redhat text-violet-800 ">
                  @LinPyaeBo
                </a>
              </div>
              <div class="flex">
              <Icon icon="fontisto:line" class='w-[3pc]  h-[3pc]'  style= "color: #00ff00" />
                <h2 class="mt-2 ml-5 text-3xl font-redhat">
                  @Linn_BrianGladicoze
                </h2>
              </div>
              <div class="flex">
              <Icon icon="logos:facebook" class='w-[3pc]  h-[3pc]' />
                <a href='https://www.facebook.com/lin.pyaebo?mibextid=LQQJ4d' target='_blank' class="mt-2 ml-5 text-3xl underline font-redhat text-violet-800">
                  lin.pyaebo
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
  </div>
</template>
