<template>
  <el-table :data="articles">
        <el-table-column prop="title" label="标题" >
        </el-table-column>
        <el-table-column prop="content" label="内容" >
        </el-table-column>
        <el-table-column
      fixed="right"
      label="操作">
        <template slot-scope="scope">
        <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
        <el-button @click="isremove(scope.row._id)" type="text" size="small">删除</el-button>
      </template>
      </el-table-column>
      </el-table>
</template>

<script>
export default {
    name:'articlelist',
 data() {
     return{
         articles:[],
         id:'',

     }
    },
    methods: {
        async getarticles(){//向服务端请求文章数据
            let res = await this.$http.get('/articles')
            this.articles = res.data
        },
        async removearticle(id){//发送删除文章请求
            let res = await this.$http.delete(`/article/${id}`)
            console.log(res.data);
        },

        edit(id){//点击编辑按钮，调用此函数跳转页面
              this.$router.push(`/posts/edit/${id}`)
        },
        async isremove(id){
            try {//使用try catch，如果await后面promise返回resolve，也就是点击确定按钮，那么执行1，但如果返回的是reject，会立马跳出try进入catch并执行2。
            this.id = id
              await  this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        //1
            this.remove(this.id)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          //1
        } catch (error) {
            //2
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
          //2
        }          
        },
        async remove(id){//如果这里不用async和await，删除数据后会发现页面没有更新，因为getarticles函数可能会比removearticle函数先执行，因为async本身返回promise，所以可以用await等待async解决问题。
         await this.removearticle(id)
         await this.getarticles()
        }
    },
    created() {
        this.getarticles()
    },
}
</script>

<style>

</style>