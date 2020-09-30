<template>
<el-container style="height: 100vh; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router  :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-operation"></i>内容管理</template>
        <el-menu-item-group>
          <el-menu-item index="/posts/create">新建文章</el-menu-item>
          <el-menu-item index="/posts/list">文章列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <span>周yc</span>
    </el-header>
    <el-main>
    <!--   <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table> -->
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

    
  
</template>

<script>

  export default {
  };
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>