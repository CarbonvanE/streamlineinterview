<template>
    <div class="loader-wrapper">
      <h3 class="title is-3">{{ text }}</h3>
    </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    text: {type: String, default: "Loading..."},
  }
}
</script>

<style>
  .loader-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 50px;
  }
</style>
