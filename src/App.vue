<template>
  <div>
    <navbar></navbar>
    <div class="main-container container">
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
  .main-container {
    padding-top: 30px;
  }
</style>
