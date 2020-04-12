<template>
  <ul class="snow-container">
    <li v-for="i in total" :key="i" class="snow" />
  </ul>
</template>

<script>
// function rand(min, max) {
//   return min + Math.floor(Math.rand() * (max - min + 1));
// }

export default {
  props: {
    total: {
      type: Number,
      default: 200
    }
  }

  //   methods: {
  //     snowStyle() {
  //       return {
  //         opacity: `random(10000) * 0.0001`,
  //         transform: `translate(${(rand(1000000) - rand(-100000, 100000)) *
  //           0.0001}vw, -10px) scale(${rand(0, 10000) * 0.0001})`,
  //         animation: `from {
  //         transform: translate(${rand(1000000) * 0.0001}, ${(rand(30000, 80000) /
  //           100000) *
  //           100}vw) scale(${rand(0, 10000) * 0.0001});
  //       }

  //       to {
  //         transform: translate(${(rand(1000000) - rand(-100000, 100000) / 2) *
  //           0.0001}vw, 100vh) scale(${rand(0, 10000) * 0.0001});
  //       }

  //       ${rand(10, 30) * 1}s ${rand(30) * (-1)}s linear infinite`
  //       };
  //     }
  //   }
};
</script>

<style lang="scss" scoped>
@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.snow-container {
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  filter: drop-shadow(0 0 10px white);

  .snow {
    $total: 200;
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;

    @for $i from 1 through $total {
      $random-x: random(1000000) * 0.0001vw;
      $random-offset: random_range(-100000, 100000) * 0.0001vw;
      $random-x-end: $random-x + $random-offset;
      $random-x-end-yoyo: $random-x + ($random-offset / 2);
      $random-yoyo-time: random_range(30000, 80000) / 100000;
      $random-yoyo-y: $random-yoyo-time * 100vh;
      $random-scale: random(10000) * 0.0001;
      $fall-duration: random_range(10, 30) * 1s;
      $fall-delay: random(30) * -1s;

      &:nth-child(#{$i}) {
        opacity: random(10000) * 0.0001;
        transform: translate($random-x, -10px) scale($random-scale);
        animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
      }

      @keyframes fall-#{$i} {
        #{percentage($random-yoyo-time)} {
          transform: translate($random-x-end, $random-yoyo-y)
            scale($random-scale);
        }

        to {
          transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
        }
      }
    }
  }
}
</style>