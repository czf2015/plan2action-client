<template>
    <div class="bruce">
	<div class="color-changer">
		<input type="color" value="#ff6666">
		<img src="https://yangzw.vip/static/codepen/car.jpg">
	</div>
</div>
</template>


<script>
export default {

}
</script>


<style lang="scss" scoped>
.color-changer {
	overflow: hidden;
	position: relative;
	height: 100%;
	input {
		position: absolute;
		width: 100%;
		height: 100%;
		cursor: pointer;
		mix-blend-mode: hue;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>