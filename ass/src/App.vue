<template>
  <div id="app">
        <el-container>
            <el-header height="50px" >
                <ASS_Header></ASS_Header>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <ASS_Aside></ASS_Aside>
                </el-aside>
                <el-main>
                    <router-view name="main"></router-view>
                </el-main>
            </el-container>
        </el-container>
  </div>
</template>

<script>

import ASS_Header from './components/header'
import ASS_Aside from './components/aside'

export default {
  name: 'App',
  components:{
    ASS_Header,
    ASS_Aside
  }
}
</script>

<style>
  body {
        padding: 0;
        margin: 0;
      }
  #app {
    min-width: 700px;
  }
  .el-header, .el-footer {
    background-color: #262626;
    color: #fff;
 
    height: 50px;
    
  }
  
  .el-aside {
    background-color: #333;
    color: #333;
    text-align: center;
    height: 100vh;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* border:  1px solid red; */
    overflow: hidden;
  }
</style>
