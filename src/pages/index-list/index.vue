<template>
    <view class="comp-page">
        <view class="i-index-demo">
            <i-index height="100%" @change="onChange">
                <i-index-item
                    for="(item, index) in cities"
                    name="{{item.key}}">
                    <view
                        class="i-index-demo-item"
                        for="(it, idx) in item.list">
                        {{it.name}}
                    </view>
                </i-index-item>
            </i-index>
        </view>
    </view>
</template>

<script>

import IIndex from 'iview-weapp/dist/index/index';
import IIndexItem from 'iview-weapp/dist/index-item/index';
import { cities } from './city';

export default {
    config: {
        title: 'index 索引选择器'
    },

    components: {
        IIndex,
        IIndexItem
    },

    data: {
        cities : []
    },

    onReady(){
        let storeCity = new Array(26);
        const words = [
            'A','B','C','D',
            'E','F','G','H',
            'I','J','K','L',
            'M','N','O','P',
            'Q','R','S','T',
            'U','V','W','X',
            'Y','Z'
        ];
        words.forEach((item,index)=>{
            storeCity[index] = {
                key : item,
                list : []
            }
        });
        cities.forEach((item)=>{
            let firstName = item.pinyin.substring(0,1);
            let index = words.indexOf( firstName );
            storeCity[index].list.push({
                name : item.name,
                key : firstName
            });
        })
        this.data.cities = storeCity;
        this.setData({
            cities : this.data.cities
        });
    },

    methods: {
        onChange(event){
            console.log(event.detail,'click right menu callback data')
        }
    }
};
</script>

<style lang="css">
.i-index-demo,
page {
    width: 100%;
    height: 100%;
}
.i-index-demo-item {
    padding: 10px;
    border-bottom: #ddd solid 1px;
    font-size: 14px;
}
</style>
