<template>
    <nav class="navbar is-link">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <div class="hero">Customer database</div>
            </router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <router-link to="/customers" class="navbar-item">Overview</router-link>
            <router-link to="/add" class="navbar-item">Add customer</router-link>
            <div class="datetime navbar-item">{{ datetime }}</div>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      datetime: new Date().toLocaleString()
    }
  },

  methods: {
    updateDatetime: function() {
      window.setInterval(() => {
        this.datetime = new Date().toLocaleString()
      }, 1000)
    }
  },

  mounted () {
    this.updateDatetime();
  }
}
</script>

<style>
  .datetime {
    opacity: 0.65;
  }
</style>
