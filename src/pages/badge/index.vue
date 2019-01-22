<template>
    <view class="comp-page">
        <view class="container">
            <view class="demo">
                <i-badge dot>
                    <view class="demo-badge"></view>
                </i-badge>
            </view>
            <view class="demo">
                <i-badge count="3">
                    <view class="demo-badge"></view>
                </i-badge>
            </view>
            <view class="demo">
                <i-badge count="123" overflow-count="100">
                    <view class="demo-badge"></view>
                </i-badge>
            </view>
            <view class="demo">
                <i-badge count="66">
                </i-badge>
            </view>
            <view class="demo">
                <i-badge count="66" i-class-alone="demo-badge-alone">
                </i-badge>
            </view>
        </view>
    </view>
</template>

<script>

import IBadge from 'iview-weapp/dist/badge/index';

export default {
    config: {
        title: 'Badge 徽章'
    },

    components: {
        IBadge
    },

    data: {
    },

    methods: {

    }
};
</script>

<style lang="css">
.container {
    margin: 10px;
}

.demo {
    margin: 20px;
}

.demo-badge {
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
}

.demo-badge-alone {
    background: #5cb85c!important;
}
</style>
