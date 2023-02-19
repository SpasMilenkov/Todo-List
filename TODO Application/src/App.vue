<script setup>
import Navigation from './components/GenericComponents/NavigationComponent.vue'
import theme from './Sync'
const background = theme.bodyBackground
</script>

<template>
  <div id="content">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<style>
#content {
  width: 100%;
  height: 100%;
  background: v-bind('background');
}
</style>
