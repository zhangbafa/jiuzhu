// packages/[pkg].paths.js
export default {
    paths() {
      return formattedCities
    }
  }

  const cities = [
    '北京市', '天津市', '上海市', '重庆市', '黑龙江省', '吉林省', '辽宁省', '内蒙古自治区', '河北省', '山东省',
    '山西省', '河南省', '安徽省', '江苏省', '浙江省', '湖北省', '湖南省', '江西省', '福建省', '广东省',
    '广西壮族自治区', '海南省', '云南省', '贵州省', '四川省', '陕西省', '甘肃省', '宁夏回族自治区', '青海省', '西藏自治区',
    '新疆维吾尔自治区', '新疆生产建设兵团'
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