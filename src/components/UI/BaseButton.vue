<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
.btn-green {
  --current-background-color: var(--green-normal);
  --current-color: var(--white);
}

.btn-blue {
  --current-background-color: var(--blue-normal);
  --current-color: var(--white);
}

.btn-white {
  --current-background-color: var(--white);
  --current-color: #000;
  border: 1px solid var(--grey);
}

.btn-red {
  --current-background-color: var(--red);
  --current-color: var(--white);
}

.btn-close {
  height: auto;
  width: 60px;
  border-radius: 20px;
  transition: scale 0.3s easy-in-out;

  &:active {
    scale: 0.8;
  }
}

button {
  padding: 5px 15px;
  font-size: 20px;
  border-radius: 5px;
  border: unset;
  background-color: var(--current-background-color);
  color: var(--current-color);
  transition: scale 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    background-color: color-mix(
      in srgb,
      var(--current-background-color) 80%,
      black
    );
  }

  &:active {
    scale: 0.9;
  }
}
</style>
