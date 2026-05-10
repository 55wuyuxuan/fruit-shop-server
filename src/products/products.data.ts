import { Product, Category } from './products.interface';

export { Product, Category };

export const products: Product[] = [
  // ============ 苹果类 ============
  {
    id: 1,
    name: '红富士苹果',
    price: 8.8,
    originalPrice: 12.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400',
    category: '苹果',
    description: '陕西红富士苹果，脆甜多汁，产自黄土高原优质产区。',
    stock: 100,
    tags: ['热销', '精选'],
    sales: 5432
  },
  {
    id: 2,
    name: '阿克苏冰糖心苹果',
    price: 15.8,
    originalPrice: 22.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400',
    category: '苹果',
    description: '新疆阿克苏冰糖心苹果，天山雪水灌溉，自然糖化。',
    stock: 80,
    tags: ['精选', '高端'],
    sales: 3456
  },
  {
    id: 3,
    name: '青苹果',
    price: 6.8,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400',
    category: '苹果',
    description: '国产青苹果，酸甜爽口，富含维生素C。',
    stock: 90,
    tags: ['时令'],
    sales: 1234
  },

  // ============ 香蕉类 ============
  {
    id: 4,
    name: '菲律宾进口香蕉',
    price: 5.8,
    originalPrice: 8.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
    category: '香蕉',
    description: '菲律宾进口香蕉，口感软糯，香甜可口。',
    stock: 150,
    tags: ['进口', '热销'],
    sales: 4321
  },
  {
    id: 5,
    name: '小米蕉',
    price: 4.5,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
    category: '香蕉',
    description: '国产小米蕉，个小味甜，适合老人小孩。',
    stock: 100,
    tags: [],
    sales: 2345
  },

  // ============ 草莓类 ============
  {
    id: 6,
    name: '丹东99草莓',
    price: 38.0,
    originalPrice: 48.0,
    unit: '盒',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400',
    category: '草莓',
    description: '辽宁丹东99草莓，个大味甜，牛奶灌溉。',
    stock: 60,
    tags: ['精选', '时令', '热销'],
    sales: 6543
  },
  {
    id: 7,
    name: '巧克力草莓',
    price: 45.0,
    unit: '盒',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400',
    category: '草莓',
    description: '日本品种巧克力草莓，口感独特，甜度高。',
    stock: 40,
    tags: ['精选', '高端'],
    sales: 3456
  },
  {
    id: 8,
    name: '奶油草莓',
    price: 35.0,
    originalPrice: 42.0,
    unit: '盒',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400',
    category: '草莓',
    description: '奶油草莓，口感绵软，入口即化。',
    stock: 70,
    tags: ['精选'],
    sales: 4321
  },

  // ============ 橙子类 ============
  {
    id: 9,
    name: '赣南脐橙',
    price: 7.8,
    originalPrice: 10.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400',
    category: '橙子',
    description: '江西赣南脐橙，国家地理标志产品，皮薄多汁。',
    stock: 120,
    tags: ['热销', '精选'],
    sales: 5678
  },
  {
    id: 10,
    name: '血橙',
    price: 12.8,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400',
    category: '橙子',
    description: '进口血橙，花青素含量高，美容养颜。',
    stock: 50,
    tags: ['进口', '精选'],
    sales: 2345
  },
  {
    id: 11,
    name: '爱媛果冻橙',
    price: 18.0,
    originalPrice: 25.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400',
    category: '橙子',
    description: '四川爱媛果冻橙，像果冻一样嫩滑，吸管可吸。',
    stock: 60,
    tags: ['精选', '高端'],
    sales: 4567
  },

  // ============ 葡萄类 ============
  {
    id: 12,
    name: '阳光玫瑰葡萄',
    price: 35.0,
    originalPrice: 48.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400',
    category: '葡萄',
    description: '日本阳光玫瑰葡萄，玫瑰香气，脆甜无籽。',
    stock: 50,
    tags: ['精选', '高端', '热销'],
    sales: 7890
  },
  {
    id: 13,
    name: '巨峰葡萄',
    price: 12.8,
    originalPrice: 16.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400',
    category: '葡萄',
    description: '辽宁巨峰葡萄，颗粒饱满，酸甜适中。',
    stock: 80,
    tags: ['精选'],
    sales: 5432
  },

  // ============ 芒果类 ============
  {
    id: 14,
    name: '台农芒果',
    price: 15.8,
    originalPrice: 20.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1553272725-086100aecf5e?w=400',
    category: '芒果',
    description: '台湾台农芒果，香气浓郁，甜度高。',
    stock: 70,
    tags: ['进口', '精选'],
    sales: 4567
  },
  {
    id: 15,
    name: '金煌芒果',
    price: 18.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1553272725-086100aecf5e?w=400',
    category: '芒果',
    description: '海南金煌芒果，肉质细腻，纤维极少。',
    stock: 60,
    tags: ['精选'],
    sales: 3456
  },

  // ============ 榴莲类 ============
  {
    id: 16,
    name: '泰国金枕榴莲',
    price: 29.8,
    originalPrice: 38.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1585683419597-c9af35973731?w=400',
    category: '榴莲',
    description: '泰国金枕榴莲，榴莲之王，香味浓郁。',
    stock: 40,
    tags: ['进口', '热销', '高端'],
    sales: 6789
  },
  {
    id: 17,
    name: '马来西亚猫山王',
    price: 68.0,
    originalPrice: 88.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1585683419597-c9af35973731?w=400',
    category: '榴莲',
    description: '马来西亚猫山王，树上自然成熟，口感极佳。',
    stock: 20,
    tags: ['进口', '高端'],
    sales: 3456
  },

  // ============ 西瓜类 ============
  {
    id: 18,
    name: '宁夏硒砂瓜',
    price: 2.5,
    originalPrice: 3.5,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400',
    category: '西瓜',
    description: '宁夏硒砂瓜，石头缝里长出的西瓜，甘甜如蜜。',
    stock: 100,
    tags: ['精选', '时令', '热销'],
    sales: 8765
  },
  {
    id: 19,
    name: '8424西瓜',
    price: 4.5,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400',
    category: '西瓜',
    description: '上海8424西瓜，瓜瓤脆嫩，甜度极高。',
    stock: 80,
    tags: ['精选'],
    sales: 5432
  },

  // ============ 火龙果类 ============
  {
    id: 20,
    name: '越南红心火龙果',
    price: 12.8,
    originalPrice: 16.0,
    unit: '个',
    image: 'https://images.unsplash.com/photo-1527325678964-54921661f888?w=400',
    category: '火龙果',
    description: '越南进口红心火龙果，花青素含量高。',
    stock: 70,
    tags: ['进口', '精选'],
    sales: 4321
  },
  {
    id: 21,
    name: '海南白心火龙果',
    price: 8.8,
    unit: '个',
    image: 'https://images.unsplash.com/photo-1527325678964-54921661f888?w=400',
    category: '火龙果',
    description: '海南白心火龙果，清甜爽口，热量低。',
    stock: 90,
    tags: [],
    sales: 3210
  },

  // ============ 猕猴桃类 ============
  {
    id: 22,
    name: '陕西徐香猕猴桃',
    price: 8.8,
    originalPrice: 12.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400',
    category: '猕猴桃',
    description: '陕西徐香猕猴桃，维C之王，酸甜可口。',
    stock: 100,
    tags: ['精选', '热销'],
    sales: 6543
  },
  {
    id: 23,
    name: '四川红心猕猴桃',
    price: 18.0,
    originalPrice: 25.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400',
    category: '猕猴桃',
    description: '四川红心猕猴桃，稀有品种，甜度更高。',
    stock: 60,
    tags: ['精选', '高端'],
    sales: 4321
  },

  // ============ 桃子类 ============
  {
    id: 24,
    name: '阳山水蜜桃',
    price: 25.0,
    originalPrice: 35.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400',
    category: '桃子',
    description: '江苏无锡阳山水蜜桃，可以吸的桃子，香甜多汁。',
    stock: 50,
    tags: ['精选', '高端', '时令'],
    sales: 5678
  },
  {
    id: 25,
    name: '北京平谷大桃',
    price: 12.8,
    originalPrice: 18.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400',
    category: '桃子',
    description: '北京平谷大桃，国家地理标志产品。',
    stock: 70,
    tags: ['精选'],
    sales: 3456
  },

  // ============ 李子类 ============
  {
    id: 26,
    name: '蜂糖李',
    price: 28.0,
    originalPrice: 38.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1596574169484-6bbb5f7d9e70?w=400',
    category: '李子',
    description: '贵州蜂糖李，如蜂蜜般甘甜，稀有品种。',
    stock: 40,
    tags: ['精选', '高端', '时令'],
    sales: 3456
  },
  {
    id: 27,
    name: '三华李',
    price: 15.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1596574169484-6bbb5f7d9e70?w=400',
    category: '李子',
    description: '广东信宜三华李，酸脆爽口，开胃消暑。',
    stock: 60,
    tags: ['精选', '时令'],
    sales: 2345
  },

  // ============ 柚子类 ============
  {
    id: 28,
    name: '福建平和蜜柚',
    price: 6.8,
    originalPrice: 9.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b4?w=400',
    category: '柚子',
    description: '福建平和蜜柚，个大皮薄，肉嫩多汁。',
    stock: 100,
    tags: ['精选', '热销'],
    sales: 6789
  },
  {
    id: 29,
    name: '泰国金柚',
    price: 22.0,
    originalPrice: 30.0,
    unit: '个',
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b4?w=400',
    category: '柚子',
    description: '泰国进口金柚，果肉晶莹，甜度高。',
    stock: 40,
    tags: ['进口', '高端'],
    sales: 345
  },

  // ============ 荔枝龙眼类 ============
  {
    id: 30,
    name: '妃子笑荔枝',
    price: 15.8,
    originalPrice: 22.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1589265867693-2e75a4f0dfd5?w=400',
    category: '荔枝',
    description: '海南妃子笑荔枝，一骑红尘妃子笑，肉厚核小。',
    stock: 50,
    tags: ['精选', '时令'],
    sales: 1654
  },
  {
    id: 31,
    name: '桂味荔枝',
    price: 22.8,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1589265867693-2e75a4f0dfd5?w=400',
    category: '荔枝',
    description: '广东从化桂味荔枝，带有桂花香气，口感极佳。',
    stock: 30,
    tags: ['精选', '高端'],
    sales: 876
  },
  {
    id: 32,
    name: '泰国龙眼',
    price: 12.8,
    originalPrice: 16.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=400',
    category: '龙眼',
    description: '泰国进口龙眼，果肉晶莹剔透，甜而不腻。',
    stock: 60,
    tags: ['进口'],
    sales: 654
  },

  // ============ 樱桃类 ============
  {
    id: 33,
    name: '智利车厘子',
    price: 48.0,
    originalPrice: 68.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400',
    category: '樱桃',
    description: '智利进口JJ级车厘子，个大味甜，品质优良。',
    stock: 30,
    tags: ['进口', '高端', '热销'],
    sales: 2345
  },
  {
    id: 34,
    name: '山东大樱桃',
    price: 35.0,
    originalPrice: 45.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400',
    category: '樱桃',
    description: '山东烟台大樱桃，国产精品，口感脆甜。',
    stock: 40,
    tags: ['精选'],
    sales: 1234
  },

  // ============ 椰子类 ============
  {
    id: 35,
    name: '泰国椰青',
    price: 8.8,
    originalPrice: 12.0,
    unit: '个',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400',
    category: '椰子',
    description: '泰国进口椰青，椰汁清甜，椰肉嫩滑。',
    stock: 60,
    tags: ['进口', '精选'],
    sales: 765
  },

  // ============ 菠萝类 ============
  {
    id: 36,
    name: '海南金钻凤梨',
    price: 6.8,
    originalPrice: 8.5,
    unit: '个',
    image: 'https://images.unsplash.com/photo-1587731556938-38755b4803a6?w=400',
    category: '菠萝',
    description: '海南金钻凤梨，无需泡盐水，直接食用。',
    stock: 80,
    tags: ['精选'],
    sales: 543
  },

  // ============ 哈密瓜类 ============
  {
    id: 37,
    name: '新疆哈密瓜',
    price: 5.8,
    originalPrice: 7.5,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-156479908-1e2c2e5e8b1f?w=400',
    category: '哈密瓜',
    description: '新疆吐鲁番哈密瓜，瓜中之王，香甜如蜜。',
    stock: 90,
    tags: ['精选'],
    sales: 987
  },
  {
    id: 38,
    name: '玉菇甜瓜',
    price: 12.8,
    originalPrice: 16.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-156479908-1e2c2e5e8b1f?w=400',
    category: '哈密瓜',
    description: '山东玉菇甜瓜，口感软糯，香气浓郁。',
    stock: 70,
    tags: [],
    sales: 432
  },

  // ============ 枇杷类 ============
  {
    id: 39,
    name: '四川枇杷',
    price: 18.0,
    originalPrice: 25.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1598177667640-3a26c6c7bd0e?w=400',
    category: '枇杷',
    description: '四川米易枇杷，个大肉厚，润肺止咳。',
    stock: 50,
    tags: ['精选', '时令'],
    sales: 654
  },

  // ============ 山楂类 ============
  {
    id: 40,
    name: '新鲜山楂',
    price: 8.8,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1596574169484-6bbb5f7d9e70?w=400',
    category: '山楂',
    description: '山东新鲜山楂，酸甜开胃，健脾消食。',
    stock: 60,
    tags: ['时令'],
    sales: 321
  },

  // ============ 甘蔗类 ============
  {
    id: 41,
    name: '广西黑皮甘蔗',
    price: 3.8,
    unit: '根',
    image: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=400',
    category: '甘蔗',
    description: '广西黑皮甘蔗，节长甜度高，清热润肺。',
    stock: 50,
    tags: ['时令'],
    sales: 456
  },

  // ============ 柿子类 ============
  {
    id: 42,
    name: '陕西富平柿子',
    price: 6.8,
    originalPrice: 9.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400',
    category: '柿子',
    description: '陕西富平柿饼专用柿子，软糯香甜。',
    stock: 70,
    tags: ['精选'],
    sales: 543
  },

  // ============ 百香果类 ============
  {
    id: 43,
    name: '云南百香果',
    price: 12.8,
    originalPrice: 16.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=400',
    category: '百香果',
    description: '云南西双版纳百香果，香气浓郁，酸甜可口。',
    stock: 50,
    tags: ['精选'],
    sales: 432
  },

  // ============ 杨梅类 ============
  {
    id: 44,
    name: '仙居东魁杨梅',
    price: 38.0,
    originalPrice: 50.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400',
    category: '杨梅',
    description: '浙江仙居东魁杨梅，乒乓球大小，酸甜多汁。',
    stock: 20,
    tags: ['精选', '时令', '高端'],
    sales: 876
  },

  // ============ 蓝莓类 ============
  {
    id: 45,
    name: '云南蓝莓',
    price: 35.0,
    originalPrice: 48.0,
    unit: '盒',
    image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400',
    category: '蓝莓',
    description: '云南新鲜蓝莓，花青素之王，保护视力。',
    stock: 40,
    tags: ['精选'],
    sales: 987
  },

  // ============ 椰枣类 ============
  {
    id: 46,
    name: '迪拜椰枣',
    price: 45.0,
    originalPrice: 58.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400',
    category: '其他',
    description: '迪拜进口椰枣，纯天然甜品，营养丰富。',
    stock: 30,
    tags: ['进口', '高端'],
    sales: 234
  },

  // ============ 牛油果类 ============
  {
    id: 47,
    name: '墨西哥牛油果',
    price: 8.8,
    originalPrice: 12.0,
    unit: '个',
    image: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=400',
    category: '牛油果',
    description: '墨西哥进口牛油果，成熟度高，口感绵密。',
    stock: 60,
    tags: ['进口'],
    sales: 654
  },

  // ============ 释迦类 ============
  {
    id: 48,
    name: '台湾释迦果',
    price: 28.0,
    originalPrice: 35.0,
    unit: '个',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400',
    category: '释迦',
    description: '台湾进口释迦果，口感绵密，甜度极高。',
    stock: 25,
    tags: ['进口', '高端'],
    sales: 345
  },

  // ============ 莲雾类 ============
  {
    id: 49,
    name: '台湾黑金刚莲雾',
    price: 22.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=400',
    category: '莲雾',
    description: '台湾黑金刚莲雾，清脆多汁，清热润肺。',
    stock: 30,
    tags: ['进口', '精选'],
    sales: 234
  },

  // ============ 人参果类 ============
  {
    id: 50,
    name: '云南人参果',
    price: 9.9,
    originalPrice: 12.0,
    unit: '斤',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400',
    category: '其他',
    description: '云南石林人参果，低糖健康，清甜可口。',
    stock: 50,
    tags: ['精选'],
    sales: 432
  }
];

