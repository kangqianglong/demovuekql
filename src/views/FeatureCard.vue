<template>
  <div class="feature-card" :style="style">
    <router-link :to="to" class="feature-link">{{ label }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    label: String, // 功能名称
    to: String,    // 路由地址
   // Style: Object  // 自定义样式（如背景色）
  }
};
</script>

<style scoped>
.feature-card {
  width: 240px;
  height: 100px;
  margin: 15px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.feature-link {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}
</style>