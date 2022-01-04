<template>
  <div class="header">
    <img class="header-logo" alt="Sk8Eat! logo" src="../assets/logo.png">
    <h1 class="header-title">{{ title }}</h1>
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'SK8 EAT!',
    },
  },

};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.header {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(227, 103, 84, 255), rgba(223, 72, 119, 255));

  &-title {
    word-break: break-all;
    hyphens: auto;
    z-index: 2;
    position: absolute;
    top: calc(5% + 100px);
    left: 7%;
    font-size: 6em;
    color: white;
    word-spacing: 100vw;
    @media (min-width: $screen-md-min) {
      top: 50%;
      transform: translateY(-50%);
      font-size: 10em;
    }
    @media (min-width: $screen-xl-min) {
      left: 10%;
      font-size: 15em;
    }
  }

  &-logo {
    width: 300px;
    filter: drop-shadow(5px 5px 0 white)
            drop-shadow(-4px -4px 0 white);
    z-index: 3;
    position: absolute;
    bottom: 50px;
    right: 7%;
    top: none;
    animation: logo-float 5s linear infinite;

    @media (min-width: $screen-md-min) {
      width: auto;
      top: 10%;
      bottom: none;
      right: 5%;
    }
    @media (min-width: $screen-xl-min) {
      width: 700px;
      right: 10%;
    }
  }
}

.loader {
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.loader span {
  width: 128px;
  height: 128px;
  /*   margin: -280px 40px 54px  -34px; */
  opacity: 0;
  -webkit-animation: loader 10s infinite linear;
  -moz-animation: loader 10s infinite linear;
  animation: loader 10s infinite linear;
}

.loader span:nth-child(5n+5) {
  -webkit-animation-delay: 1.3s;
  -moz-animation-delay: 1.3s;
  animation-delay: 1.3s;
}

.loader span:nth-child(3n+2) {
  background: url("https://i.ibb.co/7Xh0g7D/Canette.png");
  background-size: contain;
  -webkit-animation-delay: 1.5s;
  -moz-animation-delay: 1.5s;
  animation-delay: 1.5s;
}

.loader span:nth-child(2n+5) {
  background: url("https://i.imgur.com/yu5Rscf.png");
  background-size: contain;
  -webkit-animation-delay: 1.7s;
  -moz-animation-delay: 1.7s;
  animation-delay: 1.7s;
}

.loader span:nth-child(3n+10) {
  -webkit-animation-delay: 2.7s;
  -moz-animation-delay: 2.7s;
  animation-delay: 2.7s;
}

.loader span:nth-child(7n+2) {
  -webkit-animation-delay: 3.5s;
  -moz-animation-delay: 3.5s;
  animation-delay: 3.5s;
}

.loader span:nth-child(4n+5) {
  -webkit-animation-delay: 5.5s;
  -moz-animation-delay: 5.5s;
  animation-delay: 5.5s;
}

.loader span:nth-child(3n+7) {
  -webkit-animation-delay: 8s;
  -moz-animation-delay: 8s;
  animation-delay: 8s;
}

@keyframes loader {
  0% {
    width: 128px;
    height: 128px;
    opacity: 0;

    -webkit-transform: translate(0, 0vh) rotateZ(0deg);
  }
  25% {
    width: 128px;
    height: 128px;
    opacity: 1;

    -webkit-transform: translate(0, 25vh) rotateZ(90deg);
  }
  75% {
    width: 128px;
    height: 128px;
    opacity: 1;

    -webkit-transform: translate(5vw, 75vh) rotateZ(270deg);
  }
  100% {
    width: 128px;
    height: 128px;
    opacity: 0;

    -webkit-transform: translate(10vw, 100vh) rotateZ(360deg);
  }
}

@-webkit-keyframes loader {
  0% {
    width: 128px;
    height: 128px;
    opacity: 0;

    -webkit-transform: translate(0, 0vh) rotateZ(0deg);
  }
  25% {
    width: 128px;
    height: 128px;
    opacity: 1;

    -webkit-transform: translate(0, 25vh) rotateZ(90deg);
  }
  75% {
    width: 128px;
    height: 128px;
    opacity: 1;

    -webkit-transform: translate(5vw, 75vh) rotateZ(270deg);
  }
  100% {
    width: 128px;
    height: 128px;
    opacity: 0;

    -webkit-transform: translate(10vw, 100vh) rotateZ(360deg);
  }
}

@-moz-keyframes loader {
  0% {
    width: 128px;
    height: 128px;
    opacity: 0;

    -webkit-transform: translate(0, 0vh) rotateZ(0deg);
  }
  25% {
    width: 128px;
    height: 128px;
    opacity: 1;

    -webkit-transform: translate(0, 25vh) rotateZ(90deg);
  }
  75% {
    width: 128px;
    height: 128px;
    opacity: 1;

    -webkit-transform: translate(5vw, 75vh) rotateZ(270deg);
  }
  100% {
    width: 128px;
    height: 128px;
    opacity: 0;

    -webkit-transform: translate(10vw, 100vh) rotateZ(360deg);
  }
}
</style>
