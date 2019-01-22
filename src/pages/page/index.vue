<template>
    <view class="comp-page">
        <i-panel title="带有文字的按钮"></i-panel>

        <i-page current="{{ current }}" total="5" @change="handleChange">
            <view slot="prev">Prev</view>
            <view slot="next">Next</view>
        </i-page>

        <i-panel title="带有文字和图标的按钮"></i-panel>

        <i-page current="{{ current }}" total="5" @change="handleChange">
            <view slot="prev">
                <i-icon type="return"></i-icon>
                上一步
            </view>
            <view slot="next">
                下一步
                <i-icon type="enter"></i-icon>
            </view>
        </i-page>

        <i-panel title="隐藏数字"></i-panel>

        <i-page current="{{ current }}" total="5" simple @change="handleChange">
            <view slot="prev">Prev</view>
            <view slot="next">Next</view>
        </i-page>

        <i-panel title="只显示数字"></i-panel>

        <i-page current="{{ current }}" total="5" mode="number" @change="handleChange"></i-page>

        <i-panel title="显示点"></i-panel>

        <i-page current="{{ current }}" total="5" mode="pointer" @change="handleChange"></i-page>
    </view>
</template>

<script>

import IIcon from 'iview-weapp/dist/icon/index';
import IPanel from 'iview-weapp/dist/panel/index';
import IPage from 'iview-weapp/dist/page/index';

export default {
    config: {
        title: 'Page 分页'
    },

    components: {
        IIcon,
        IPanel,
        IPage
    },

    data: {
        current: 1
    },

    methods: {
        handleChange ({ detail }) {
            const type = detail.type;
            if (type === 'next') {
                this.setData({
                    current: this.data.current + 1
                });
            } else if (type === 'prev') {
                this.setData({
                    current: this.data.current - 1
                });
            }
        }
    }
};
</script>

<style lang="css">
</style>
