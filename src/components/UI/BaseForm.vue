<template>
  <form @submit.prevent>
    <slot></slot>
  </form>
</template>

<style scoped>
.form-blue {
  --background-color: var(--blue-dark);
}

.form-green {
  --background-color: var(--green-dark);
}

form {
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  margin-block-end: 20px;
  background-color: var(--background-color);
  padding: 15px;
  border-radius: 5px;
  width: 100%;
  width: min(90vw, 700px);
}
</style>
