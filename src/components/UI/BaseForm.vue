<template>
  <form>
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
  margin-block-end: 20px;
  background-color: var(--background-color);
  padding: 15px;
  border-radius: 5px;
  width: 100%;
}
</style>
