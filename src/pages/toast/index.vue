<template>
    <view class="comp-page">
        <i-button type="ghost" @click="handleText">只显示文本</i-button>
        <i-button type="ghost" @click="handleSuccess">成功</i-button>
        <i-button type="ghost" @click="handleWarning">警告</i-button>
        <i-button type="ghost" @click="handleError">错误</i-button>
        <i-button type="ghost" @click="handleLoading">Loading</i-button>
        <i-button type="ghost" @click="handleIcon">使用图标</i-button>
        <i-button type="ghost" @click="handleImage">使用自定义图片</i-button>
        <i-button type="ghost" @click="handleMask">无遮罩层</i-button>

        <i-toast id="toast" />
    </view>
</template>

<script>

import { $Toast } from 'iview-weapp/dist/base/index';
import IButton from 'iview-weapp/dist/button/index';
import IToast from 'iview-weapp/dist/toast/index';

export default {
    config: {
        title: 'Toast 轻提示'
    },

    components: {
        IButton,
        IToast
    },

    data: {
    },

    methods: {
        handleText () {
            $Toast({
                content: '这是文本提示'
            });
        },
        handleSuccess () {
            $Toast({
                content: '成功的提示',
                type: 'success'
            });
        },
        handleWarning () {
            $Toast({
                content: '警告的提示',
                type: 'warning'
            });
        },
        handleError () {
            $Toast({
                content: '错误的提示',
                type: 'error'
            });
        },
        handleLoading () {
            $Toast({
                content: '加载中',
                type: 'loading'
            });
        },
        handleIcon () {
            $Toast({
                content: '使用内置的图标',
                icon: 'praise'
            });
        },
        handleImage () {
            $Toast({
                content: '使用自定义图片',
                image: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
            });
        },
        handleMask () {
            $Toast({
                content: '5秒后自动关闭',
                icon: 'prompt',
                duration: 0,
                mask: false
            });
            setTimeout(() => {
                $Toast.hide();
            }, 5000);
        }
    }
};
</script>

<style lang="css">
</style>
