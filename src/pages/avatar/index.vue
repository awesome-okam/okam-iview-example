<template>
    <view class="comp-page">
        <i-panel title="圆形"></i-panel>
        <i-row i-class="row-class">
            <i-col span="8">
                <i-avatar size="small">梁</i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar>梁</i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar size="large">梁</i-avatar>
            </i-col>
        </i-row>

        <i-panel title="方形"></i-panel>

        <i-row i-class="row-class">
            <i-col span="8">
                <i-avatar size="small" shape="square">A</i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar shape="square">A</i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar size="large" shape="square">A</i-avatar>
            </i-col>
        </i-row>

        <i-row i-class="row-class">
            <i-col span="8"></i-col>
            <i-col span="8"></i-col>
            <i-col span="8"></i-col>
        </i-row>

        <i-panel title="图片"></i-panel>

        <i-row i-class="row-class">
            <i-col span="8">
                <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small"></i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="default"></i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"></i-avatar>
            </i-col>
        </i-row>

        <i-row i-class="row-class">
            <i-col span="8">
                <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small" shape="square"></i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="default" shape="square"></i-avatar>
            </i-col>
            <i-col span="8">
                <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large" shape="square"></i-avatar>
            </i-col>
        </i-row>
    </view>
</template>

<script>

import IAvatar from 'iview-weapp/dist/avatar/index';
import IRow from 'iview-weapp/dist/row/index';
import ICol from 'iview-weapp/dist/col/index';
import IPanel from 'iview-weapp/dist/panel/index';

export default {
    config: {
        title: 'Avatar 头像'
    },

    components: {
        IAvatar,
        IRow,
        ICol,
        IPanel
    },

    data: {
    },

    methods: {

    }
};
</script>

<style lang="stylus">
</style>
