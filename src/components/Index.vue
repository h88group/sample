<template>
  <section>
    <comp-index-slider />
    <comp-index-features />
  </section>
</template>

<script>
import CompIndexSlider from './CompIndexSlider'
import CompIndexFeatures from './CompIndexFeatures'

export default {
  name: 'Index',
  data () {
    return {}
  },
  components: {
    CompIndexFeatures,
    CompIndexSlider
  }
}
</script>

<style>
</style>
