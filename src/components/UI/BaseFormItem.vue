<template>
  <div class="form-item">
    <slot></slot>
  </div>
</template>

<style scoped>
.form-item {
  display: flex;
  flex-direction: row;

  &:has(button) {
    justify-content: end;
    gap: 10px;
    margin-block-start: 12px;
  }

  &:has(label) {
    flex-direction: column;
  }
}
</style>
