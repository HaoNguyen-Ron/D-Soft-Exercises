<script setup>
const props = defineProps({
  modalOpen: Boolean
})
const emitter = inject('emitter')
const emit = defineEmits(['closeModal'])

</script>

<template>
  <Teleport to="body">
    <div v-if="props.modalOpen" :class="$style.commonModalContainer">
      <div :class="$style.commonModalTitle">Are You sure to delete this Todo:</div>

      <p :class="$style.commonModalContent">Sleep</p>

      <div :class="$style.commonModalAction">
        <button :class="[$style.commonModalBtn, $style.commonModalBtnPrimary]">Yes</button>

        <button :class="[$style.commonModalBtn, $style.commonModalBtnOutline]" @click="emit('closeModal')">No</button>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" module>
.commonModalContainer {
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  gap: 3rem;
  border: 1px solid var(--color-primary);
  border-radius: 3rem;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.commonModalTitle {
  font-size: 3rem;
  font-weight: 600;
  line-height: 3rem;
}

.commonModalContent {
  color: var(--color-danger);
  font-size: 2rem;
  line-height: 2rem;
}

.commonModalAction {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}

.commonModalBtn {
  flex: 1 1 50%;
  border-radius: 15px;
  padding: 0.8rem;
  font-size: 2rem;

  &:hover {
    border: 1px solid var(--color-primary);
    background-color: var(--color-hover-primary);
    color: white;
  }
}

.commonModalBtnOutline {
  border: 1px solid var(--color-primary);
}

.commonModalBtnPrimary {
  background-color: var(--color-primary);
  color: white;
}
</style>
