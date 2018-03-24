<template>
<div>
<h3>New quote</h3>
<button type="button" name="button" @click="counter++">Increase counter</button>
<p>{{counter}}</p>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      counter: 0
    };
  },
  activated() {
    console.log('Activated');
  },
  deactivated() {
    console.log('Deactivated');
  }
}
</script>

<style>

</style>
