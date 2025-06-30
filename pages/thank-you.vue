<template>
  <section class="pt-10 lg:py-20">

    
    <div class="ou-container">

      <div class="flex justify-center lg:pb-[50px] pb-[30px]">
        <img
              src="~/assets/img/logo.png"
              alt="OU Tennis Club"
              class="h-12 md:h-[80px]"
            />
      </div>

      <div class="bg-white border border-[#eaeaea] rounded-lg lg:px-[45px] px-[25px] lg:py-[50px] py-[30px]">
        <div class="font-displaypro font-semibold xl:text-[34px] lg:text-[30px] text-[26px] lg:pb-[30px] pb-[20px] leading-[2.2rem] lg:leading-[2.4rem] animate text-center">
          Message Sent Successfully!
        </div>
        <p class="lg:pb-[30px] pb-[20px] text-center">
          Thank you for your kind interest in OU Tennis Club.<br>We will get back to you as soon as possible.
        </p>
        <div class="py-10 text-center">
          <nuxt-link to="/" class="ou-button">
            <span>Back to Home Page</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>

</template>