<template>
  <div class="profile-container">
    <el-card class="profile-card" :style="cardStyle">
      <div slot="header" class="card-header">
        <i class="el-icon-user" />
        <span>个人简介</span>
      </div>
      <div class="text-item">
        <div class="animated-text"><element class="dynamic-text">{{ dynamicText }}</element></div>
      </div>
      <div class="twopeople">
        <div class="container" style="height:200px;">
          <canvas ref="canvas" class="illo" width="800" height="800" style="max-width: 200px; max-height: 200px; touch-action: none; width: 640px; height: 640px;" />
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
      dynamicText: '博尔赫斯在《小径分岔的花园》里所写，他认为时间没有同一性和绝对性，他认为时间有无数系列，背离的、汇合的和平行的时间织成一张不断增长、错综复杂的网。由相互靠拢、分歧、交错或者永远互不干扰的时间织成的网络包含了所有的可能性。在大部分时间里，我们并不存在；在某些时间，有你没有我；在另一些时间，有我而没有你；再有一些时间，你我都存在。目前这个时刻，偶然的机会使你光临破站；在另一个时刻，你阅读此篇介绍，发现我已死去；再在另一个时刻，我说着目前所说的话，不过我是个错误，是个幽灵。'
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
  font-size: 1rem;
  font-family: Optima-Regular, Optima, PingFang SC, Microsoft YaHei, sans-serif;
  letter-spacing: 0.5px;
  line-height: 1.5;
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
