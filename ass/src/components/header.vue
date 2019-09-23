<template>
    <div class="ASS_Header">
        <!-- <div id="topNavBar" class="topNavBar clearfix">
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
                                        <el-drawer
                                            title="消息中心"
                                            :visible.sync="table"
                                            direction="rtl"
                                            size="30%">
                                                <el-table :data="gridData">
                                                    <el-table-column property="message" label=""></el-table-column>
                                                    <el-table-column property="date" label=""></el-table-column>
                                                </el-table>
                                            </el-drawer>
                                    </el-badge>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div> -->
   
        <div class="parent clearfix">
            <div class="child" style="float:left;">
                <div class="header-img">
                    <img class="loading" src="http://pic.heitao2014.com/1.0/game/spade/3.0/p/loading.gif">
                </div>
                <!-- <div class="header-title">   -->
                    黑桃运维管理系统
                <!-- </div> -->
            </div>
            <div class="child" style="float:right;">
                <div class="nav clearfix">
                    <div class="navItem item-auth" style="float:left;">
                        <img class="banner-img" :src="circleUrl" alt="">
                        <span class="header-name">用户名</span>
                        <ul class="submune">
                                    <li><a>修改信息</a></li>
                                    <li><a>注销</a></li>
                        </ul>
                    </div>
                    
                    <div class="navItem header-message" style="float:left;">
                        <el-badge is-dot >
                            <el-button type="text" icon="el-icon-bell" style="color:#fff" @click="table = true"></el-button>
                                <el-drawer
                                    title="消息中心"
                                    :visible.sync="table"
                                    direction="rtl"
                                    size="30%">
                                    <el-table :data="gridData">
                                        <el-table-column property="message" label=""></el-table-column>
                                            <el-table-column property="date" label=""></el-table-column>
                                        </el-table>
                                    </el-drawer>
                        </el-badge>
                    </div>
                </div>
            </div>
        </div>
   
   </div>
</template>


<script>
export default {
    name:"ASS_Header",
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
}
</script>


<style  scoped>
    a {
        text-decoration: none;
    }

    ul li,ol {
        list-style: none
    }

    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }

    .parent {
        line-height: 50px;
    }

    .navItem {
        margin-left:20px;
    }

    .banner-img {
        width: 30px;
        height: 30px;
    }

    .item-auth {
        position: relative;
        cursor:pointer
    }

    .item-auth:hover {
        color: #409EFF;
    }

    .item-auth img {
        vertical-align:middle;
    }

    .submune {
    display: none;
    position: absolute;
    left: 0;
    top: 75%;
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
    padding:  0px 30px;
    cursor:pointer
    }

    .item-auth:hover .submune {
        display:block
    }
    .submune > li:hover {
        color: #409EFF;
    }


    .header-message {
      line-height: 30px;
      margin-top: 10px;
    }

    .header-message:hover {
        color: #409EFF;
    }

    .header-message .el-button {
        padding: 5px;
        font-size: 16px;
    }

    .dirawer .el-table-column {
        font-size: 5px;
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

    .header-name {
      display: inline-block;
      font-size: 15px;
      margin-left: 5px;
    }
  
</style>