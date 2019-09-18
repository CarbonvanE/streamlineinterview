<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'


export default {
  components: {Navbar}
}
</script>

<style>

</style>
