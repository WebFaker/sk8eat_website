<template>
<div class="download-button-container">
  <div class="download-button-item">
    <button class="download-button" @click="getDownloadLink(true)">
      <mdicon name="microsoft-windows" />
      {{ $t('message.DOWNLOAD_BUTTON_WIN') }} (.exe)
    </button>
    <a class="download-button-link" href="https://anonfiles.com/T2eaW146x3/Sk8Eat_zip" target="_blank" rel="noopener noreferrer">
      {{ $t('message.DOWNLOAD_BUTTON_EXT') }}
    </a>
  </div>
  <button class="download-button" @click="getDownloadLink(false)">
    <mdicon name="apple" />
    {{ $t('message.DOWNLOAD_BUTTON_MAC') }} (.dmg)
  </button>
</div>
</template>

<script>
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export default {
  methods: {
    async getDownloadLink(isWindows) {
      // Create a reference to the file we want to download
      const storage = getStorage();
      let gameRef = null;
      if (isWindows) {
        gameRef = ref(storage, 'game/Sk8Eat_installer.exe');
      } else {
        gameRef = ref(storage, 'game/Sk8Eat.dmg');
      }
      // Get the download URL
      getDownloadURL(gameRef)
      // Insert url into an <img> tag to "download"
        .then((url) => {
          window.open(url);
        })
        .catch((error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object-not-found':
              // File doesn't exist
              alert('This file doesn\'t exist.');
              break;
            case 'storage/unauthorized':
              alert('You don\'t have the right permissions to access this file.');
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              alert('The user canceled the upload.');
              // User canceled the upload
              break;

              // ...

            case 'storage/unknown':
              alert('An error occured, please try again later.');
              // Unknown error occurred, inspect the server response
              break;

            default:
              alert('An error occured, please try again later.');
          }
        });
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/vars.scss';

.download-button {
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
    justify-content: flex-start;
    flex-direction: column;

    @media (min-width: $screen-md-min) {
      align-items: flex-start;
      justify-content: space-evenly;
      flex-direction: row;
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
  }

  &-link {
    transition: 0.3s ease;
    color: var(--font-color);
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 50px;
    @media (min-width: $screen-md-min) {
      margin-bottom: 0;
    }

    &:hover {
      color: $blue;
    }
  }

  > a {
    color: white;
    text-decoration: none;
  }
}

.download-button:hover,
.download-button:focus {
    background: $blue;
}

.download-button:active {
    transform: scale(0.95);
}
</style>
