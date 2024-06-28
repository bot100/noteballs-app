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
  font-size: 24px;
  font-weight: bold;
}

label.tips {
  color: var(--green-light);
  font-weight: bold;
  text-align: center;
}
</style>
