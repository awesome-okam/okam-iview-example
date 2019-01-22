<template>
    <view class="comp-page">
        <view class="i-divider-demo">
            <view class="one-tag">基本用法</view>
            <view class="i-divider-demo-des">注: 如果同时存在slot和传递内容两个参数只有传递参数content生效</view>
            <view class="i-divider-mart">
                <i-divider content="加载已经完成,没有其他数据"></i-divider>
            </view>
            <view class="i-divider-mart">
                <i-divider content="加载已经完成,没有其他数据" color="#2d8cf0" lineColor="#2d8cf0"></i-divider>
            </view>
            <view class="i-divider-mart">
                <i-divider content="加载已经完成,没有其他数据" lineColor="#2d8cf0"></i-divider>
            </view>
            <view class="i-divider-mart">
                <i-divider content="加载已经完成,没有其他数据" color="#ed3f14" lineColor="#ed3f14"></i-divider>
            </view>
            <view class="i-divider-mart">
                <i-divider content="加载已经完成,没有其他数据" color="#ff9900" lineColor="#ff9900"></i-divider>
            </view>
            <view class="one-tag">自定义内容</view>
            <view class="i-divider-mart">
                <i-divider  color="#2d8cf0" lineColor="#2d8cf0">加载已经完成,没有其他数据</i-divider>
            </view>
            <view class="i-divider-mart">
                <i-divider color="#ed3f14" lineColor="#ed3f14">加载已经完成,没有其他数据</i-divider>
            </view>
        </view>

    </view>
</template>

<script>

import IDivider from 'iview-weapp/dist/divider/index';

export default {
    config: {
        title: 'Divider 分隔符'
    },

    components: {
        IDivider
    },

    data: {
    },

    methods: {

    }
};
</script>

<style lang="css">
.i-divider-demo,
page {
    width: 100%;
    height: 100%;
    background: #fff;
}
.i-divider-mart {

}
.one-tag {
    font-size: 14px;
    margin: 30px 20px 0 20px;
}
.i-divider-demo-des {
    padding: 0 20px;
    margin-top: 5px;
    font-size: 12px;
    color: #ff9900;
}
</style>
