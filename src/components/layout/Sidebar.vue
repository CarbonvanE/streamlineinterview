<template>
    <aside class="menu is-pulled-left">
      <ul class="menu-list">
          <li v-for="route in routes" :key="route.to">
              <router-link :to="route.to">{{route.name}}</router-link>
          </li>
      </ul>
    </aside>
</template>

<script>

export default {
  data () {
    return {
      routes: [
        {
          name: 'Welcome',
          to: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
    @import "~bulma/sass/utilities/initial-variables";
    @import "~bulma/sass/utilities/derived-variables";

    .router-link-exact-active {
        background: $family-secondary;
    }
</style>
