<template>
    <nav class="navbar is-link">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
              <icon name="database"></icon>
              <div>Customer database</div>
            </router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <router-link to="/customers" class="navbar-item">
              <icon name="users"></icon>Overview
            </router-link>
            <router-link to="/add" class="navbar-item">
              <icon name="plus"></icon>Add customer
            </router-link>
            <div class="datetime navbar-item">{{ datetime }}</div>
          </div>
        </div>
    </nav>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'Navbar',
    components: { Icon },
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
  svg {
    width: 25px;
  }

  .datetime {
    opacity: 0.65;
    width: 175px;
  }
</style>
