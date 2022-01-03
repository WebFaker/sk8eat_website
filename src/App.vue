<template>
  <div :style="mainStyles" class="app">
    <div class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/download">Download</router-link>
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
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
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
};
</script>

<style lang="scss">
@import '@/styles/base.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.app {
  font-family: 'Roboto';
  min-height: 100vh;
  color: var(--font-color);
}

.navigation {
  background: rgba(var(--bg-color), 255);
  padding: 0 5%;
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

  a {
    font-weight: bold;
    color: var(--font-color);

    &.router-link-exact-active {
      color: #ffd500;
    }
  }
}

.toggle-container {
  transform: scale(25%);
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
  border: 5px solid #e4e7ec;
  border-radius: 10em;
  background-color: white;
  box-shadow: 0px 10px 25px #e4e7ec;
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
</style>
