<template>
    <view class="comp-page">
        <i-panel title="基本用法"></i-panel>

        <i-tab-bar current="{{ current }}" @change="handleChange">
            <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="Home"></i-tab-bar-item>
            <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="Friends"></i-tab-bar-item>
            <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" count="3" title="Notice"></i-tab-bar-item>
            <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="My"></i-tab-bar-item>
        </i-tab-bar>

        <i-panel title="自定义主题色"></i-panel>

        <i-tab-bar current="{{ current }}" color="#f759ab" @change="handleChange">
            <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
            <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="朋友"></i-tab-bar-item>
            <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" title="通知"></i-tab-bar-item>
            <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
        </i-tab-bar>
    </view>
</template>

<script>

import ITabBar from 'iview-weapp/dist/tab-bar/index';
import ITabBarItem from 'iview-weapp/dist/tab-bar-item/index';
import IPanel from 'iview-weapp/dist/panel/index';

export default {
    config: {
        title: 'TabBar 标签栏'
    },

    components: {
        ITabBar,
        ITabBarItem,
        IPanel
    },

    data: {
        current: 'homepage'
    },

    methods: {
        handleChange ({ detail }) {
            this.setData({
                current: detail.key
            });
        }
    }
};
</script>

<style lang="css">
</style>
