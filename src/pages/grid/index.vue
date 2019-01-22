<template>
    <view class="comp-page">
        <i-grid>
            <i-row>
                <i-grid-item>
                    <i-grid-icon>
                        <i-icon size="24" type="activity" />
                        <i-grid-label>宫格</i-grid-label>
                    </i-grid-icon>
                </i-grid-item>
                <i-grid-item>
                    <i-grid-icon>
                        <i-icon size="24" type="addressbook" />
                        <i-grid-label>宫格</i-grid-label>
                    </i-grid-icon>
                </i-grid-item>
                <i-grid-item>
                    <i-grid-icon>
                        <i-icon size="24" type="barrage" />
                        <i-grid-label>宫格</i-grid-label>
                    </i-grid-icon>
                </i-grid-item>
            </i-row>
            <i-row>
                <i-grid-item>
                    <i-grid-icon>
                        <i-icon size="24" type="collection" />
                        <i-grid-label>宫格</i-grid-label>
                    </i-grid-icon>
                </i-grid-item>
                <i-grid-item>
                    <i-grid-icon>
                        <i-icon size="24" type="computer" />
                        <i-grid-label>宫格</i-grid-label>
                    </i-grid-icon>
                </i-grid-item>
                <i-grid-item>
                    <i-grid-icon>
                        <i-icon size="24" type="coupons" />
                        <i-grid-label>宫格</i-grid-label>
                    </i-grid-icon>
                </i-grid-item>
            </i-row>
            <i-row>
                <i-grid-item>
                    <i-grid-icon>
                        <i-icon size="24" type="flag" />
                        <i-grid-label>宫格</i-grid-label>
                    </i-grid-icon>
                </i-grid-item>
                <i-grid-item>
                    <i-grid-icon>
                        <i-icon size="24" type="interactive" />
                        <i-grid-label>宫格</i-grid-label>
                    </i-grid-icon>
                </i-grid-item>
                <i-grid-item>
                    <i-grid-icon>
                        <i-icon size="24" type="mail" />
                        <i-grid-label>宫格</i-grid-label>
                    </i-grid-icon>
                </i-grid-item>
            </i-row>
        </i-grid>
    </view>
</template>

<script>

import IGrid from 'iview-weapp/dist/grid/index';
import IGridItem from 'iview-weapp/dist/grid-item/index';
import IGridIcon from 'iview-weapp/dist/grid-icon/index';
import IGridLabel from 'iview-weapp/dist/grid-label/index';
import IIcon from 'iview-weapp/dist/icon/index';
import IRow from 'iview-weapp/dist/row/index';

export default {
    config: {
        title: 'Grid 宫格'
    },

    components: {
        IGrid,
        IGridItem,
        IGridIcon,
        IGridLabel,
        IIcon,
        IRow
    },

    data: {
        isAdd: false
    },

    methods: {
        handleAdd () {
            this.setData({
                isAdd: !this.data.isAdd
            })
        }
    }
};
</script>

<style lang="css">
.row-class {
    background: #fff;
}
.col-class {
    height: 32px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    background: #2d8cf0;
    font-size: 12px;
}
.col-class.light {
    background: #5cadff;
}
</style>
