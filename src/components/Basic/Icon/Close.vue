<template>
    <span class="icon--close"></span>
</template>


<style scoped>
.icon--close {
    position: absolute;
    top: 20px;
    right: 25px;
    height: 40px;
    width: 40px;
    -webkit-tap-highlight-color: transparent;
    border-radius: 50%;
    cursor: pointer;
}

.icon--close::before,
.icon--close::after {
    content: '';
    position: absolute;
    top: 19px;
    left: 14px;
    width: 25px;
    height: 2px;
    background-color: black;
    transform-origin: 50%;
    transition: all 0.2s ease-out;
}

.icon--close::before {
    transform: rotate(45deg);
}

.icon--close::after {
    transform: rotate(-45deg);
}

.icon--close:hover::before {
    transform: rotate(180deg);
}
.icon--close:hover::after {
    transform: rotate(180deg);
}
</style>