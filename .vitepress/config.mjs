import { defineConfig } from 'vitepress'

const cities = [
  '北京', '天津', '上海', '重庆', '黑龙江', '吉林', '辽宁', '内蒙古', '河北', '山东',
  '山西', '河南', '安徽', '江苏', '浙江', '湖北', '湖南', '江西', '福建', '广东',
  '广西', '海南', '云南', '贵州', '四川', '陕西', '甘肃', '宁夏', '青海', '西藏',
  '新疆', '兵团'
];

const formattedCities = cities.map(city => {
  return {
    text: city,
    link: `/area/${city}`
  };
});


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "全国救助站一览表",
  description: "全国救助站,救助站，救助管理机构",
  lang:'zh',
  themeConfig: {
    siteTitle: 'My Custom Title',
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: [
      {
        // text: '救助管理机构名录',
        items: formattedCities
      }
    ],

    
  }
})
