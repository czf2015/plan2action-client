<template>
  <ul class="float-text-menu">
    <li v-for="({link, title}) in list" :key="title">
      <a :href="link" :dataText="title">
        <span
          v-for="(letter, i) in title.split('')"
          :key="i"
          :style="{transitionDelay: `${i / 20}s`}"
        >{{letter}}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [
        {
          title: "Adsfsf",
          link: "#"
        },
        {
          title: "Bfsdfsa",
          link: "#"
        },
        {
          title: "Cfdsfsa",
          link: "#"
        },
        {
          title: "Dfdsfdsf",
          link: "#"
        },
        {
          title: "Edfdsfsa",
          link: "#"
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);

// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: #1A1E23;
// }

.float-text-menu {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background: #1a1e23;

  li {
    a {
      display: flex;
      padding: 1.5em 0 .5em 1em;
      color: white;
      font-family: Lato, sans-serif;
      text-decoration: none;
      overflow: hidden;

      span {
        position: relative;
        transition: 0.3s;
        margin-right: .15em;

        &::before {
          position: absolute;
          content: attr(data-text);
          transform: translateY(130%);
        }
      }

      &:hover {
        span {
          transform: translateY(-130%);
        }
      }
    }
  }
}
</style>