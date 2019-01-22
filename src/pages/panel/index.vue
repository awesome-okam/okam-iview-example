<template>
    <view class="comp-page">
        <i-panel title="标题" hide-top>
            <view style="padding: 15px;">头部距离为 0 的 Panel</view>
        </i-panel>

        <i-panel title="标题">
            <view style="padding: 15px;">带有标题的 Panel</view>
        </i-panel>

        <i-panel title="标题" hide-border="{{ true }}">
            <view style="padding: 15px;">无边框的 Panel</view>
        </i-panel>
    </view>
</template>

<script>

import IButton from 'iview-weapp/dist/button/index';
import IPanel from 'iview-weapp/dist/panel/index';

export default {
    config: {
        title: 'Panel 面板'
    },

    components: {
        IButton,
        IPanel
    },

    data: {
    },

    methods: {

    }
};
</script>

<style lang="css">
</style>
