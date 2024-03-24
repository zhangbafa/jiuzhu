---
title: 救助站
---

# {{$params.pkg}}
> 前往救助站前，务必打电话确认
<div class="info custom-block" v-for="(item,index) in data" :key="index">
<p class="custom-block-title">{{item.name}}</p>
<p>{{ item.phone }}</p>
<p>{{item.address}}</p>
</div>


<script setup>
import {ref} from 'vue'
import { useData } from 'vitepress'

const data = ref([])
const { params } = useData()
const area = params.value.pkg
const filename = `/public/${area}.json`
// const loadData = async () =>{
//    const response = await fetch(filename);
//    data.value = await response.json();
// }
// loadData()

import('../public/北京.json')
  .then(response => {
    // 处理响应
    console.log(response.default)
    data.value = response.default
  })
  .catch(error => {
    // 处理错误
  });

</script>
