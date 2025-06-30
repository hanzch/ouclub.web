<template>
  <StickyBar />
  <site-header />

  <!--  About-->
  <section class="bg-[#edf1e8]" id="about">
    <div class="ou-container ou-section-py">
      <div class="my-8">
        <div class="w-full">
          <img
            src="~/assets/img/coach.jpg"
            alt="XuanShuo Ou Profile"
            class="lg:float-left w-full lg:mr-8 xl:mr-12 2xl:mr-16 mb-8 lg:max-w-[500px] rounded-[12px]"
          />

          <h2 class="mb-8 text-center section-title lg:text-left">
            <span class="text-[#283a00]">Coach </span>
            <span class="text-[#882214]">Xuan Shuo OU</span>
          </h2>
          <div class="mb-6 text-[18px] text-site-red xl:text-[20px] leading-8">
            XuanShuo Ou is a professional tennis coach and former WTA-ranked
            player with over a decade of experience in coaching and competing at
            the highest levels. Sponsored by Wilson, she has successfully
            trained national-level athletes, including WTA-ranked players and
            ITF titleholders.
          </div>

          <h3 class="mt-8 mb-6 font-semibold text-site-red">
            Coaching Highlights
          </h3>
          <ul class="space-y-2 list-disc list-inside marker:text-site-red">
            <li>Head Coach of Xinguo Tennis Club since 2012.</li>
            <li>
              Coach for the China National Tennis Team (Junior Division) since
              2014.
            </li>
            <li>
              Proven track record of producing international champions,
              including Grand Slam participants and ITF title winners.
            </li>
          </ul>

          <h3 class="mt-8 mb-6 font-semibold text-site-red">Player Career</h3>
          <ul class="list-inside space-y-2 list-disc marker:text-[#76261a]">
            <li>Career-high rankings: ITF Junior 197, WTA 940.</li>
            <li>
              Multiple ITF Doubles Titles, including W10 $10,000 Shenzhen and
              Bangladesh International Junior Championships.
            </li>
          </ul>
        </div>
        <div class="clear-both"></div>
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <div class="">
            <h3 class="mt-8 mb-6 font-semibold text-site-red">
              Achievements as a Coach
            </h3>
            <ul class="ml-5 space-y-2 list-disc marker:text-[#76261a]">
              <li>
                Xinyu Jiang: WTA Doubles Ranking 31, multiple ITF Titles, and
                Grand Slam achievements.
              </li>
              <li>
                Meiling Wang: W75 Champion, career-high WTA Singles Ranking 417.
              </li>
              <li>
                Numerous other students with ITF titles and national-level
                recognition.
              </li>
            </ul>
          </div>
          <div class="">
            <h3 class="mt-8 mb-6 font-semibold text-site-red">
              Education&Certification
            </h3>
            <ul class="ml-5 space-y-2 list-disc marker:text-[#76261a]">
              <li>USPTA Certified Professional</li>
              <li>
                Bachelor’s Degree in Sports Coaching, Shenyang Sport University.
              </li>
              <li>
                Certified First Grade Sportsman（Femal）, National Level Athlete
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--  Our Tennis Programmes-->
  <section
    class="bg-[url(~/assets/img/bg1.png)] bg-no-repeat bg-cover bg-center"
    id="programmes"
  >
    <div class="ou-container ou-section-py">
      <div class="my-8">
        <h1 class="mb-8 text-center text-white lg:mb-10 section-title">
          Our Tennis Programmes
        </h1>
        <p class="mb-8 text-lg text-center text-white">
          Private and Small group lessons are provided for all ages. Call us to
          find out more!
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div
            class="bg-gradient-to-br from-yellow-50 to-white p-8 lg:p-10 rounded-[14px] shadow-lg border"
          >
            <h2
              class="mb-6 ld:mb-8 text-[clamp(1.125rem,1.036rem+0.238vw,1.25rem)] font-bold uppercase text-site-green"
            >
              1v1 Private Lessons
            </h2>
            <div class="mb-6 space-y-3 list-disc ld:mb-8">
              <div class="flex items-center space-x-2.5">
                <img src="~/assets/img/tick.svg" class="size-6" alt="tick icon" />
                <span>Children’s Beginner Course</span>
              </div>
              <div class="flex items-center space-x-2.5">
                <img src="~/assets/img/tick.svg" class="size-6" alt="tick icon" />
                <span>Children’s Advanced Course</span>
              </div>
              <div class="flex items-center space-x-2.5">
                <img src="~/assets/img/tick.svg" class="size-6" alt="tick icon" />
                <span>Adult Beginner Course</span>
              </div>
              <div class="flex items-center space-x-2.5">
                <img src="~/assets/img/tick.svg" class="size-6" alt="tick icon" />
                <span>Adult Advanced Course</span>
              </div>
            </div>

            <p class="mb-6 text-sm italic">
              Our 1v1 private lessons are tailored to your individual needs and
              goals. Whether you’re a beginner looking to learn the basics or an
              advanced player striving for excellence, our world-class coaches
              will help you achieve your full potential.
            </p>
          </div>
          <div
            class="bg-gradient-to-br from-yellow-50 to-white p-8 lg:p-10 rounded-[14px] shadow-lg border"
          >
            <h2
              class="mb-6 ld:mb-8 text-[clamp(1.125rem,1.036rem+0.238vw,1.25rem)] font-bold uppercase text-site-green"
            >
              1v2 Semi-Private Lessons
            </h2>
            <div class="mb-6 space-y-3 list-disc ld:mb-8">
              <div class="flex items-center space-x-2.5">
                <img src="~/assets/img/tick.svg" class="size-6" alt="tick icon" />
                <span>Children’s Beginner Course</span>
              </div>
              <div class="flex items-center space-x-2.5">
                <img src="~/assets/img/tick.svg" class="size-6" alt="tick icon" />
                <span>Children’s Advanced Course</span>
              </div>
              <div class="flex items-center space-x-2.5">
                <img src="~/assets/img/tick.svg" class="size-6" alt="tick icon" />
                <span>Adult Beginner Course</span>
              </div>
              <div class="flex items-center space-x-2.5">
                <img src="~/assets/img/tick.svg" class="size-6" alt="tick icon" />
                <span>Adult Advanced Course</span>
              </div>
            </div>
            <p class="mb-6 text-sm italic">
              Our 1v2 semi-private lessons are perfect for couples, siblings, or
              friends who want to learn tennis together. With a maximum of 2
              players per group, you’ll receive personalized attention and
              coaching to help you improve your game.
            </p>
          </div>
          <div
            class="bg-gradient-to-br from-yellow-50 to-white p-8 lg:p-10 rounded-[14px] shadow-lg border"
          >
            <h2
              class="mb-6 ld:mb-8 text-[clamp(1.125rem,1.036rem+0.238vw,1.25rem)] font-bold uppercase text-site-green"
            >
              Small Group Lessons
            </h2>
            <div class="mb-6 space-y-3 list-disc ld:mb-8">
              <div class="flex items-center space-x-2.5">
                <img src="~/assets/img/tick.svg" class="size-6" alt="tick icon" />
                <span>Children’s Beginner Course</span>
              </div>
              <div class="flex items-center space-x-2.5">
                <img src="~/assets/img/tick.svg" class="size-6" alt="tick icon" />
                <span>Children’s Advanced Course</span>
              </div>
              <div class="flex items-center space-x-2.5">
                <img src="~/assets/img/tick.svg" class="size-6" alt="tick icon" />
                <span>Adult Beginner Course</span>
              </div>
              <div class="flex items-center space-x-2.5">
                <img src="~/assets/img/tick.svg" class="size-6" alt="tick icon" />
                <span>Adult Advanced Course</span>
              </div>
            </div>
            <p class="mb-6 text-sm italic">
              Our small group lessons are perfect for friends, family members,
              or colleagues who want to learn tennis together. With a maximum of
              4 players per group, you’ll receive personalized attention and
              coaching to help you improve your game.
            </p>
          </div>
        </div>

        <div class="py-8 mt-6 space-y-8 text-center lg:space-x-10">
          <button class="ou-button group min-w-[292px] w-full sm:w-[445px]">
            <ou-button>
              <a
                href="https://wa.me/6582187528?text=I%20would%20like%20to%20enquire"
                >WhatsApp Us</a
              >
            </ou-button>
          </button>
          <button
            class="ou-button group min-w-[292px] w-full sm:w-[445px]"
            @click="toEnquireForm"
          >
            <ou-button>Enquire Now</ou-button>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!--Why OU Tennis lub？-->
  <section
    class="bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50 ou-section-py"
    id="why-ou-tennis-club"
  >
    <div class="my-8 ou-container">
      <h1 class="mb-8 text-center section-title text-site-red lg:mb-10">
        Why <span class="text-site-green">OU Tennis Club?</span>
      </h1>
      <div class="mx-auto mb-6 text-lg text-center lg:w-3/5">
        At Ou Tennis Club, we are committed to providing the ultimate tennis
        experience, whether you’re a beginner learning the basics or a seasoned
        player striving for excellence.
      </div>

      <div
        class="grid grid-cols-2 px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-5 lg:gap-16 [&>*:nth-last-child(2n+1)]:border-r [&>*:nth-last-child(n+2)]:border-b lg:[&>*]:border-none"
      >
        <div class="py-5 lg:py-8 group">
          <div class="flex justify-center">
            <img
              src="~/assets/img/world-class-coaching.svg"
              alt="World-Class Coaching"
              lazy
              class="all-transition size-16 hover:rotate-6 group-hover:rotate-6 md:size-18 lg:size-20 xl:size-24"
            />
          </div>
          <p
            class="px-5 mt-5 font-medium text-center md:mt-6 lg:mt-8 lg:text-lg"
          >
            World-Class Coaching
          </p>
        </div>
        <div class="py-5 lg:py-8 group">
          <div class="flex justify-center">
            <img
              src="~/assets/img/comprehensive-programs.svg"
              alt="Comprehensive Programs"
              lazy
              class="all-transition size-16 hover:rotate-6 group-hover:rotate-6 md:size-18 lg:size-20 xl:size-24"
            />
          </div>
          <p
            class="px-5 mt-5 font-medium text-center md:mt-6 lg:mt-8 lg:text-lg"
          >
            Comprehensive Programs
          </p>
        </div>

        <div class="py-5 lg:py-8 group">
          <div class="flex justify-center">
            <img
              src="~/assets/img/proven-track-record.svg"
              alt="Proven Track Record"
              lazy
              class="all-transition size-16 hover:rotate-6 group-hover:rotate-6 md:size-18 lg:size-20 xl:size-24"
            />
          </div>
          <p
            class="px-5 mt-5 font-medium text-center md:mt-6 lg:mt-8 lg:text-lg"
          >
            Proven Track Record
          </p>
        </div>
        <div class="py-5 lg:py-8 group">
          <div class="flex justify-center">
            <img
              src="~/assets/img/state-of-the-art-facilities.svg"
              alt="State-of-the-Art Facilities"
              lazy
              class="all-transition size-16 hover:rotate-6 group-hover:rotate-6 md:size-18 lg:size-20 xl:size-24"
            />
          </div>
          <p
            class="px-5 mt-5 font-medium text-center md:mt-6 lg:mt-8 lg:text-lg"
          >
            State-of-the-Art Facilities
          </p>
        </div>
        <div class="py-5 lg:py-8 group">
          <div class="flex justify-center">
            <img
              src="~/assets/img/personalized-attention-and-communication.svg"
              alt="Personalized Attention and Communication"
              lazy
              class="all-transition size-16 hover:rotate-6 group-hover:rotate-6 md:size-18 lg:size-20 xl:size-24"
            />
          </div>
          <p
            class="px-5 mt-5 font-medium text-center md:mt-6 lg:mt-8 lg:text-lg"
          >
            Personalized Attention and Communication
          </p>
        </div>
      </div>
    </div>
  </section>

  <!--  Join Our Team-->
  <section class="bg-[#E9EEF1] ou-section-py" id="join-our-team">
    <div class="my-8 ou-container">
      <h1 class="text-center section-title mb-8 lg:mb-10 text-[#882214]">
        Join Our Team!
      </h1>

      <p class="mb-10 text-center lg:mb-14 lg:text-lg">
        Ou Tennis Club is looking for passionate and dedicated individuals to
        join our growing team. If you are enthusiastic about tennis and helping
        others achieve their full potential, we would love to hear from you! We
        are currently hiring for the following positions:
      </p>

      <div
        class="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3 md:gap-8"
      >
        <div
          class="border p-8 rounded-[18px] border-site-red/50 aspect-[4/3] bg-white shadow-lg"
        >
          <h3
            class="text-site-red text-[clamp(1.125rem,1.036rem+0.238vw,1.25rem)] font-SortsMillGoudy font-bold mb-6"
          >
            Tennis Coach (Full-Time / Part-Time)
          </h3>
          <p class="mb-6">Requirements:</p>
          <ul class="ml-5 space-y-2 list-disc">
            <li>USPTA certification or equivalent</li>
            <li>Strong communication and coaching skills</li>
            <li>
              Experience working with all skill levels, from beginners to
              advanced players
            </li>
          </ul>
        </div>
        <div
          class="border p-8 rounded-[18px] border-site-red/50 aspect-[4/3] bg-white shadow-lg"
        >
          <h3
            class="text-site-red text-[clamp(1.125rem,1.036rem+0.238vw,1.25rem)] font-SortsMillGoudy font-bold mb-6"
          >
            Assistant Coach (Full-Time / Part-Time)
          </h3>
          <p class="mb-6">Requirements:</p>
          <ul class="ml-5 space-y-2 list-disc">
            <li>Passion for tennis with good communication skills</li>
            <li>
              Ability to assist the head coach in conducting lessons and
              managing players
            </li>
            <li>Interest in coaching both junior and adult players</li>
          </ul>
        </div>
        <div
          class="border p-8 rounded-[18px] border-site-red/50 aspect-[4/3] bg-white shadow-lg"
        >
          <h3
            class="text-site-red text-[clamp(1.125rem,1.036rem+0.238vw,1.25rem)] font-SortsMillGoudy font-bold mb-6"
          >
            Fitness Coach(Full-Time / Part-Time)
          </h3>
          <p class="mb-6">Requirements:</p>
          <ul class="ml-5 space-y-2 list-disc">
            <li>Certification in fitness training or related qualifications</li>
            <li>
              Ability to design and implement fitness programs tailored to
              tennis players’ needs
            </li>
            <li>Strong communication and motivational skills</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-site-red ou-section-py">
    <div class="my-4 ou-container">
      <div
        class="text-center md:w-4/5 mx-auto font-SortsMillGoudy text-[20px] lg:text-[26px] xl:text-[30px] leading-1 text-white"
      >
        If you are passionate about tennis and want to be part of a dynamic and
        growing team, please send your resume and cover letter to email address
        or apply through our website.
      </div>

      <div class="pt-8 text-center">
        <button class="ou-button group" @click="toEnquireForm">
          <ou-button>Apply Now</ou-button>
        </button>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <!-- <Testimonial /> -->

  <!-- what we offer -->
  <!-- <section class="bg-white ou-section-py" id="what-we-offer">
    <div class="my-8 ou-container">
      <h1 class="text-center section-title mb-8 lg:mb-10 text-[#882214]">
        What We Offer
      </h1>
      <Products></Products>
    </div>
  </section> -->

  <!-- enquire form -->
  <section
    class="w-full bg-[url(~/assets/img/ground.png)] bg-no-repeat bg-cover bg-center"
    id="enquire"
  >
    <div class="ou-section-py">
      <div class="my-8 ou-container">
        <h1 class="mb-8 text-center text-white lg:mb-10 section-title">
          Speak With Us Today
        </h1>
        <div
          class="lg:shadow bg-white flex flex-col lg:flex-row space-8 rounded-[12px]"
        >
          <div class="w-full lg:w-1/2 md:rounded-l-[12px] px-8 py-10">
            <div class="text-center lg:text-[20px] text-site-red mb-6">
              Kindly share with us your query below and we will get back to you
              soon, or call us at               
              <a
                class="all-transition hover:underline hover:text-site-red"
                href="tel:+6582187528"
                >8218 7528</a
              >.
            </div>
            <enquire-form-api />
          </div>
          <div
            class="hidden md:block md:rounded-r-[12px] w-full md:w-1/2 lg:bg-[url(~/assets/img/speak-to-us.png)] md:bg-no-repeat md:bg-center md:bg-cover"
          >
            <img
              src="~/assets/img/speak-to-us.png"
              alt="Speak to Us"
              class="md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <SiteFooter/>
  <ScrollTopArrow/>
  <WechatIcon/>
  
</template>
<script setup>
const currentUrl = "https://www.outennisclub.com.sg";
const metaTitle = "OU Tennis Club";
const metaDescription = "Welcome to OU Tennis Club in Singapore. We offer world-class tennis coaching for players of all ages and skill levels. Join us today!";
const ogImage = "https://www.outennisclub.com.sg/_nuxt/coach.DVSg8Qjt.jpg";

useHead({
  title: metaTitle,
  meta: [
    {name: "description", content: metaDescription},

    // og
    {property: 'og:url', content: currentUrl},
    {property: 'og:type', content: 'website'},
    {property: 'og:title', content: metaTitle},
    {property: 'og:description', content: metaDescription},
    {property: 'og:image', content: ogImage},

  ],
  link: [
    {rel: 'canonical', href: currentUrl},
    {rel: 'alternate', hreflang: 'en-sg', href: currentUrl},
    {rel: 'alternate', hreflang: 'x-default', href: currentUrl}
  ]
});

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

<style scoped></style>
