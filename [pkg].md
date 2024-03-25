---
title: 北京救助站
---

# {{$params.pkg}}
> 前往救助站前，务必打电话确认
<div class="info custom-block" v-for="(item,index) in list" :key="index">
<p class="custom-block-title">{{item.name}}</p>
<p>{{ item.phone }}</p>
<p>{{item.address}}</p>
</div>


<script setup>
import {ref} from 'vue'
import { useData } from 'vitepress'
import data from './data.js'
const {params} = useData()
const area = params.value.pkg
const list = data[area]
</script>
