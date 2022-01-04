<template>
  <div :style="mainStyles" class="app">
    <div :class="`navigation${scrollPosition > scrollReference ? ' navigation-expanded' : ''}`">
      <router-link to="/">{{ $t('message.HOME') }}</router-link> |
      <router-link to="/about">{{ $t('message.ABOUT') }}</router-link> |
      <router-link to="/download">{{ $t('message.DOWNLOAD') }}</router-link>
      <label class="toggle-container">
        <input v-model="isDarkMode" class='toggle-checkbox' type='checkbox'>
        <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
            <mdicon class="sun-icon"  name="white-balance-sunny" />
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
            <mdicon class="moon-icon"  name="moon-waning-crescent" />
          </div>
        </div>
      </label>
    </div>
    <div style="min-height: 100vh;">
      <router-view />
    </div>
    <div class="footer">
      <p>
        ©2022{{ new Date().getFullYear() === 2022 ? '' : '-' + new Date().getFullYear() }}
        Gemuprod, {{ $t('message.ALL_RIGHTS_RESERVED') }}
      </p>
      <div class="footer-items">
        <div class="footer-items-links">
          <router-link to="/">{{ $t('message.HOME') }}</router-link>
          <router-link to="/about">{{ $t('message.ABOUT') }}</router-link>
          <router-link to="/download">{{ $t('message.DOWNLOAD') }}</router-link>
        </div>
        <p class="footer-items-lang" @click="changeLang">{{ lang === 'en' ? '🇺🇸' : '🇫🇷' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
      scrollPosition: null,
      scrollReference: null,
      lang: 'en',
    };
  },
  computed: {
    mainStyles() {
      if (this.isDarkMode) {
        return {
          '--bg-color': '55, 65, 81',
          '--font-color': 'white',
        };
      }
      return {
        '--bg-color': '255, 255, 255',
        '--font-color': 'black',
      };
    },
  },
  watch: {
    isDarkMode(newValue) {
      localStorage.setItem('darkMode', newValue);
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.scrollReference = window.innerHeight / 2;
    },
    changeLang() {
      if (localStorage.getItem('lang') && localStorage.getItem('lang') === 'en') {
        localStorage.setItem('lang', 'fr');
        this.lang = 'fr';
      } else {
        localStorage.setItem('lang', 'en');
        this.lang = 'en';
      }
      window.location.reload();
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    // Checking Dark mode
    if (localStorage.getItem('darkMode')) {
      const isDarkModeString = JSON.parse(localStorage.getItem('darkMode'));
      this.isDarkMode = isDarkModeString;
    }
    // Checking language
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
    } else if (navigator.language.split('-')[0] === 'en' || navigator.language.split('-')[0] === 'fr') {
      const lang = navigator.language.split('-')[0];
      this.lang = lang;
    }
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll);
  },
};
</script>

<style lang="scss">
@import '@/styles/base.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.app {
  transition: 0.3s ease;
  margin-top: 50px;
  font-family: 'Roboto';
  min-height: 100vh;
  color: var(--font-color);
}

.navigation {
  transition: 0.3s ease;
  border-radius: 25px;
  padding: 0 5%;
  margin: 50px 0;
  background: rgba(var(--bg-color), 255);
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: calc(100% - 10%);
  height: 50px;
  @media (min-width: $screen-md-min) {
    margin: 50px 7%;
    width: calc(100% - 24%);
  }

  &-expanded {
    margin: 0;
    @media (min-width: $screen-md-min) {
      margin: 0 7%;
    }
  }

  a {
    font-weight: bold;
    color: var(--font-color);
    text-decoration: none;

    &.router-link-exact-active {
      display: flex;
      align-items: center;
      color: $blue;

      &:before {
        content: '';
        background-image: url('https://i.ibb.co/7Xh0g7D/Canette.png');
        background-size: 30px 30px;
        display: inline-block;
        width: 30px;
        height: 30px;
      }

      &:after {
        content: '';
        background-image: url('https://i.ibb.co/7Xh0g7D/Canette.png');
        background-size: 30px 30px;
        display: inline-block;
        width: 30px;
        height: 30px;
      }
    }
  }
}

.toggle-container {
  transform: scale(25%);
  -webkit-transform:scale(0.25, 0.25);
  position: fixed;
  transform-origin: bottom left;
  bottom: 10px;
  left: 10px;
}

.toggle-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.toggle-slot {
  position: relative;
  height: 10em;
  width: 20em;
  border-radius: 100px;
  background-color: white;
  transition: background-color 250ms;
}

.toggle-checkbox:checked ~ .toggle-slot {
  background-color: #374151;
}

.toggle-button {
  transform: translate(11.75em, 1.75em);
  position: absolute;
  height: 6.5em;
  width: 6.5em;
  border-radius: 50%;
  background-color: #ffeccf;
  box-shadow: inset 0px 0px 0px 0.75em #ffbb52;
  transition:
    background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .toggle-button {
  background-color: #485367;
  box-shadow: inset 0px 0px 0px 0.75em white;
  transform: translate(1.75em, 1.75em);
}

.sun-icon {
  color: #ffbb52;

  & svg {
    width: 100%;
    height: 100%;
  }
}

.sun-icon-wrapper {
  position: absolute;
  height: 6em;
  width: 6em;
  opacity: 1;
  transform: translate(2em, 2em) rotate(15deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
  opacity: 0;
  transform: translate(3em, 2em) rotate(0deg);
}

.moon-icon {
  color: white;

  & svg {
    width: 100%;
    height: 100%;
  }
}

.moon-icon-wrapper {
  position: absolute;
  height: 6em;
  width: 6em;
  opacity: 0;
  transform: translate(11em, 2em) rotate(0deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2.5,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
  opacity: 1;
  transform: translate(12em, 2em) rotate(-15deg);
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 25px;
  margin: 50px 0 100px;
  padding: 0 5%;
  width: calc(100% - 14%);
  background: rgba(var(--bg-color), 255);
  height: 60px;

  @media (min-width: $screen-md-min) {
    width: calc(100% - 24%);
    margin: 50px 7% 100px;
  }

  &-items {
    display: flex;
    align-items: center;
    &-lang {
      font-size: 24px;
      cursor: pointer;
      margin-left: 15px;
    }
    &-links {
      display: none;
      align-items: center;
      @media (min-width: $screen-md-min) {
        display: flex;
      }
    }

    a {
      margin-left: 10px;
      font-weight: bold;
      color: var(--font-color);
      text-decoration: none;

      &.router-link-exact-active {
        display: flex;
        align-items: center;
        color: $blue;

        &:before {
          content: '';
          background-image: url('https://i.ibb.co/7Xh0g7D/Canette.png');
          background-size: 30px 30px;
          display: inline-block;
          width: 30px;
          height: 30px;
        }

        &:after {
          content: '';
          background-image: url('https://i.ibb.co/7Xh0g7D/Canette.png');
          background-size: 30px 30px;
          display: inline-block;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>
