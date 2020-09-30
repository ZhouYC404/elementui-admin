<template>
<el-form ref="form" :model="article" label-width="80px" @submit.native.prevent>
  <el-form-item label="文章标题">
    <el-input v-model="article.title"></el-input>
  </el-form-item>
  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="article.content"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="Submit">发表文章</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        article: {
          title:'',
          content:''
        }
      }
    },
    methods: {
      async Submit() {
        await this.savearticle()
        this.$message({
          duration: 600,
          message: '新建文章成功！',
          type: 'success'
        });
        this.$router.push('/posts/list')
      },
      async savearticle(){//发送存储文章请求
          
         let res = await this.$http.post('/article',this.article)
          console.log(res.data); 
      }
    }
  }
</script>