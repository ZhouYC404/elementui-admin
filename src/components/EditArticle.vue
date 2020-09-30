<template>
<el-form ref="form" :model="article" label-width="80px" @submit.native.prevent>
  <el-form-item label="文章标题">
    <el-input v-model="article.title"></el-input>
  </el-form-item>
  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="article.content"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="confirm">确认修改</el-button>
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
        },
        id:''
      }
    },
    methods: {
      async confirm() {
        this.$message({
          duration: 600,
          message: '修改文章成功！',
          type: 'success'
        });
        await this.updatearticle()
        this.$router.push('/posts/list')
      },
      async getarticle(id){//进入页面时，调用此函数请求显示对应文章的数据
        let res = await this.$http.get(`/article/edit/${this.id}`)
        this.article = res.data
    },
    async updatearticle(){//点击confirm时，调用此函数请求修改文章
           await this.$http.put(`/article/edit/${this.id}`,this.article)
    }
    },
    
    created() {
        this.id = this.$route.params.id
        this.getarticle(this.id)//根据路由中的id请求对应数据
    },

  }
</script>