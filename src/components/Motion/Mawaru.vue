<template>
  <div class="mawaru">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>


<script>
export default {
  mounted() {
    CSS.registerProperty({
      name: "--color1",
      syntax: "<color>",
      initialValue: "transparent",
      inherits: true
    });

    CSS.registerProperty({
      name: "--color2",
      syntax: "<color>",
      initialValue: "transparent",
      inherits: true
    });

    CSS.registerProperty({
      name: "--pos",
      syntax: "<length-percentage>",
      initialValue: "0",
      inherits: true
    });
  }
};
</script>


<style lang="scss" scoped>
body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #b3e5fc;
}

.mawaru {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .circle {
    // https://coolors.co
    $circle-colors: #50514f, #f25f5c, #ffe066, #247ba0, #70c1b3, #1d3557,
      #88abc0, #ffcdb2;

    position: absolute;
    background: conic-gradient(var(--color1) var(--pos), var(--color2) 0);
    border-radius: 50%;

    @for $i from 1 through 8 {
      &:nth-child(#{$i}) {
        $color1: nth($circle-colors, $i);
        --color1: #{$color1};

        z-index: 8 - $i;
        width: 4em * $i;
        height: 4em * $i;
        // Use step-end to switch color1 and color2 every time the first pos animation finished.
        animation: pos 0.6s linear, color1 1.2s step-end,
          color2-#{$i} 1.2s step-end;
        animation-iteration-count: 2;
        animation-delay: 0.4s * $i;
      }

      @keyframes color2-#{$i} {
        50% {
          --color2: #{nth($circle-colors, $i)};
        }
      }
    }
  }
}

@keyframes pos {
  to {
    --pos: 100%;
  }
}

@keyframes color1 {
  50% {
    --color1: transparent;
  }
}
</style>