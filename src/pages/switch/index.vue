<template>
    <view class="comp-page">
        <i-cell-group>
            <i-cell title="基本用法">
                <i-switch value="{{switch1}}" @change="onChange" slot="footer"></i-switch>
            </i-cell>
            <i-cell title="自定义内容">
                <i-switch value="{{switch1}}" size="large" @change="onChange" slot="footer">
                    <view slot="open">开启</view>
                    <view slot="close">关闭</view>
                </i-switch>
            </i-cell>
            <i-cell title="图标">
                <i-switch value="{{switch1}}" @change="onChange" slot="footer">
                    <i-icon type="right" slot="open"></i-icon>
                    <i-icon type="close" slot="close"></i-icon>
                </i-switch>
            </i-cell>
            <i-cell title="禁止切换">
                <i-switch value="{{switch1}}" disabled="{{true}}" slot="footer"></i-switch>
            </i-cell>
        </i-cell-group>
    </view>
</template>

<script>

import ISwitch from 'iview-weapp/dist/switch/index';
import IIcon from 'iview-weapp/dist/icon/index';
import ICellGroup from 'iview-weapp/dist/cell-group/index';
import ICell from 'iview-weapp/dist/cell/index';
import IPanel from 'iview-weapp/dist/panel/index';

export default {
    config: {
        title: 'Switch 开关'
    },

    components: {
        ISwitch,
        IIcon,
        ICellGroup,
        ICell,
        IPanel
    },

    data: {
        switch1 : false
    },

    methods: {
        onChange(event){
            const detail = event.detail;
            this.setData({
                'switch1' : detail.value
            })

        }
    }
};
</script>

<style lang="css">
</style>
