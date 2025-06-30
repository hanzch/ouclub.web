<script>
export default {
  props: {
    videoId: {type: String, required: true}
  },
  data() {
    return {
      youtubeUrl: '',
      sizeStyle: ''
    }
  },
  mounted() {
    this.youtubeUrl = `https://www.youtube.com/embed/${this.videoId}?showinfo=0&controls=0&autoplay=1&mute=1&playsinline=1&loop=1&rel=0&playlist=${this.videoId}`

    const onResizeEvent = () => {
      let container = document.getElementById('youtube-background-banner');
      if (!container) return

      const h = container.clientHeight;
      const w = container.clientWidth;
      if ((w / h) < (4 / 3)) {
        let width = h * 4 / 3;
        this.sizeStyle = `width:${width}px;height:100%;`
      } else {
        let height = w * 3 / 4;
        this.sizeStyle = `width:100%; height:${height}px;`
      }
    }

    onResizeEvent();
    window.addEventListener('resize', onResizeEvent)
  }
}
</script>

<template>
  <div id="youtube-background-banner" class="relative w-full h-full overflow-hidden">
    <div class="relative flex items-center justify-center w-full h-full overflow-hidden">
      <iframe title="Ou Tennis Clud Video" class="absolute pointer-events-none" :style="sizeStyle" :src='youtubeUrl'></iframe>
    </div>
    <div class="absolute top-0 flex items-center justify-center w-full h-full">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>