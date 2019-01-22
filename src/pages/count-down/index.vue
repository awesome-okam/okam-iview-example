<template>
    <view class="comp-page">
        <view class="view-wrap">
            <text class="type-title">倒计时：</text>
            <i-count-down
                    target="{{targetTime}}"
                    clear-timer="{{clearTimer}}"
            ></i-count-down>
        </view>

        <view class="view-wrap">
            <text class="type-title">显示天的倒计时：</text>
            <i-count-down
                    target="{{targetTime1}}"
                    show-day="{{true}}"
                    clear-timer="{{clearTimer}}"
            ></i-count-down>
        </view>


        <view class="view-wrap">
            <text class="type-title">自定义格式倒计时：</text>
            <i-count-down
                    target="{{targetTime}}"
                    format="{{myFormat}}"
                    clear-timer="{{clearTimer}}"
            ></i-count-down>
        </view>

        <view class="view-wrap">
            <text class="type-title">自定义格式倒计时：</text>
            <i-count-down
                    target="{{targetTime1}}"
                    show-day="{{true}}"
                    format="{{myFormat1}}"
                    clear-timer="{{clearTimer}}"
            ></i-count-down>
        </view>

        <view class="view-wrap">
            <text class="type-title">执行回调的倒计时：</text>
            <i-count-down
                    target="{{targetTime2}}"
                    @callback="myLinsterner"
                    clear-timer="{{clearTimer}}"
            ></i-count-down>
            <text>倒计时状态：{{status}}</text>
        </view>


        <view class="view-wrap">
            <text class="type-title">修改倒计时样式：</text>
            <i-count-down
                    target="{{targetTime}}"
                    countdown-class="big"
                    clear-timer="{{clearTimer}}"
            ></i-count-down>
        </view>
    </view>
</template>

<script>

import ICountDown from 'iview-weapp/dist/count-down/index';

export default {
    config: {
        title: '倒计时'
    },

    components: {
        ICountDown
    },

    data: {
        targetTime: 0,
        targetTime1: 0,
        myFormat: ['时', '分', '秒'],
        myFormat1: ['天', '时', '分', '秒'],
        status: '进行中...',
        clearTimer: false
    },

    onLoad() {
        this.setData({
            targetTime: new Date().getTime() + 6430000,
            targetTime1: new Date().getTime() + 86430000,
            targetTime2: new Date().getTime() + 10000
        });
    },
    onUnload() {
        this.setData({
            clearTimer: true
        });
    },

    methods: {
        myLinsterner(e) {
            this.setData({
                status: '结束'
            });
        }
    }
};
</script>

<style lang="css">
.view-wrap {
  padding: 10px 20px;
}

.type-title {
  padding: 10px 0;
}

.big {
  font-size: 20px;
  color: #3399FF;
  font-weight: bold;
}

</style>
