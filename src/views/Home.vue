<template>
  <div class="home">
    <Header />
    <div style="margin-top: 90vh;" class="home-section">
      <h2 class="home-section-title">
        {{ $t('message.HOME_TITLE') }}
        <br>
        <span class="home-section-subtitle">
          {{ $t('message.HOME_SUBTITLE') }}
        </span>
      </h2>
      <div class="home-section-scrolling-container">
        <img
          class="home-section-scrolling-container-skater"
          src="../assets/img/IMG_1916.gif"
          alt=""
        >
      </div>
      <p class="home-section-text">
        {{ $t('message.ABOUT_TEXT_2') }}
      </p>
    </div>
    <div class="home-section">
      <h2 class="home-section-title">
        {{ $t('message.HOME_DOWNLOAD_TITLE') }}
        <br>
        <span class="home-section-subtitle">
          {{ $t('message.HOME_DOWNLOAD_SUBTITLE') }}
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
// @ is an alias to /src
import Header from '@/components/Header.vue';
import DownloadButtons from '@/components/DownloadButtons.vue';

export default {
  name: 'Home',
  components: {
    Header,
    DownloadButtons,
  },
};
</script>

<style lang="scss">
@import '@/styles/vars.scss';

.home {
  border-radius: 25px;
  background: rgba(var(--bg-color), 255);

  @media (min-width: $screen-md-min) {
    margin: 0 7%;
  }

  &-section {
    border-radius: 25px;
    padding: 50px 5%;

    &-title {
      position: relative;
      text-align: center;
      margin-bottom: 50px;
    }

    &-subtitle {
      font-size: 0.5em;
      color: $blue;
      text-align: center;
      font-weight: bold;
    }

    &-text {
      font-weight: bold;
      text-align: justify;
      margin-top: 25px;
    }
  }
}

.home-section-scrolling-container {
  position: relative;
  width: 100%;
  height: 100px;
  background: url('https://i.imgur.com/lwufNlL.png'), linear-gradient(rgba(227, 103, 84, 0), rgba(227, 103, 84, 255), rgba(79, 44, 63, 255), rgba(79, 44, 63, 255));
  background-repeat: repeat-x;
  background-size: 50%;
  animation: scroll-anim 15s linear infinite;

  @media (min-width: $screen-sm-min) {
    height: 150px;
  }

  @media (min-width: $screen-md-min) {
    height: 300px;
  }

  @media (min-width: $screen-xl-min) {
    height: 500px;
  }

  &-skater {
    position: absolute;
    height: 50px;
    bottom: 5px;
    left: 10%;
    animation: skater-moves 15s linear infinite;

    @media (min-width: $screen-sm-min) {
      height: 100px;
    }

    @media (min-width: $screen-md-min) {
      height: 150px;
    }

    @media (min-width: $screen-xl-min) {
      height: 200px;
    }
  }
}

// Parallax

.home-section-scrolling-container::before {
  content: "";
  width: 100%;
  height: 100px;
  position: absolute;
  background: url('https://i.imgur.com/ZgabRKW.png') repeat-x;
  background-size: 50%;
  animation: scroll-anim 10s linear infinite;

  @media (min-width: $screen-sm-min) {
    height: 150px;
  }

  @media (min-width: $screen-md-min) {
    height: 300px;
  }

  @media (min-width: $screen-xl-min) {
    height: 500px;
  }
}

// .home-section-scrolling-container::after {
//   content: "";
//   width: 100%;
//   height: 32.6vw;
//   position: absolute;
//   background: url('https://i.imgur.com/ZgabRKW.png') repeat-x;
//   background-size: 50%;
//   animation: scroll-anim 5s linear infinite;
// }

@keyframes scroll-anim {
  100% {
    background-position: -100% 0;
  }
}

@keyframes skater-moves {
  50% {
    left: 30%
  }
  100% {
    left: 10%;
  }
}

@keyframes logo-float {
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}

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
