<template>
    <view class="comp-page">
        <view class="progress-item">
            <i-progress percent="25"></i-progress>
            <i-progress percent="45" status="active"></i-progress>
            <i-progress percent="65" status="wrong"></i-progress>
            <i-progress percent="100" status="success"></i-progress>
            <i-progress percent="25" hide-info></i-progress>
        </view>
        <view class="progress-item">
            <i-progress percent="{{ percent }}" status="{{ status }}"></i-progress>
            <i-button @click="handleAdd" type="ghost">增加</i-button>
            <i-button @click="handleReduce" type="ghost">减少</i-button>
        </view>
    </view>
</template>

<script>

import IButton from 'iview-weapp/dist/button/index';
import IProgress from 'iview-weapp/dist/progress/index';

export default {
    config: {
        title: 'iView Weapp 支持'
    },

    components: {
        IButton,
        IProgress
    },

    data: {
        percent: 0,
        status: 'normal'
    },

    methods: {
        handleAdd () {
            if (this.data.percent === 100) return;
            this.setData({
                percent: this.data.percent + 10
            });
            if (this.data.percent === 100) {
                this.setData({
                    status: 'success'
                });
            }
        },
        handleReduce () {
            if (this.data.percent === 0) return;
            this.setData({
                percent: this.data.percent - 10,
                status: 'normal'
            });
        }
    }
};
</script>

<style lang="css">
.progress-item {
    padding: 12px;
}
</style>
