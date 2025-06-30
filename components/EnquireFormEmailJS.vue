<template>
  <div class="w-full">
    <form @submit.prevent="submit" class="grid grid-cols-1 gap-5 lg:gap-8">

      <div class="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2">
        <!-- Parent Name -->
        <div>
          <div class="relative">
            <input v-model="formData.parent_name" id='fields-parent_name' type="text" name="parent's-name" class="peer" placeholder=" " required/>
            <label class="label" for="fields-parent_name">Parent's Name *</label>
          </div>
        </div>
        <!-- Contact -->
        <div>
          <div class="relative">
            <input v-model="formData.contact_no" id='fields-contact' type="text" name="contact-no" class="peer" placeholder=" " required/>
            <label class="label" for="fields-contact">Contact No. *</label>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2">
        <!-- Kids Name -->
        <div>
          <div class="relative">
            <input v-model="formData.kid_name" id='fields-kids_name' type="text" name="kid's-name" class="peer" placeholder=" "/>
            <label class="label" for="fields-kids_name">Kid's Name</label>
          </div>
        </div>
        <!-- Age -->
        <div>
          <div class="relative">
            <input v-model="formData.age" id='fields-age' type="number" name="age" class="peer" placeholder=" "/>
            <label class="label" for="fields-age">Age</label>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2">
        <!-- Preferred Day -->
        <div>
          <div class="relative">
            <input v-model="formData.preferred_day" type="date" name="preferred_day" id='fields-preferred_day' class="peer" placeholder=" ">
            <label class="label" for="fields-preferred_day">Preferred Day</label>
          </div>         
        </div>
        <!-- Time -->
        <div>
          <div class="relative">
            <input v-model="formData.time" type="time" name="time" id='fields-time' class="peer" placeholder=" ">
            <label class="label" for="fields-time">Time </label>
          </div>
        </div>
      </div>

      <!-- Email -->
      <div>
          <div class="relative">
            <input v-model="formData.from_email" id='fields-email' type="email" name="email" class="peer" placeholder=" " required/>
            <label class="label" for="fields-email">Email *</label>
          </div>
        </div>
      <!-- Message -->
      <div>
        <div class="relative">
          <textarea v-model="formData.message" id='fields-message' rows="3" class="peer" name="message" placeholder=" "></textarea>
          <label class="label" for="fields-message">Message</label>
        </div>
      </div>

      <!-- 提交状态提示 -->
      <div v-if="submitStatus" :class="{'text-green-600': submitStatus === 'success', 'text-red-600': submitStatus === 'error'}">
        {{ submitMessage }}
      </div>
      
      <div class="text-left">
        <button type="submit" class="ou-button group" :disabled="isSubmitting">
          <ou-button>{{ isSubmitting ? '提交中...' : 'Submit' }}</ou-button>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// EmailJS 配置 - 请替换为您的实际值
const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const formData = ref({
  parent_name: '',
  contact_no: '',
  kid_name: '',
  age: '',
  preferred_day: '',
  time: '',
  from_email: '',
  message: '',
  to_email: 'your-receive-email@example.com' // 接收邮件的邮箱
})

const isSubmitting = ref(false)
const submitStatus = ref('')
const submitMessage = ref('')

onMounted(() => {
  // 动态加载 EmailJS SDK
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
  script.onload = () => {
    window.emailjs.init(PUBLIC_KEY)
  }
  document.head.appendChild(script)
})

const submit = async () => {
  if (!window.emailjs) {
    submitStatus.value = 'error'
    submitMessage.value = '邮件服务加载失败，请刷新页面重试'
    return
  }

  isSubmitting.value = true
  submitStatus.value = ''
  submitMessage.value = ''
  
  try {
    const response = await window.emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData.value
    )
    
    if (response.status === 200) {
      submitStatus.value = 'success'
      submitMessage.value = '提交成功！我们会尽快与您联系。'
      
      // 重置表单
      formData.value = {
        parent_name: '',
        contact_no: '',
        kid_name: '',
        age: '',
        preferred_day: '',
        time: '',
        from_email: '',
        message: '',
        to_email: 'your-receive-email@example.com'
      }
      
      // 3秒后跳转到感谢页面
      setTimeout(() => {
        navigateTo('/thank-you')
      }, 2000)
    }
  } catch (error) {
    console.error('EmailJS error:', error)
    submitStatus.value = 'error'
    submitMessage.value = '提交失败，请稍后重试或直接联系我们。'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
input, textarea, select {
  @apply block px-2.5 pb-2.5 pt-4 w-full bg-[#F8F4EA] rounded-[6px] border-[1px] border-[#BFB39C] appearance-none focus:outline-none focus:ring-0 focus:border-[#ac9872];
}

.label {
  @apply absolute duration-200 transform -translate-y-4 scale-75 top-1 z-[9] origin-[0] bg-[#F8F4EA] px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[26px] peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1;
}

.am-button.disabled {
  @apply bg-slate-50 text-slate-500;
}

.error input,
.error textarea {
  @apply text-red-400 placeholder-red-400 border-red-400;
}

.error label {
  @apply text-red-400;
}

.error .error-message {
  @apply text-sm text-red-400;
}
</style>