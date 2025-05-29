<template>
  <div class="card">
    <div class="icon">{{ icon }}</div>
    <div class="label">{{ label }}</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  icon: String,
  label: String,
  content: String,
});
</script>

<style scoped>
.card {
  width: 200px;
  height: 150px;
  margin: 10px;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.label {
  font-size: 18px;
  font-weight: bold;
}

.content {
  font-size: 14px;
  margin-top: 5px;
}
</style>