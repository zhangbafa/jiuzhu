// packages/[pkg].paths.js
export default {
    paths() {
      return formattedCities
    }
  }

  const cities = [
    '北京', '天津', '上海', '重庆', '黑龙江', '吉林', '辽宁', '内蒙古', '河北', '山东',
    '山西', '河南', '安徽', '江苏', '浙江', '湖北', '湖南', '江西', '福建', '广东',
    '广西', '海南', '云南', '贵州', '四川', '陕西', '甘肃', '宁夏', '青海', '西藏',
    '新疆', '兵团'
  ];

  const pinyinCities = [
    'beijing', 'tianjin', 'shanghai', 'chongqing', 'heilongjiang', 'jilin', 'liaoning', 'neimenggu', 'hebei', 'shandong',
    'shanxi', 'henan', 'anhui', 'jiangsu', 'zhejiang', 'hubei', 'hunan', 'jiangxi', 'fujian', 'guangdong',
    'guangxi', 'hainan', 'yunnan', 'guizhou', 'sichuan', 'shanxi', 'gansu', 'ningxia', 'qinghai', 'xizang',
    'xinjiang', 'bingtuan'
  ];
  

  const formattedCities = cities.map(city => {
    return {
      params:{pkg:city}
    };
  });