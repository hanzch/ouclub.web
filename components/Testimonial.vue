<template>
  <div
    class="bg-[url(~/assets/img/bg4.jpg)] bg-no-repeat bg-cover bg-center ou-section-py"
  >
    <div class="my-8 ou-container">
      <h1 class="text-center section-title mb-8 lg:mb-10 text-[#882214]">
        Hear from Our Happy Parents and Students
      </h1>
      <div class="py-6 lg:py-8">
        <Carousel v-bind="carouselConfig">
          <Slide
            class="all-transition p-3 bg-white rounded-[12px] border shadow-sm hover:shadow-xl"
            v-for="item of testimonials"
            :key="item"
          >
            <div class="flex flex-col p-5 lg:p-8">
              <div
                class="lg:text-[18px] text-[16px]"
                v-html="item.comment"
              ></div>
              <div
                class="mt-5 text-xl font-semibold font-SortsMillGoudy text-site-red"
              >
                {{ item.name }} <br />

                <div class="flex items-center py-1 space-x-1">
                  <img
                    src="~/assets/img/star.svg"
                    alt="star"
                    class="inline-block w-6 h-6"
                  />
                  <img
                    src="~/assets/img/star.svg"
                    alt="star"
                    class="inline-block w-6 h-6"
                  />
                  <img
                    src="~/assets/img/star.svg"
                    alt="star"
                    class="inline-block w-6 h-6"
                  />
                  <img
                    src="~/assets/img/star.svg"
                    alt="star"
                    class="inline-block w-6 h-6"
                  />
                  <img
                    src="~/assets/img/star.svg"
                    alt="star"
                    class="inline-block w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";

const carouselConfig = {
  itemsToShow: 3,
  gap: 30,
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // 400px and up
    400: {
      itemsToShow: 1,
      snapAlign: "start",
    },
    // 500px and up
    768: {
      itemsToShow: 2,
      snapAlign: "start",
    },
    1024: {
      itemsToShow: 3,
      snapAlign: "start",
    },
    1440: {
      itemsToShow: 4,
      snapAlign: "start",
    },
  },
};

const testimonials = ref([
  {
    name: "Sayed Amir",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate doloremque inventore iusto laboriosam quia reiciendis, velit. Amet aut in quis quisquam similique unde, voluptas! Beatae excepturi odio officia sapiente.",
  },
  {
    name: "Sayed Amir",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate doloremque inventore iusto laboriosam quia reiciendis, velit. Amet aut in quis quisquam similique unde, voluptas! Beatae excepturi odio officia sapiente.",
  },
  {
    name: "Sayed Amir",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate doloremque inventore iusto laboriosam quia reiciendis, velit. Amet aut in quis quisquam similique unde, voluptas! Beatae excepturi odio officia sapiente.",
  },
  {
    name: "Sayed Amir",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate doloremque inventore iusto laboriosam quia reiciendis, velit. Amet aut in quis quisquam similique unde, voluptas! Beatae excepturi odio officia sapiente.",
  },
  {
    name: "Sayed Amir",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate doloremque inventore iusto laboriosam quia reiciendis, velit. Amet aut in quis quisquam similique unde, voluptas! Beatae excepturi odio officia sapiente.",
  },
  {
    name: "Steven lee",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate doloremque inventore iusto laboriosam quia reiciendis, velit. Amet aut in quis quisquam similique unde, voluptas! Beatae excepturi odio officia sapiente.",
  },
  {
    name: "Ameirul Hidayat",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate doloremque inventore iusto laboriosam quia reiciendis, velit. Amet aut in quis quisquam similique unde, voluptas! Beatae excepturi odio officia sapiente.",
  },
  {
    name: "Ameirul",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate doloremque inventore iusto laboriosam quia reiciendis, velit. Amet aut in quis quisquam similique unde, voluptas! Beatae excepturi odio officia sapiente.",
  },
  {
    name: "Ameirul",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate doloremque inventore iusto laboriosam quia reiciendis, velit. Amet aut in quis quisquam similique unde, voluptas! Beatae excepturi odio officia sapiente.",
  },
]);
</script>
