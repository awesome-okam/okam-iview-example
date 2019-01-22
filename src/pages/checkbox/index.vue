<template>
    <view class="comp-page">
        <i-panel title="group-水果">
            <i-checkbox-group current="{{current}}" @change="handleFruitChange">
                <i-checkbox for="fruit" position="{{position}}" wx:key="{{item.id}}" value="{{item.name}}">
                </i-checkbox>
            </i-checkbox-group>
        </i-panel>

        <i-button @click="handleClick" type="ghost">切换复选框位置</i-button>

        <i-panel title="checkbox-动物">
            <i-checkbox value="{{animal}}" disabled="{{disabled}}" checked="{{checked}}" @change="handleAnimalChange">
            </i-checkbox>
        </i-panel>

        <i-button @click="handleDisabled" type="ghost">切换disabled状态</i-button>
    </view>
</template>

<script>

import IButton from 'iview-weapp/dist/button/index';
import IPanel from 'iview-weapp/dist/panel/index';
import ICheckboxGroup from 'iview-weapp/dist/checkbox-group/index';
import ICheckbox from 'iview-weapp/dist/checkbox/index';

export default {
    config: {
        title: 'Checkbox 复选'
    },

    components: {
        IButton,
        IPanel,
        ICheckboxGroup,
        ICheckbox
    },

    data: {
        fruit: [{
            id: 1,
            name: '香蕉',
        }, {
            id: 2,
            name: '苹果'
        }, {
            id: 3,
            name: '西瓜'
        }, {
            id: 4,
            name: '葡萄',
        }],
        current: ['苹果', '葡萄'],
        position: 'left',
        animal: '熊猫',
        checked: false,
        disabled: false,
    },

    methods: {
        handleFruitChange({ detail = {} }) {
            const index = this.data.current.indexOf(detail.value);
            index === -1 ? this.data.current.push(detail.value) : this.data.current.splice(index, 1);
            this.setData({
                current: this.data.current
            });
        },
        handleClick() {
            this.setData({
                position: this.data.position.indexOf('left') !== -1 ? 'right' : 'left',
            });
        },
        handleDisabled() {
            this.setData({
                disabled: !this.data.disabled
            });
        },
        handleAnimalChange({ detail = {} }) {
            this.setData({
                checked: detail.current
            });
        }
    }
};
</script>

<style lang="css">
</style>
