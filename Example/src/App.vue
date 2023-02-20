<template>
  <div id="app">
    <VueNiceTabs :initialTab="'Vue'" :tabs="['Navtab1','Navtab2', 'Navtab3', 'Navtab4']" :disableTabs="['Navtab5']"/>
  </div>
</template>


<script setup>
import  VueNiceTabs  from 'vue-nice-tabs'
import 'vue-nice-tabs/src/index.css';

</script>
