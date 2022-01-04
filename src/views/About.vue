<template>
<div>
  <Header title="ABOUT THE GAME" />
  <div class="home">
    <div style="margin-top: 90vh;" class="home-section">
      <h2 class="home-section-title">
        {{ $t('message.ABOUT_TITLE_1') }}
      </h2>
      <p class="home-section-text about-section-text">
        {{ $t('message.ABOUT_TEXT_1') }}
      </p>
    </div>
    <div class="home-section">
      <h2 class="home-section-title">
        {{ $t('message.ABOUT_TITLE_2') }}
      </h2>
      <p class="home-section-text about-section-text">
        {{ $t('message.ABOUT_TEXT_2') }}
      </p>
    </div>
    <div class="home-section">
      <h2 class="home-section-title">
        {{ $t('message.ABOUT_TITLE_3') }}
      </h2>
      <p class="home-section-text about-section-text">
        {{ $t('message.ABOUT_TEXT_3') }}
      </p>
    </div>
    <div class="home-section">
      <h2 class="home-section-title">
        {{ $t('message.ABOUT_TITLE_4') }}
      </h2>
      <p class="home-section-text about-section-text">
        {{ $t('message.ABOUT_TEXT_4') }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'About',
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.about-section-text {
  white-space: pre-line;
}
</style>
