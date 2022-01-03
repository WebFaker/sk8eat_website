<template>
  <div class="home">
    <div class="home-header">
      <img class="home-header-logo" alt="Sk8Eat! logo" src="../assets/logo.png">
      <h1 class="home-header-title">SK8<br>EAT!</h1>
    </div>
    <div style="margin-top: 90vh;" class="home-section">
      <h2 class="home-section-title">
        DISCOVER AN ALTERNATIVE WORLD.
        <br>
        <span class="home-section-subtitle">
          Wanna discover a parallel universe?
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
        Your goal is to get to your food on time.
        A timer is activated as soon as you start the game.
        If you manage to get your kebab before the timer runs out, you've won.
        But be careful, you also have a limited life system that can make you lose.
        Bonuses are available to go faster or to recover lives.
      </p>
    </div>
    <div class="home-section">
      <h2 class="home-section-title">
        ARE YOU READY TO GO?
        <br>
        <span class="home-section-subtitle">
          Get and play the game now!
        </span>
      </h2>
      <div class="home-section-download-button-container">
        <button class="home-section-download-button" @click="getDownloadLink(false)">
          <mdicon name="apple" />
          Download for Mac
        </button>
        <button class="home-section-download-button" @click="getDownloadLink(true)">
          <mdicon name="microsoft-windows" />
          Download for Windows
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
  },
  methods: {
    async getDownloadLink(isWindows) {
      // Create a reference to the file we want to download
      const storage = getStorage();
      let gameRef = null;
      let label = null;
      if (isWindows) {
        gameRef = ref(storage, 'game/Sk8Eat.zip');
        label = 'Sk8Eat.zip';
      } else {
        gameRef = ref(storage, 'game/Sk8Eat.dmg');
        label = 'Sk8Eat.dmg';
      }
      // Get the download URL
      getDownloadURL(gameRef)
      // Insert url into an <img> tag to "download"
        .then((url) => {
          console.log(url);
          const response = axios.get(url, { responseType: 'blob' });
          const blob = new Blob([response.data]);
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = label;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch((error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object-not-found':
              // File doesn't exist
              break;
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;

              // ...

            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              break;

            default:
              console.log('oops');
          }
        });
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/vars.scss';

.home {
  &-header {
    z-index: -1;
    position: fixed;
    padding-top: 100px;
    top: 0;
    left: 0;
    right: 0;
    height: 95vh;
    background: linear-gradient(rgba(227, 103, 84, 255), rgba(223, 72, 119, 255));

    &-title {
    position: absolute;
    top: 10%;
    left: 5%;
    font-size: 20em;
    color: white;
  }

    &-logo {
      filter: drop-shadow(5px 5px 0 white)
              drop-shadow(-4px -4px 0 white);
      z-index: 2;
      position: absolute;
      top: 10%;
      right: 5%;
      animation: logo-float 5s linear infinite;
    }
  }

  &-section {
    background: rgba(var(--bg-color), 255);
    padding: 50px 5%;

    &-download-button {
      display: inline-block;
      border: none;
      padding: 1rem 2rem;
      margin: 0;
      text-decoration: none;
      background: rgb(74, 145, 203);
      color: #ffffff;
      font-family: sans-serif;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      transition: background 250ms ease-in-out,
                  transform 150ms ease;
                  -webkit-appearance: none;
                  -moz-appearance: none;

      &-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
    }

    .home-section-download-button:hover,
    .home-section-download-button:focus {
        background: $blue;
    }

    .home-section-download-button:active {
        transform: scale(0.95);
    }

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
  height: 300px;
  background: url('https://i.imgur.com/lwufNlL.png'), linear-gradient(rgba(227, 103, 84, 0), rgba(227, 103, 84, 255), rgba(223, 72, 119, 255), rgba(79, 44, 63, 255), rgba(79, 44, 63, 255), rgba(79, 44, 63, 255));
  background-repeat: repeat-x;
  background-size: 50%;
  animation: scroll-anim 15s linear infinite;

  &-skater {
    position: absolute;
    height: 150px;
    bottom: 5px;
    left: 10%;
    animation: skater-moves 15s linear infinite;
  }
}

// Parallax

.home-section-scrolling-container::before {
  content: "";
  width: 100%;
  height: 300px;
  position: absolute;
  background: url('https://i.imgur.com/ZgabRKW.png') repeat-x;
  background-size: 50%;
  animation: scroll-anim 10s linear infinite;
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
</style>
