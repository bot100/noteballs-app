<template>
  <label>
    <slot name="title">
      <!-- Fallback -->
      <span>Title</span>
    </slot>
    <slot></slot>
  </label>
</template>

<style scoped>
label {
  text-align: center;
}

label.tips {
  color: var(--green-light);
  font-weight: bold;
  text-align: center;
}
</style>
