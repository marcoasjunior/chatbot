<template>
  <div class="home">
    <Navbar />
    <Chat />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Chat from '@/components/Chat.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Chat
  }
}
</script>
