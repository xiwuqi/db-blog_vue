<template>
  <div class="profile-container">
    <el-card class="profile-card" :style="cardStyle">
      <div slot="header" class="card-header">
        <i class="el-icon-user" />
        <span>个人简介</span>
      </div>
      <div class="text item">
        <div class="animated-text"><span>{{ dynamicText }}</span></div>
      </div>
      <div class="twopeople">
        <div class="container" style="height:200px;">
          <canvas ref="canvas" class="illo" width="800" height="800" style="max-width: 200px; max-height: 200px; touch-action: none; width: 640px; height: 640px;"/>
        </div>
      </div>
      <div class="cta-button">
        <el-button type="primary" @click="showContactForm">联系我</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardStyle: {
        animation: 'fadeInUp 1s ease both'
      },
      dynamicText: '本人是一个学习Java的小菜鸟，同时擅长前端和后端开发...'
    }
  },
  mounted() {
    this.loadTwoPeopleScript()
  },
  methods: {
    showContactForm() {
      window.location.href = 'mailto:qiyuewuxi@yeah.net'
    },
    loadTwoPeopleScript() {
      const script1 = document.createElement('script')
      script1.src = 'https://cdn.jsdelivr.net/gh/Justlovesmile/CDN/js/twopeople1.js'
      script1.async = true
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.src = 'https://cdn.jsdelivr.net/gh/Justlovesmile/CDN/js/zdog.dist.js'
      script2.async = true
      document.head.appendChild(script2)

      const script3 = document.createElement('script')
      script3.src = 'https://cdn.jsdelivr.net/gh/Justlovesmile/CDN/js/twopeople.js'
      script3.async = true
      document.head.appendChild(script3)
    }
  }
}
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #3498db, #2c3e50);
}

.profile-card {
  width: 70%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1s ease both;
}

.card-header {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to right, #f39c12, #e74c3c);
  padding: 12px;
  border-radius: 10px 10px 0 0;
}

.el-icon-user {
  font-size: 24px;
  margin-right: 8px;
}

.animated-text {
  font-size: 18px;
  color: #080808;
  opacity: 0.7;
  animation: textAnimation 4s infinite alternate;
}

@keyframes textAnimation {
  0% {
    opacity: 0.7;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(-10px);
  }
}

.cta-button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.twopeople {
  margin: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
}

canvas {
  display: block;
  margin: 0 auto;
  cursor: move;
}

</style>
