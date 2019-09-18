<template>
    <nav class="navbar is-primary">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://kiwaoesterbaai.com">
                <div class="hero">Customer database</div>
            </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
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
