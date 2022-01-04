<template>
  <div class="home">
    <Header :title="$t('message.DOWNLOAD_PAGE')" />
    <div style="margin-top: 90vh;" class="home-section">
      <h2 class="home-section-title">
        {{ $t('message.DOWNLOAD_TITLE') }}
        <br>
        <span class="home-section-subtitle">
          {{ $t('message.DOWNLOAD_SUBTITLE') }}
        </span>
      </h2>
      <DownloadButtons />
    </div>
    <div class="home-section discord-section">
      <h2 class="home-section-title">
        {{ $t('message.HOME_DISCORD_TITLE') }}
        <br>
        <span class="home-section-subtitle">
          {{ $t('message.HOME_DISCORD_SUBTITLE') }}
        </span>
      </h2>
      <button class="download-button discord-section-button">
        <a href="https://discord.gg/Q6XTZpgngd" target="_blank">
          <mdicon name="discord" />
          {{ $t('message.HOME_DISCORD_BUTTON') }}
        </a>
      </button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import DownloadButtons from '@/components/DownloadButtons.vue';

export default {
  name: 'Download',
  components: {
    Header,
    DownloadButtons,
  },

};
</script>

<style lang="scss">
.discord-section {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-button > a {
    color: white;
    text-decoration: none;
  }
}
</style>
