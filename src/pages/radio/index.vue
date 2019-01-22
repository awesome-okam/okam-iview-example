<template>
    <view class="comp-page">
        <i-panel title="group-水果">
            <i-radio-group current="{{current}}" @change="handleFruitChange">
                <i-radio for="fruit" position="{{position}}" wx:key="{{item.id}}" value="{{item.name}}">
                </i-radio>
            </i-radio-group>
        </i-panel>

        <i-button @click="handleClick" type="ghost">切换单选框位置</i-button>

        <i-panel title="radio-动物">
            <i-radio value="{{animal}}" disabled="{{disabled}}" checked="{{checked}}" @change="handleAnimalChange">
            </i-radio>
        </i-panel>

        <i-button @click="handleDisabled" type="ghost">切换disabled状态</i-button>
    </view>
</template>

<script>

import IButton from 'iview-weapp/dist/button/index';
import IPanel from 'iview-weapp/dist/panel/index';
import IRadioGroup from 'iview-weapp/dist/radio-group/index';
import IRadio from 'iview-weapp/dist/radio/index';

export default {
    config: {
        title: 'Radio 单选'
    },

    components: {
        IButton,
        IPanel,
        IRadioGroup,
        IRadio
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
        current: '苹果',
        position: 'left',
        animal: '熊猫',
        checked: false,
        disabled: false
    },

    methods: {
        handleFruitChange({ detail = {} }) {
            this.setData({
                current: detail.value
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
