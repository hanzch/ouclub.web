<template>
  <div class="w-full aspect-[9.3/16] md:aspect-[16/9] overflow-hidden">
    <youtube-background-banner video-iid="b3UOgd5BkhA" video-id="tbxDNlzl9Ag">
      <div class="my-auto text-center text-white lg:w-10/12">
        <div class="my-auto lg:mb-0 lg:mt-0">
          <div
            class="text-white font-Cormorant text-[36px] mb:text-[46px] lg:text-[56px]"
          >
            Welcome To
          </div>
          <div
            class="text-white text-[44px] mb:text-[46px] lg:text-[55px] xl:text-[60px] 2xl:text-[68px] mb-2 leading-[1.35] lg:leading-none font-marcellus"
          >
            OU Tennis Club
          </div>
          <div
            class="text-white text-[18px] mb:text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[33px] font-light font-opensans"
          >
            World-Class Coaching
          </div>
        </div>
        <div
          class="block gap-2 px-8 mt-16 mb:px-0 lg:gap-4 lg:space-x-4 md:mt-10"
        >
          <button
            @click="toEnquireForm"
            class="rounded-full all-transition px-10 py-5 leading-none font-semibold uppercase bg-site-red text-white hover:bg-[#d05946] hover:ring-4 md:text-[18px] lg:text-[20px]"
          >
            <div
              class="inline-flex items-center justify-center px-5 space-x-3 group"
            >
              <img
                src="~/assets/img/tennis-ball-green.svg"
                alt="tennis ball icon"
                class="inline-block w-5 h-5 group-hover:animate-spin animate-spin"
              />
              <span>Join us now!</span>
            </div>
          </button>
        </div>
      </div>
    </youtube-background-banner>
  </div>
</template>
<script setup>
const toEnquireForm = () => {
  const element = document.getElementById("enquire");
  const headerOffset = 100; // Adjust this value based on your header height
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
</script>
