<template>
    <div class="ASS_Aside">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#333" text-color="#fff" active-text-color="#409EFF">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>资源管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">服务器管理</el-menu-item>
                            <el-menu-item index="1-2">Mysql管理</el-menu-item>
                            <el-menu-item index="1-3">Redis管理</el-menu-item>
                            <el-menu-item index="1-4">SSL证书管理</el-menu-item>
                        </el-menu-item-group>

                    </el-submenu>

                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>账户管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="5-1">腾讯云</el-menu-item>
                            <el-menu-item index="5-2">首都在线</el-menu-item>
                            <el-menu-item index="5-3">金山云</el-menu-item>
                            <el-menu-item index="5-4">阿里云</el-menu-item>
                            <el-menu-item index="5-5">Ucloud</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>系统设置</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">账户配置</el-menu-item>
                            <el-menu-item index="4-2">权限控制</el-menu-item>
                            <el-menu-item index="4-3">其他</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                   
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    </el-menu>
 
    </div>
</template>


<script>
export default {
    name:"ASS_Aside",
    data() {
        return {
            
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>


<style  scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
      border-right: solid 0px
  }
</style>