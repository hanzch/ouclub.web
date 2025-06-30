<template>
  <div
    class="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <div
      class="border rounded-t-lg shadow-sm hover:-translate-y-1 hover:shadow-lg all-transition"
      v-for="product of products"
      :key="product.name"
    >
      <img
        @click="viewDetail(product)"
        class="w-full mx-auto rounded-t-lg"
        :src="product.img"
        :alt="product.name"
      />
      <div class="flex items-center justify-center w-full py-4 space-x-2">
        <template v-for="color of product.colors" :key="color">
          <svg
            class="ring-[1px] ring-offset-1 rounded-full shadow-sm size-5 aspect-square"
            :class="color"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" fill="currentColor" />
          </svg>
        </template>
      </div>
      <div class="px-5 py-2 text-base font-semibold text-center lg:text-lg">
        <button @click="viewDetail(product)">{{ product.name }}</button>
      </div>
    </div>
  </div>

  <Modal :isOpen="isModalOpen" @close="isModalOpen = false">
    <div class="bg-white">
      <div class="flex flex-col lg:flex-row lg:space-x-6">
        <div>
          <img class="w-[300px] border rounded-lg" :src="currentProduct.img" />
        </div>

        <div class="">
          <h2 class="text-lg text-site-red">{{ currentProduct.name }}</h2>
          <div class="flex items-center w-full py-4 space-x-2">
            <span>Color:</span>
            <template v-for="color of currentProduct.colors" :key="color">
              <svg
                class="ring-[1px] ring-offset-1 rounded-full shadow-sm size-5 aspect-square"
                :class="color"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" fill="currentColor" />
              </svg>
            </template>
          </div>
          <div class="">Price: {{ currentProduct.price }}</div>
        </div>
      </div>

      <p class="py-10" v-html="currentProduct.description"></p>
    </div>
  </Modal>
</template>

<script setup>
import p1 from "@/assets/img/products/product-01.jpg";
import p2 from "@/assets/img/products/product-02.jpg";
import p3 from "@/assets/img/products/product-03.jpg";
import p4 from "@/assets/img/products/product-04.jpg";
import p5 from "@/assets/img/products/product-05.jpg";
import p6 from "@/assets/img/products/product-06.jpg";
import p7 from "@/assets/img/products/product-07.jpg";
import p8 from "@/assets/img/products/product-08.jpg";

const products = ref([
  {
    name: "Product Name 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: p1,
    colors: ["text-black"],
    price: "S$25.00",
  },
  {
    name: "Product Name 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: p2,
    colors: ["text-green-500", "text-red-500"],
    price: "S$25.00",
  },
  {
    name: "Product Name 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: p3,
    colors: ["text-green-500", "text-red-500"],
    price: "S$25.00",
  },
  {
    name: "Product Name 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: p4,
    colors: ["text-green-500", "text-red-500"],
    price: "S$25.00",
  },
  {
    name: "Product Name 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: p5,
    colors: ["text-black", "text-white"],
    price: "S$25.00",
  },
  {
    name: "Product Name 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: p6,
    colors: ["text-orange-500"],
    price: "S$25.00",
  },
  {
    name: "Product Name 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: p7,
    colors: ["text-blue-600"],
    price: "S$25.00",
  },
  {
    name: "Product Name 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: p8,
    colors: [
      "text-green-500",
      "text-red-500",
      "text-blue-500",
      "text-pink-500",
    ],
    price: "S$25.00",
  },
]);

const isModalOpen = ref(false);
const currentProduct = ref(null);
const viewDetail = (product) => {
  currentProduct.value = product;
  isModalOpen.value = true;
};
</script>
