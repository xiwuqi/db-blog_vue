<template>
  <el-card class="box-card">
    <!-- 设置标题公告管理 -->
    <div slot="header" class="clearfix">
      <span>添加公告</span>
    </div>

    <!-- 发布文章 -->
    <div class="article-title-container">
      <el-input v-model="notice.noticeTitle" size="medium" placeholder="输入公告标题" />
      <el-button type="danger" size="medium" style="margin-left:10px" @click="openDialog">发布公告</el-button>
    </div>

    <!-- 公告内容 -->
    <mavon-editor ref="md" v-model="notice.noticeContent" style="height:calc(100vh - 260px)" />

    <!-- 填写信息弹出框 -->
    <el-dialog :title="`发布公告：${notice.noticeTitle}`" :visible.sync="showDialog" width="30%">

      <el-form label-position="left" label-width="80px">
        <el-form-item label="公告类型">
          <el-select v-model="notice.noticeType" placeholder="请选择公告类型">
            <el-option label="公告" :value="0" />
            <el-option label="通知" :value="1" />
            <el-option label="提醒" :value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="notice.noticeStatus" />
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button type="primary" @click="handleSubmit">发布</el-button>
        <el-button @click="handleCancel">取 消</el-button>
      </span>
    </el-dialog>

  </el-card>
</template>

<script>
import { addNotice, updateNotice, getNoticeById } from '@/api/notice'
export default {
  name: 'Addnotice',

  data() {
    return {
      showDialog: false,
      notice: {
        noticeContent: '',
        noticeTitle: '',
        noticeType: '',
        noticeStatus: true,
        noticeId: ''
      }
    }
  },

  created() {
    const noticeId = this.$route.params.noticeId
    if (noticeId) {
      getNoticeById(noticeId).then((res) => {
        this.notice = res.data
      })
    }
  },

  methods: {
    // 打开文章信息填写框
    openDialog() {
      if (
        this.assertNotEmpty(this.notice.noticeTitle, '请填写公告标题') &&
        this.assertNotEmpty(this.notice.noticeContent, '请填写公告内容')
      ) {
        this.showDialog = true
      }
    },

    assertNotEmpty(target, msg) {
      if (!target) {
        this.$message({
          message: msg,
          type: 'warning'
        })
        return false
      }
      return true
    },

    handleCancel() {
      this.showDialog = false
    },

    handleSubmit() {
      this.showDialog = true
      var body = this.notice
      if (this.notice.noticeId) {
        updateNotice(body).then((res) => {
          this.$notify({
            title: '提示',
            message: `公告《${this.notice.noticeTitle}》更新成功`,
            type: 'success'
          })
          this.$router.push('/notice/list')
        })
      } else {
        addNotice(body).then((response) => {
          this.$notify({
            title: '提示',
            message: `公告《${this.notice.noticeTitle}》发布成功`,
            type: 'success'
          })
          this.$router.push('/notice/list')
        })
      }
    }

  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .box-card {
    width: 98%;
    margin: 1%;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .clearfix span {
    font-weight: 600;
  }
  .article-title-container {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  }
</style>

