<template>
    <div class="bruce flex-ct-x">
	<div class="star-rating">
		<input type="radio" name="rate">
		<input type="radio" name="rate">
		<input type="radio" name="rate">
		<input type="radio" name="rate">
		<input type="radio" name="rate">
	</div>
</div>
</template>


<script>
export default {

}
</script>


<style lang="scss" scoped>
.star-rating {
	display: flex;
	flex-direction: row-reverse;
	input {
		width: 30px;
		height: 30px;
		appearance: none;
		cursor: pointer;
		line-height: 30px;
		text-align: center;
		font-size: 30px;
		transition: all 300ms;
		&::after {
			color: #66f;
			content: "☆";
			transition: all 300ms;
		}
		&:hover {
			transform: scale(1.2);
		}
		&:checked,
		&:hover {
			&::after,
			& ~ input::after {
				color: #f66;
				content: "★";
			}
		}
	}
}
</style>