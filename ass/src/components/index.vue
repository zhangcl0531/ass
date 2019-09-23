<template>
    <div class="index">
        <div class="banner clearfix">
            <div class="banneritem banner-1">
                <div class="overview last-browse">
                    <div class="title">最近访问</div>
                    <div class="last-browse-lists">
                        <div class="last-borowse-list">服务器管理</div>
                        <div class="last-borowse-list">证书管理</div>
                        <div class="last-borowse-list">Mysql管理</div>
                        <div class="last-borowse-list">账户管理-腾讯云</div>
                        <div class="last-borowse-list">权限控制</div>
                        <div class="last-borowse-list">账户配置</div>
                    </div>
                </div>
                <div class="overview server-survey">
                    <div class="title">资源概况</div>
                    <div class="server-lists clearfix">
                        <div class="server-card clearfix">
                            <div class="server-card-left">
                            </div>
                            <div class="server-card-right">
                                <div class="server-card-title">
                                    云服务器
                                </div>
                                <div class="server-card-data">
                                    144 台
                                </div>
                            </div>
                        </div>
                        <div class="server-card clearfix"></div>
                        <div class="server-card clearfix"></div>
                        <div class="server-card clearfix"></div>
                        <div class="server-card clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="banneritem banner-2"></div>
            <div class="banneritem banner-3"></div>
            <!-- <div class="banneritem banner-4"></div> -->
        </div>
    </div>
</template>

<script>
export default {
    name:"index",
    data() {
        return {
    
        }
    },
    methods: {
    
    }
}
</script>

<style  scoped>

    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }
    .banneritem {
        float: left;
        /* border: 1px solid red; */
        background-color: white;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
        border-radius:2px
    }

    .banner-1 {
        width: calc(66% - 10px);
        /* height: 500px; */
    }

    .banner-2 {
        float: right;
        width: calc(33%);
        height: 200px;
    }

    .banner-3 {
        float: right;
        width: calc(33%);
        height: 200px;
        margin-top: 20px;
    }

    .banner-4 {
        width: 100%;
        height: 300px;
        margin-top: 30px
    }

    .overview {
        border:  1px solid red;
        padding: 20px;
        font-size: 14px;
        margin-bottom: 10px
    }

    .last-browse-lists {
        width: 100%;
        margin:0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .last-borowse-list {
        width: calc(25%);
        padding: 10px;
        background: #f2f2f2;
        margin-top:4px;
        margin-bottom: 4px;
        text-align: center;
        cursor:pointer;
        font-size: 10px;
        text-overflow: ellipsis;
    }

    .last-borowse-list:hover {
        color: #409EFF;
    }
    .overview .title {
        margin-bottom: 10px;
        font-weight: bold
    }

    .server-card {
        width: 25%;
        border: 1px solid #ddd;
        height: 80px;
        padding: 20px;
        float: left;
        margin-right: -1px;
        margin-bottom: -1px;
        cursor:pointer
    }
    .server-card-left {
        float: left;
    }
    
    .server-card-right {
        float: left;
        font-size: 10px;
    }

    .server-card-right:hover .server-card-title {
        color: #409EFF;
    }
    
</style>