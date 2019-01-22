<template>
    <view class="comp-page">
        <i-panel title="基础用法">
            <view style="padding: 16px">
                <i-input-number value="{{ value1 }}" min="0" max="100" @change="handleChange1" />
            </view>
        </i-panel>

        <i-panel title="小数">
            <view style="padding: 16px">
                <i-input-number value="{{ value2 }}" min="0" max="100" step="0.2" @change="handleChange2" />
            </view>
        </i-panel>
    </view>
</template>

<script>

import IInputNumber from 'iview-weapp/dist/input-number/index';
import IPanel from 'iview-weapp/dist/panel/index';

export default {
    config: {
        title: 'InputNumber 数字输入框'
    },

    components: {
        IInputNumber,
        IPanel
    },

    data: {
        value1: 1,
        value2: 0.1
    },

    methods: {
        handleChange1 ({ detail }) {
            this.setData({
                value1: detail.value
            });
        },

        handleChange2 ({ detail }) {
            this.setData({
                value2: detail.value
            });
        }
    }
};
</script>

<style lang="css">
</style>
