<template>
  <div
    class="fixed top-0 left-0 right-0 z-50 all-transition"
    :class="!isOnTop ? ' bg-white shadow-xl' : 'bg-transparent'"
  >
    <div class="relative ou-container">
      <nav
        class="flex items-center justify-between all-transition"
        :class="!isOnTop ? '' : 'py-4'"
      >
        <div>
          <nuxt-link
            to="/"
            class="inline-block px-4 py-3 bg-white rounded-full lg:px-8 lg:py-4"
          >
            <img
              src="@/assets/img/logo.png"
              alt="OU Tennis Club"
              class="transition-all duration-150"
              :class="!isOnTop ? 'h-10 md:h-[70px]' : 'h-12 md:h-[80px]'"
            />
          </nuxt-link>
        </div>
        <div
          class="hidden space-x-8 lg:flex all-transition"
          :class="!isOnTop ? 'text-site-red' : 'text-white'"
        >
          <div class="flex items-center space-x-2 font-bold">
            <svg
              class="fill-current size-6 lg:size-10 all-transition"
              title="Call"
              fill="current"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"
              />
            </svg>            
            <a
              class="all-transition text-[15px] xl:text-[22px] hover:underline hover:text-site-red"
              href="tel:+6582187528"
              >+65 8218 7528</a
            >
          </div>
          <a
            class="font-bold text-[17px] lg:text-[22px] flex space-x-2 items-center"
            href="https://wa.me/6582187528?text=I%20would%20like%20to%20enquire"
          >
            <svg
              class="fill-current size-6 lg:size-10 all-transition"
              title="WhatsApp"
              fill="currentColor"
              viewBox="0 0 308 308"
            >
              <g id="XMLID_468_">
                <path
                  id="XMLID_469_"
                  d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
                      c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
                      c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
                      c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
                      c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
                      c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
                      c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
                      c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
                      c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
                      C233.168,179.508,230.845,178.393,227.904,176.981z"
                />
                <path
                  id="XMLID_470_"
                  d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
                      c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
                      c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
                      M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
                      l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
                      c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
                      C276.546,215.678,222.799,268.994,156.734,268.994z"
                />
              </g>
            </svg>
            <span
              class="all-transition text-[15px] xl:text-[22px] hover:underline hover:text-site-red"
              >+65 8218 7528</span
            >
          </a>
          <div class="flex items-center space-x-2 font-bold">
            <svg
              class="fill-current all-transition size-6 lg:size-10"
              title="WeChat"
              fill="currentColor"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.385 16.995c-0.807-1.839-2.344-3.297-4.12-4.198-3.141-1.589-7.042-1.583-10.172 0.042-2.177 1.115-3.99 3.115-4.505 5.547-0.427 1.792-0.047 3.719 0.906 5.281 1.417 2.349 3.974 3.849 6.63 4.328 1.922 0.391 3.911 0.161 5.781-0.375 1.125 0.432 2.125 1.135 3.214 1.661-0.281-0.943-0.583-1.875-0.906-2.807 1.224-0.865 2.328-1.948 2.995-3.302 0.99-1.885 1.052-4.229 0.177-6.177zM18.156 4.375c-3.328-1.87-7.469-2.151-11.047-0.859-2.354 0.849-4.479 2.422-5.797 4.563-1.193 1.932-1.641 4.344-1.063 6.552 0.573 2.453 2.281 4.51 4.349 5.885-0.401 1.135-0.781 2.266-1.141 3.406 1.297-0.677 2.599-1.391 3.901-2.078 1.557 0.5 3.219 0.745 4.88 0.688-0.443-1.255-0.542-2.62-0.339-3.932 0.297-1.828 1.297-3.5 2.656-4.74 2.302-2.156 5.563-3.063 8.661-2.844-0.583-2.844-2.583-5.25-5.099-6.641zM20.469 17.693c-0.281 0.87-1.542 1.13-2.156 0.469-0.672-0.609-0.411-1.891 0.474-2.161 0.979-0.411 2.109 0.714 1.682 1.693zM26.859 17.818c-0.339 0.781-1.521 0.964-2.099 0.359-0.281-0.255-0.359-0.641-0.458-0.974 0.135-0.609 0.557-1.245 1.24-1.271 0.938-0.13 1.781 1.031 1.297 1.885zM17.318 9.214c0.010 1.281-1.698 2.078-2.656 1.208-1-0.714-0.714-2.448 0.453-2.807 1.047-0.417 2.286 0.458 2.203 1.583zM9.24 9.536c-0.229 1.115-1.719 1.651-2.594 0.906-1.010-0.714-0.729-2.484 0.458-2.844 1.167-0.448 2.49 0.734 2.135 1.938z"
              />
            </svg>
            <span class="all-transition text-[15px] xl:text-[22px]"
              >Outennisclub</span
            >
          </div>
          <a
            href="https://login.outennis.club/"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-2 font-bold text-[17px] lg:text-[20px] rounded-full border-2 transition-all duration-300"
            :class="!isOnTop ? 'border-site-red text-site-red hover:bg-site-red hover:text-white' : 'border-white text-white hover:bg-white hover:text-site-red'"
          >
            LOGIN
          </a>
        </div>
        <div
          class="flex space-x-4 lg:hidden"
          :class="!isOnTop ? 'text-site-red' : 'text-white'"
        >
          <button
            @click.stop="showTalkLinks"
            class="px-4 py-1 border-[3px] font-bold rounded-full"
            :class="!isOnTop ? 'border-site-red' : 'border-white'"
          >
            Talk to Us
          </button>
          <a
            href="https://login.outennis.club/"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-1 border-[3px] font-bold rounded-full"
            :class="!isOnTop ? 'border-site-red' : 'border-white'"
          >
            LOGIN
          </a>
        </div>
      </nav>
      <div class="relative">
        <div
          id="talkToUsPopup"
          v-show="isShowTalkLinks"
          class="absolute right-0 z-50 origin-bottom"
          :class="!isOnTop ? '-top-2' : '-top-6'"
        >
          <div class="flex justify-end pr-8">
            <div
              class="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-gray-100"
            ></div>
          </div>
          <div class="p-6 bg-gray-100 divide-y rounded-md shadow-2xl">
            <div class="pb-2">
              <svg
                class="inline-block fill-current size-5 lg:size-6 text-site-red"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"
                />
              </svg>
              &nbsp;<a
                class="all-transition hover:underline hover:text-site-red"
                href="tel:+6582187528"
                >+65 8218 7528</a
              >
            </div>
            <div class="py-2">
              <svg
                class="inline-block fill-current size-5 lg:size-6 text-site-red"
                fill="currentColor"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 308 308"
                xml:space="preserve"
              >
                <g id="XMLID_468_">
                  <path
                    id="XMLID_469_"
                    d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
                    c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
                    c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
                    c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
                    c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
                    c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
                    c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
                    c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
                    c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
                    C233.168,179.508,230.845,178.393,227.904,176.981z"
                  />
                  <path
                    id="XMLID_470_"
                    d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
                    c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
                    c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
                    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
                    l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
                    c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
                    C276.546,215.678,222.799,268.994,156.734,268.994z"
                  />
                </g>
              </svg>
              &nbsp;<a
                class="all-transition hover:underline hover:text-site-red"
                href="https://wa.me/6582187528?text=I%20would%20like%20to%20enquire"
                >+65 8218 7528</a
              >
            </div>
            <div class="pt-2">
              <svg
                class="inline-block fill-current size-5 lg:size-6 text-site-red"
                fill="currentColor"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M300 255c0 24.854-20.147 45-45 45H45c-24.854 0-45-20.146-45-45V45C0 20.147 20.147 0 45 0h210c24.853 0 45 20.147 45 45v210z"
                />
                <g fill="#FFF">
                  <path
                    d="M200.803 111.88c-24.213 1.265-45.268 8.605-62.362 25.188-17.271 16.754-25.154 37.284-23 62.734-9.464-1.172-18.084-2.462-26.753-3.192-2.994-.252-6.547.106-9.083 1.537-8.418 4.75-16.487 10.113-26.053 16.093 1.755-7.938 2.891-14.89 4.902-21.575 1.479-4.914.794-7.648-3.733-10.85-29.066-20.521-41.318-51.231-32.149-82.85 8.483-29.25 29.315-46.989 57.621-56.236 38.636-12.62 82.055.253 105.547 30.927 8.485 11.08 13.688 23.516 15.063 38.224zm-111.437-9.852c.223-5.783-4.788-10.993-10.74-11.167-6.094-.179-11.106 4.478-11.284 10.483-.18 6.086 4.475 10.963 10.613 11.119 6.085.154 11.186-4.509 11.411-10.435zm58.141-11.171c-5.974.11-11.022 5.198-10.916 11.004.109 6.018 5.061 10.726 11.204 10.652 6.159-.074 10.83-4.832 10.771-10.977-.05-6.032-4.98-10.79-11.059-10.679z"
                  />
                  <path
                    d="M255.201 262.83c-7.667-3.414-14.7-8.536-22.188-9.318-7.459-.779-15.3 3.524-23.104 4.322-23.771 2.432-45.067-4.193-62.627-20.432-33.397-30.891-28.625-78.254 10.014-103.568 34.341-22.498 84.704-14.998 108.916 16.219 21.129 27.24 18.646 63.4-7.148 86.284-7.464 6.623-10.149 12.073-5.36 20.804.883 1.612.984 3.653 1.497 5.689zm-87.274-84.499c4.881.005 8.9-3.815 9.085-8.636.195-5.104-3.91-9.385-9.021-9.406-5.061-.023-9.3 4.318-9.123 9.346.166 4.804 4.213 8.69 9.059 8.696zm56.261-18.022c-4.735-.033-8.76 3.844-8.953 8.629-.205 5.117 3.772 9.319 8.836 9.332 4.898.017 8.769-3.688 8.946-8.562.19-5.129-3.789-9.364-8.829-9.399z"
                  />
                </g>
              </svg>

              &nbsp;<span>Outennisclub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const isOnTop = ref(true);

const ScrollHandler = () => {
  isOnTop.value = window.scrollY <= 50;
};

onMounted(() => {
  window.addEventListener("scroll", ScrollHandler);

  const talkToUsPopup = document.querySelector("#talkToUsPopup");
  talkToUsPopup.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", (e) => {
    isShowTalkLinks.value = false;
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", ScrollHandler);
});

const isShowTalkLinks = ref(false);
const showTalkLinks = () => {
  isShowTalkLinks.value = !isShowTalkLinks.value;
};
</script>

<style scoped></style>
