<template>
    <div class="index">
        <el-container>
            <el-header height="50px" >
                <!-- <div class="header-img">
                    <img class="loading" src="http://pic.heitao2014.com/1.0/game/spade/3.0/p/loading.gif">
                </div>
                <div class="header-title">  
                    黑桃运维管理系统
                </div>

                <div class="header-message">
                    <el-badge is-dot >
                        <el-button type="text" icon="el-icon-bell" style="color:#fff" @click="table = true"></el-button>
                    </el-badge>
                </div>
                
                <div class="header-auth">
                    <img :src="circleUrl" alt="">
                    <ul>
                        <li><a>设置</a></li>
                        <li><a>注销</a></li>
                    </ul>
                </div>
                <div class="dirawer">
                    <el-drawer
                    title="消息中心"
                    :visible.sync="table"
                    direction="rtl"
                    size="30%">
                        <el-table :data="gridData" show-header=false>
                            <el-table-column property="message" label=""></el-table-column>
                            <el-table-column property="date" label=""></el-table-column>
                        </el-table>
                    </el-drawer>
                </div> -->

                <div id="topNavBar" class="topNavBar clearfix">
                    <div class="header-img">
                        <img class="loading" src="http://pic.heitao2014.com/1.0/game/spade/3.0/p/loading.gif">
                    </div>
                    <div class="header-title">  
                        黑桃运维管理系统
                    </div>
                    
                    <nav class="menu">
                        <ul class="clearfix">
                            <li class="header-a">
                                <div class="header-auth">
                                    <img :src="circleUrl" alt="">
                                    <span class="header-name">用户名</span>
                                </div>
                                <ul class="submune">
                                    <li><a>设置</a></li>
                                    <li><a>注销</a></li>
                                </ul>
                            </li>
                            <li>
                                <div class="header-message">
                                    <el-badge is-dot >
                                        <el-button type="text" icon="el-icon-bell" style="color:#fff" @click="table = true"></el-button>
                                    </el-badge>
                                </div>
                            </li>
                            
                        </ul>
                    </nav>
                    <div class="dirawer">
                    <el-drawer
                    title="消息中心"
                    :visible.sync="table"
                    direction="rtl"
                    size="30%">
                        <el-table :data="gridData" show-header=false>
                            <el-table-column property="message" label=""></el-table-column>
                            <el-table-column property="date" label=""></el-table-column>
                        </el-table>
                    </el-drawer>
                    </div>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
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
                            <el-menu-item index="1-4">证书管理</el-menu-item>
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
                            <el-menu-item index="5-5">ucloud</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>设置</span>
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
                </el-aside>
                
                <el-main>Main
                    
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name:'index',
    data() {
        return {
            isCollapse: true,
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            table: false,
            gridData: [{
        date: '2019-09-21 10:01:06',
        title: '证书提醒',
        message: 'SSL证书过期提醒'
      }, {
        date: '2019-09-21 10:01:06',
        title: '证书提醒',
        message: 'SSL证书过期提醒'
      }, {
        date: '2019-09-21 10:01:06',
        title: '证书提醒',
        message: 'SSL证书过期提醒'
      }, {
        date: '2019-09-21 10:01:06',
        title: '证书提醒',
        message: 'SSL证书过期提醒'
      }],
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
    .el-header, .el-footer {
    background-color: #262626;
    color: #fff;
    /* text-align: center; */
    /* line-height: 50px; */
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
    text-align: center;
    /* height: 100vh; */
    overflow: hidden;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
      border-right: solid 0px
  }
  .header-title {
      color:#fff;
      /* padding: 20px 0 20px 0; */
      /* border: 1px solid red; */
      display:inline-block;
      line-height: 50px;
      float: left;
  }

 .header-img {
     width: 50px;
     height: 50px;
     float: left;
 }
  .header-img img {
      width: auto;
      height: auto;
      max-width:100%;
      max-height:100%;
  }
  .header-auth {
      /* border:  1px solid red; */
      /* display: inline-block */
      float: right;
      width: 100px;
      /* height: 50px; */
      /* margin-top: 10px; */
      /* line-height: 80px; */
      padding: 10px;
      cursor:pointer;
      
      
  } 

  .header-auth span,img{
    padding-right:5px;
    vertical-align:middle;
    display:inline-block;
    float: none;
} 

  .header-auth img{
      width: 30px;
      height: 30px;
      max-width:100%;
      max-height:100%;
      /* margin-top: 10px */
  }

  .header-name {
      display: inline-block;
      font-size: 15px;
  }
  .header-message {
      float: right;
      line-height: 30px;
      margin-top: 10px;
  }

  .header-message .el-button {
      padding: 5px;
      /* border: 1px solid red; */
      font-size: 20px;
  }
  .dirawer .el-table-column {
      font-size: 5px;
  }

  a {
    text-decoration: none;
    }

    ul li,
    ol {
        list-style: none
    }

    .topNavBar {
        position: fixed;
        /* padding: 10px 0; */
        top: 0;
        left: 0;
        right: 0;
        /* min-width: 940px; */
        z-index: 1;
        transition:  all 1s;
    }

    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }

    .menu {
        float: right;
        /* padding-top: 10px; */
        margin-right: 20px;
        margin-top: -15px;

    }

    .topNavBar > nav > ul > li {
    float: left;
    position: relative;
    /* border: 1px solid red; */
    display: block;
    padding:  0 5px;
    }


    .submune {
    display: none;
    position: absolute;
    left: 0;
    top: 98%;
    background: #222; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    opacity:1; 
    color: #fff;
    padding: 0 15px;
    border-radius:0 0 3px 3px;
    font-size: 8px;
}

    .submune > li {
    white-space: nowrap;
    padding:  15px 35px;
    cursor:pointer
    }

    .header-a:hover .submune {
        display:block
    }
    .submune > li:hover {
        color: #409EFF;
    }
</style>