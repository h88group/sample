<template>
  <article class="member-account-wrapper">
    <comp-members-left-menu />
    <section class="member__container">
      <profile-nav />
      <section class="member-profile-container">
        <div class="tab-content">
          <div id="change-secure-pin" class="account-password tab-pane active" role="tabpanel">
            changepin
          </div>
        </div>
        <profile-setting />
      </section>
    </section>
    <profile-modal-name ref="profileModalName" />
    <profile-modal-ic ref="profileModalIc" />
    <profile-modal-email ref="profileModalEmail" />
    <profile-modal-phone ref="profileModalPhone" />
  </article>
</template>

<script>
import CompMembersLeftMenu from '../CompMembersLeftMenu'
import ProfileNav from './ProfileNav'
import ProfileSetting from './ProfileSetting'
import ProfileModalName from './ProfileModal/ProfileModalName'
import ProfileModalIc from './ProfileModal/ProfileModalIc'
import ProfileModalEmail from './ProfileModal/ProfileModalEmail'
import ProfileModalPhone from './ProfileModal/ProfileModalPhone'

export default {
  name: 'profile-changepin',
  components: {
    CompMembersLeftMenu,
    ProfileNav,
    ProfileSetting,
    ProfileModalName,
    ProfileModalIc,
    ProfileModalEmail,
    ProfileModalPhone
  },
  data () {
    return {
    }
  },
  methods: {
    showModalName () {
      this.$refs.profileModalName.actShowModal()
    },
    hideModalName () {
      this.$refs.profileModalName.actHideModal()
    },
    showModalIc () {
      this.$refs.profileModalIc.actShowModal()
    },
    hideModalIc () {
      this.$refs.profileModalIc.actHideModal()
    },
    showModalEmail () {
      this.$refs.profileModalEmail.actShowModal()
    },
    hideModalEmail () {
      this.$refs.profileModalEmail.actHideModal()
    },
    showModalPhone () {
      this.$refs.profileModalPhone.actShowModal()
    },
    hideModalPhone () {
      this.$refs.profileModalPhone.actHideModal()
    }
  }
}
</script>

<style scoped>

</style>
