<template>
  <div>
    <headers />
    <banner />
    <nuxt/>
  </div>
</template>
<script>
import Headers from "@/components/common/Header"
import Banner from "@/components/common/Banner"
export default {
  components : {
    Headers,
    Banner
  }
  
}
</script>
