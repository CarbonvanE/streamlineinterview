<template>
  <div>
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/layout/Sidebar'
import Navbar from './components/layout/Navbar'


export default {
  components: {Navbar, Sidebar}
}
</script>

<style>

</style>