export const categories: Category[] = [
  { id: 'all', name: '全部', icon: 'Grid3x3' },
  { id: '苹果', name: '苹果', icon: 'Apple' },
  { id: '香蕉', name: '香蕉', icon: 'Banana' },
  { id: '草莓', name: '草莓', icon: 'Cherry' },
  { id: '橙子', name: '橙子', icon: 'Orange' },
  { id: '葡萄', name: '葡萄', icon: 'Grape' },
  { id: '芒果', name: '芒果', icon: 'Mango' },
  { id: '榴莲', name: '榴莲', icon: 'Durian' },
  { id: '西瓜', name: '西瓜', icon: 'Watermelon' },
  { id: '火龙果', name: '火龙果', icon: 'Pitaya' },
  { id: '猕猴桃', name: '猕猴桃', icon: 'Kiwi' },
  { id: '桃子', name: '桃子', icon: 'Peach' },
  { id: '李子', name: '李子', icon: 'Plum' },
  { id: '柚子', name: '柚子', icon: 'Grapefruit' },
  { id: '荔枝', name: '荔枝', icon: 'Lychee' },
  { id: '龙眼', name: '龙眼', icon: 'Longan' },
  { id: '樱桃', name: '樱桃', icon: 'Cherry' },
  { id: '椰子', name: '椰子', icon: 'Coconut' },
  { id: '菠萝', name: '菠萝', icon: 'Pineapple' },
  { id: '哈密瓜', name: '哈密瓜', icon: 'Melon' },
  { id: '枇杷', name: '枇杷', icon: 'Loquat' },
  { id: '山楂', name: '山楂', icon: 'Hawthorn' },
  { id: '百香果', name: '百香果', icon: 'Passion' },
  { id: '杨梅', name: '杨梅', icon: 'Yangmei' },
  { id: '蓝莓', name: '蓝莓', icon: 'Blueberry' },
  { id: '牛油果', name: '牛油果', icon: 'Avocado' },
  { id: '其他', name: '其他', icon: 'MoreHorizontal' }
];
