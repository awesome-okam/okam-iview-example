<template>
    <view class="comp-page">
        <i-panel title="三种尺寸"></i-panel>

        <i-grid>
            <i-grid-item i-class="item">
                <i-spin size="small"></i-spin>
            </i-grid-item>
            <i-grid-item i-class="item">
                <i-spin></i-spin>
            </i-grid-item>
            <i-grid-item i-class="item">
                <i-spin size="large"></i-spin>
            </i-grid-item>
        </i-grid>

        <i-panel title="居中固定"></i-panel>

        <view class="container">
            <i-spin fix></i-spin>
        </view>

        <i-panel title="自定义内容"></i-panel>

        <i-grid>
            <i-grid-item i-class="item">
                <i-spin custom>加载中...</i-spin>
            </i-grid-item>
            <i-grid-item i-class="item">
                <i-spin custom>
                    <i-icon type="refresh" size="20" i-class="icon-load"></i-icon>
                    <view>Loading</view>
                </i-spin>
            </i-grid-item>
            <i-grid-item i-class="item">
                <i-spin custom>
                    <view class="loading"></view>
                </i-spin>
            </i-grid-item>
        </i-grid>

        <i-panel title="切换显示状态"></i-panel>

        <view class="spin-article">
            <view class="title">登金陵凤凰台</view>
            <view class="name">李白</view>
            <view class="article">
                <view>凤凰台上凤凰游，凤去台空江自流。</view>
                <view>吴宫花草埋幽径，晋代衣冠成古丘。</view>
                <view>三山半落青天外，二水中分白鹭洲。</view>
                <view>总为浮云能蔽日，长安不见使人愁。</view>
            </view>

            <i-spin size="large" fix if="spinShow"></i-spin>
        </view>

        <view class="switch">
            <i-switch value="{{ switch }}" @change="onSwitchChange"></i-switch>
        </view>
    </view>
</template>

<script>
import ISpin from 'iview-weapp/dist/spin/index';
import IPanel from 'iview-weapp/dist/panel/index';
import IRow from 'iview-weapp/dist/row/index';
import ICol from 'iview-weapp/dist/col/index';
import IGrid from 'iview-weapp/dist/grid/index';
import IGridItem from 'iview-weapp/dist/grid-item/index';
import IIcon from 'iview-weapp/dist/icon/index';
import ISwitch from 'iview-weapp/dist/switch/index';

export default {
    config: {
        title: 'Spin 加载中'
    },

    components: {
        ISpin,
        IPanel,
        IRow,
        ICol,
        IGrid,
        IGridItem,
        IIcon,
        ISwitch
    },

    data: {
        spinShow: true,
        switch: false
    },

    methods: {
        onSwitchChange ({ detail }) {
            const value = detail.value;
            this.setData({
                switch: value,
                spinShow: !value
            });
        }
    }
};
</script>

<style lang="css">
.item {
    height: 100px;
    text-align: center;
}
.container {
    display: block;
    width: 200px;
    height: 100px;
    margin: 0 auto;
    position: relative;
    border: 1px solid #eee;
}

@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.icon-load {
    animation: ani-demo-spin 1s linear infinite;
}

.loading {
    display: inline-block;
    margin-right: 12px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    border: 2px solid #2d8cf0;
    border-color: #2d8cf0 #2d8cf0 #2d8cf0 transparent;
    animation: loading-spin 0.6s linear;
    animation-iteration-count: infinite;
}

@keyframes loading-spin {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

.spin-article {
    width: 100%;
    height: 200px;
    padding: 10px;
    position: relative;
    border: 1px solid #eee;
    text-align: center;
    box-sizing: border-box;
}
.title {
    font-size: 22px;
}
.name {
    color: #999;
    font-style: normal;
    font-size: 14px;
}
.switch {
    margin: 10px;
}
</style>
