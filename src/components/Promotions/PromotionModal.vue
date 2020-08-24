<template>
  <div v-if="showModal" class="modal-wrapper">
    <div class="modal promotion-detail-wrapper is-visible">
        <section class="modal__body promotion-details-container">
          <i @click="showModal = false" class="close-modal js-close-modal"></i>
          <p>aaaa</p>
        </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'promotion-modal',
  data () {
    return {
      showModal: true
    }
  },
  methods: {
    actShowModal () {
      this.showModal = true
    },
    actHideModal () {
      this.showModal = false
    }
  }
}
</script>

<style scoped>

</style>
