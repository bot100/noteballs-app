<template>
  <span>
    <slot>Message Title</slot>
  </span>
</template>

<style scoped>
span.tip {
  font-weight: bold;
  color: var(--blue-normal);
}

span.warning {
  font-weight: bold;
  color: var(--red);
}
</style>
