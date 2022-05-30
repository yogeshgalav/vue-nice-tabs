<template>
  <div id="app">
    <VueNiceTabs :initialTab="'Vue'" :tabs="['Navtab1','Navtab2', 'Navtab3', 'Navtab4']" :disableTabs="['Navtab5']"/>
  </div>
</template>


<script>
import  VueNiceTabs  from 'vue-nice-tabs'

export default {
  name: 'App',
  components: {
    VueNiceTabs,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
