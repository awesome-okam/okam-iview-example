<template>
    <view class="comp-page">
        <i-load-more />
        <i-load-more tip="暂无数据" loading="{{ false }}" />
        <i-load-more loading="{{ false }}" />
    </view>
</template>

<script>

import ILoadMore from 'iview-weapp/dist/load-more/index';

export default {
    config: {
        title: 'LoadMore 页底提示'
    },

    components: {
        ILoadMore
    },

    data: {
    },

    methods: {

    }
};
</script>

<style lang="css">

</style>
