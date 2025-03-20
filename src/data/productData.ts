
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "尼泊尔手工金刚结吉祥护身珠",
    category: "护身珠",
    categoryId: 1,
    price: "299",
    originalPrice: "399",
    discount: "25%",
    rating: 4.8,
    reviewCount: 128,
    soldCount: 368,
    createdAt: 1708502400000, // 2024-02-21
    images: [
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    descriptionImages: [
      "https://images.unsplash.com/photo-1570467143953-9488e91107fd?q=80&w=1974",
      "https://images.unsplash.com/photo-1623691754257-a89ce2b25cc5?q=80&w=1978",
      "https://images.unsplash.com/photo-1558525924-47a3b1557392?q=80&w=2070",
      "https://images.unsplash.com/photo-1551893134-3026dae8e35a?q=80&w=2070"
    ],
    colors: ["红色", "黑色", "天然色"],
    sizes: ["7mm", "8mm", "10mm"],
    highlights: [
      "纯手工制作，无机械雕刻",
      "采用喜马拉雅山地天然材料",
      "经过尼泊尔高僧加持，具有护身辟邪效果",
      "每件产品都独一无二，纹理自然",
      "适合日常佩戴与冥想修行"
    ],
    description: [
      "这款尼泊尔手工金刚结吉祥护身珠是由尼泊尔传统工匠纯手工制作，采用喜马拉雅山区特有的天然材料，经由尼泊尔高僧念经加持，具有护身辟邪、增强气场的功效。",
      "金刚结是藏传佛教中的吉祥结绳，象征着佛法的无坚不摧与圆满。每个金刚结都由工匠精心编织而成，需要经过多道工序，体现了尼泊尔传统工艺的精湛技艺。",
      "佩戴此护身珠，能够帮助净化心灵，提升气场，增强个人能量场，为佩戴者带来平安吉祥。无论是日常佩戴还是冥想修行时使用，都能感受到来自喜马拉雅的神秘能量。",
      "这款护身珠采用传统制作工艺，保留了材料的天然纹理，每一件成品都独一无二，纹理、色泽略有差异，这正是手工艺品的独特魅力所在。"
    ],
    specifications: [
      { name: "材料", value: "天然玛瑙/檀木/绿松石" },
      { name: "尺寸", value: "7mm/8mm/10mm" },
      { name: "重量", value: "约30-45g（因尺寸而异）" },
      { name: "产地", value: "尼泊尔加德满都" },
      { name: "工艺", value: "传统手工雕刻" },
      { name: "包装", value: "高档礼盒包装" },
      { name: "附赠", value: "绒布袋、开光证书" },
      { name: "适用人群", value: "男女皆宜" }
    ],
    usageGuide: [
      "初次佩戴前，可点上一柱清香，双手合十，默念心愿，增强与护身珠的链接。",
      "日常佩戴时，尽量避免与水、香水、化妆品等液体接触，以保持材质原有的能量。",
      "佩戴后，若感觉不适，可取下静置一天后再佩戴。",
      "建议定期在月光下静置一晚，为护身珠充能。",
      "使用专用的绒布袋存放，避免与其他首饰磕碰造成损伤。"
    ],
    careInstructions: [
      "避免接触水、香水、化妆品等液体",
      "避免高温环境和阳光直射",
      "定期用柔软干布轻轻擦拭表面",
      "不佩戴时请存放在附赠的绒布袋中",
      "每月可在月光下静置一晚为其充能"
    ],
    reviews: [
      {
        id: 1,
        userName: "李明",
        userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        rating: 5,
        date: "2023-12-05",
        purchaseDetails: "尺寸: 8mm, 颜色: 天然色",
        content: "收到实物比图片还要好看！质感非常棒，能感受到手工制作的独特质感。佩戴后确实感觉能量场有所增强，工作顺利了很多。包装也很精致，送礼自用都很合适。",
        images: [
          "https://images.unsplash.com/photo-1603398922160-33ee5a98c409?q=80&w=2070",
          "https://images.unsplash.com/photo-1571351507328-bed9820cb909?q=80&w=2056"
        ],
        helpfulCount: 42
      },
      {
        id: 2,
        userName: "王芳",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        rating: 4,
        date: "2023-11-28",
        purchaseDetails: "尺寸: 7mm, 颜色: 红色",
        content: "产品很精致，但比我想象中要小一些。不过做工确实精良，能看出是纯手工打造的。佩戴起来很舒适，已经戴了一周，感觉运气确实好了一些。物流也很快，五天就收到了。",
        helpfulCount: 18,
        sellerReply: "感谢您的评价！护身珠的尺寸在商品描述中有详细说明，7mm确实偏小一些，适合女性佩戴。如果您希望更有存在感，建议选择8mm或10mm的尺寸。祝您佩戴愉快！"
      },
      {
        id: 3,
        userName: "张伟",
        userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        rating: 5,
        date: "2023-11-15",
        purchaseDetails: "尺寸: 10mm, 颜色: 黑色",
        content: "作为瑜伽爱好者，这款护身珠完全符合我的期待。佩戴后冥想时能明显感到能量流动更为顺畅。黑色款式很百搭，日常穿搭也很合适。喜欢它的分量感，不轻不重刚刚好。开光证书很有收藏价值，整体很满意！",
        images: [
          "https://images.unsplash.com/photo-1610483178762-ffa2ed448a36?q=80&w=1974"
        ],
        helpfulCount: 36
      },
      {
        id: 4,
        userName: "刘静",
        userAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        rating: 5,
        date: "2023-10-22",
        purchaseDetails: "尺寸: 8mm, 颜色: 天然色",
        content: "这是我第二次购买了，第一次买来送朋友，她非常喜欢，这次是给自己买的。材质很棒，能感受到能量，佩戴起来也很舒服。最近工作和生活都很顺利，不知是不是因为这个护身珠的功劳。总之很满意这次购买！",
        helpfulCount: 27
      },
      {
        id: 5,
        userName: "赵强",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        rating: 3,
        date: "2023-09-18",
        purchaseDetails: "尺寸: 10mm, 颜色: 红色",
        content: "护身珠品质不错，但物流有点慢，足足等了两周才收到。包装有点简陋，好在产品本身没有损坏。佩戴效果还在观察中，希望能有所感应。",
        helpfulCount: 9,
        sellerReply: "非常抱歉因物流原因让您久等了。我们正在积极改进物流环节，以提供更好的购物体验。关于包装问题，我们也会认真考虑您的建议。如有任何疑问，欢迎随时联系客服。"
      }
    ]
  },
  {
    id: 2,
    title: "喜马拉雅红玛瑙能量手链",
    category: "手链",
    categoryId: 2,
    price: "399",
    originalPrice: "499",
    discount: "20%",
    rating: 4.5,
    reviewCount: 85,
    soldCount: 213,
    createdAt: 1709020800000, // 2024-02-27
    images: [
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    colors: ["红色", "粉色"],
    sizes: ["S", "M", "L"],
    highlights: [
      "采用喜马拉雅天然红玛瑙",
      "手工打磨，每颗珠子均匀饱满",
      "传统工艺编织，结实耐用",
      "有助于提升能量，增强自信"
    ],
    reviews: []
  },
  {
    id: 3,
    title: "藏式五行平衡手串",
    category: "手串",
    categoryId: 3,
    price: "249",
    rating: 4.7,
    reviewCount: 63,
    soldCount: 175,
    createdAt: 1708675200000, // 2024-02-23
    images: [
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    colors: ["混合色"],
    highlights: [
      "五种天然石材代表五行元素",
      "帮助平衡身心能量",
      "适合冥想和修行时使用",
      "纯手工编织，每一件都独一无二"
    ],
    reviews: []
  },
  {
    id: 4,
    title: "尼泊尔圣湖能量水晶",
    category: "水晶",
    categoryId: 4,
    price: "599",
    originalPrice: "899",
    discount: "33%",
    rating: 4.9,
    reviewCount: 42,
    soldCount: 89,
    createdAt: 1711670400000, // 2024-03-29
    images: [
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070"
    ],
    sizes: ["小", "中", "大"],
    highlights: [
      "产自尼泊尔圣湖周边",
      "天然形成，未经人工处理",
      "能量场强大，净化空间",
      "附送专业鉴定证书"
    ],
    reviews: []
  },
  {
    id: 5,
    title: "西藏老山小叶紫檀佛珠",
    category: "手串",
    categoryId: 3,
    price: "799",
    originalPrice: "999",
    discount: "20%",
    rating: 4.8,
    reviewCount: 56,
    soldCount: 132,
    createdAt: 1707552000000, // 2024-02-10
    images: [
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    colors: ["棕红色"],
    sizes: ["8mm", "10mm", "12mm"],
    highlights: [
      "选用30年以上老山小叶紫檀",
      "木质细腻，油性十足",
      "纯手工打磨，光泽度佳",
      "佩戴舒适，气韵十足"
    ],
    reviews: []
  },
  {
    id: 6,
    title: "南红玛瑙平安扣吊坠",
    category: "吊坠",
    categoryId: 5,
    price: "1299",
    rating: 4.9,
    reviewCount: 38,
    soldCount: 67,
    createdAt: 1709452800000, // 2024-03-03
    images: [
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070"
    ],
    colors: ["火焰红", "樱桃红"],
    sizes: ["3.5cm", "4cm"],
    highlights: [
      "选用云南保山顶级南红玛瑙",
      "纯手工雕刻，工艺精湛",
      "色泽鲜艳，质地温润",
      "经高僧开光，镇宅辟邪"
    ],
    reviews: []
  },
  {
    id: 7,
    title: "天然黑曜石太极八卦护身符",
    category: "护身珠",
    categoryId: 1,
    price: "349",
    rating: 4.6,
    reviewCount: 72,
    soldCount: 198,
    createdAt: 1710057600000, // 2024-03-10
    images: [
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000"
    ],
    colors: ["黑色"],
    sizes: ["3cm", "4cm", "5cm"],
    highlights: [
      "采用天然黑曜石精心雕琢",
      "八卦太极图案，化煞辟邪",
      "佩戴舒适，品质卓越",
      "送礼自用两相宜"
    ],
    reviews: []
  },
  {
    id: 8,
    title: "绿松石藏银手链",
    category: "手链",
    categoryId: 2,
    price: "459",
    originalPrice: "599",
    discount: "23%",
    rating: 4.7,
    reviewCount: 48,
    soldCount: 105,
    createdAt: 1710489600000, // 2024-03-15
    images: [
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    colors: ["绿松色", "蓝松色"],
    sizes: ["17cm", "19cm"],
    highlights: [
      "精选优质绿松石，色泽纯正",
      "传统藏银工艺，手工镶嵌",
      "具有辟邪保平安功效",
      "适合各种场合佩戴"
    ],
    reviews: []
  },
  {
    id: 9,
    title: "七脉轮平衡水晶套装",
    category: "水晶",
    categoryId: 4,
    price: "899",
    originalPrice: "1299",
    discount: "30%",
    rating: 4.9,
    reviewCount: 35,
    soldCount: 78,
    createdAt: 1711152000000, // 2024-03-23
    images: [
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    colors: ["七彩套装"],
    highlights: [
      "七种天然水晶对应七大脉轮",
      "能量纯净，振动频率稳定",
      "帮助平衡身心能量",
      "附带详细使用指南"
    ],
    reviews: []
  },
  {
    id: 10,
    title: "纯银莲花心咒转运戒指",
    category: "戒指",
    categoryId: 6,
    price: "499",
    rating: 4.8,
    reviewCount: 42,
    soldCount: 87,
    createdAt: 1707120000000, // 2024-02-05
    images: [
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070"
    ],
    sizes: ["6号", "7号", "8号", "9号"],
    highlights: [
      "925纯银材质，永不褪色",
      "精刻莲花心咒，寓意纯净",
      "可旋转设计，释放能量",
      "送礼佳品，寓意美好"
    ],
    reviews: []
  },
  {
    id: 11,
    title: "天然琥珀平安锁项链",
    category: "项链",
    categoryId: 7,
    price: "759",
    originalPrice: "899",
    discount: "15%",
    rating: 4.7,
    reviewCount: 39,
    soldCount: 91,
    createdAt: 1711584000000, // 2024-03-28
    images: [
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    colors: ["蜜蜡色", "血珀色"],
    highlights: [
      "波罗的海天然琥珀，年代久远",
      "锁型设计，寓意锁住平安福气",
      "925银链，佩戴舒适",
      "附赠高档礼盒包装"
    ],
    reviews: []
  },
  {
    id: 12,
    title: "纯天然黄水晶能量手镯",
    category: "手链",
    categoryId: 2,
    price: "329",
    originalPrice: "399",
    discount: "18%",
    rating: 4.6,
    reviewCount: 53,
    soldCount: 124,
    createdAt: 1708848000000, // 2024-02-25
    images: [
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    sizes: ["16cm", "18cm", "20cm"],
    highlights: [
      "纯天然黄水晶，能量充沛",
      "增强个人魅力与自信",
      "招财旺运，平衡情绪",
      "适合商务人士佩戴"
    ],
    reviews: []
  },
  {
    id: 13,
    title: "藏传佛教六字真言手环",
    category: "手环",
    categoryId: 8,
    price: "289",
    rating: 4.5,
    reviewCount: 47,
    soldCount: 113,
    createdAt: 1711324800000, // 2024-03-25
    images: [
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    colors: ["银色", "古铜色"],
    sizes: ["调节式"],
    highlights: [
      "纯手工雕刻六字真言",
      "传统藏传佛教祝福",
      "可调节大小，男女通用",
      "赠送真言卡片及含义解释"
    ],
    reviews: []
  },
  {
    id: 14,
    title: "108颗檀香木佛珠念珠",
    category: "佛珠",
    categoryId: 9,
    price: "199",
    originalPrice: "259",
    discount: "23%",
    rating: 4.8,
    reviewCount: 68,
    soldCount: 159,
    createdAt: 1707811200000, // 2024-02-13
    images: [
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070"
    ],
    sizes: ["8mm", "10mm"],
    highlights: [
      "108颗传统佛珠，利于修行",
      "印度进口老料檀香木",
      "香气持久，佩戴舒适",
      "纯手工穿制，经久耐用"
    ],
    reviews: []
  },
  {
    id: 15,
    title: "天然钛晶太阳石吊坠",
    category: "吊坠",
    categoryId: 5,
    price: "659",
    originalPrice: "799",
    discount: "18%",
    rating: 4.7,
    reviewCount: 32,
    soldCount: 75,
    createdAt: 1705132800000, // 2024-01-13
    images: [
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    colors: ["金色", "橙色"],
    sizes: ["中"],
    highlights: [
      "巴西进口天然钛晶",
      "太阳能量石，提升个人魅力",
      "925银镶嵌，典雅大方",
      "增强领导力与创造力"
    ],
    reviews: []
  },
  {
    id: 16,
    title: "月光石莲花耳环",
    category: "耳环",
    categoryId: 10,
    price: "429",
    rating: 4.9,
    reviewCount: 28,
    soldCount: 64,
    createdAt: 1709625600000, // 2024-03-05
    images: [
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    colors: ["银色"],
    highlights: [
      "斯里兰卡天然月光石",
      "925银莲花造型，优雅端庄",
      "增强女性柔和气质",
      "送女友、妻子理想礼物"
    ],
    reviews: []
  },
  {
    id: 17,
    title: "五行平衡能量香包",
    category: "香包",
    categoryId: 11,
    price: "159",
    originalPrice: "199",
    discount: "20%",
    rating: 4.6,
    reviewCount: 45,
    soldCount: 127,
    createdAt: 1708156800000, // 2024-02-17
    images: [
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    colors: ["红色", "紫色", "蓝色", "绿色", "黄色"],
    highlights: [
      "五种天然草药配方",
      "对应五行元素，平衡气场",
      "纯手工缝制，绣花精美",
      "可放车内、办公室或家中"
    ],
    reviews: []
  },
  {
    id: 18,
    title: "纯银梵文六字真言戒指",
    category: "戒指",
    categoryId: 6,
    price: "379",
    rating: 4.7,
    reviewCount: 37,
    soldCount: 85,
    createdAt: 1707292800000, // 2024-02-07
    images: [
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070"
    ],
    sizes: ["6号", "7号", "8号", "9号", "10号"],
    highlights: [
      "999纯银打造，质地细腻",
      "梵文六字真言，祈福平安",
      "可转动设计，内外双层",
      "送男友、丈夫理想礼物"
    ],
    reviews: []
  },
  {
    id: 19,
    title: "紫水晶聚财貔貅手串",
    category: "手串",
    categoryId: 3,
    price: "579",
    originalPrice: "699",
    discount: "17%",
    rating: 4.8,
    reviewCount: 49,
    soldCount: 118,
    createdAt: 1711411200000, // 2024-03-26
    images: [
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    colors: ["紫色"],
    sizes: ["10mm", "12mm"],
    highlights: [
      "优质天然紫水晶，招财转运",
      "精雕貔貅造型，招财纳福",
      "开光加持，能量更强",
      "适合商务人士、创业者佩戴"
    ],
    reviews: []
  },
  {
    id: 20,
    title: "天然草莓晶爱情手镯",
    category: "手链",
    categoryId: 2,
    price: "499",
    originalPrice: "599",
    discount: "17%",
    rating: 4.9,
    reviewCount: 36,
    soldCount: 83,
    createdAt: 1710230400000, // 2024-03-12
    images: [
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2000",
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1602362513863-111e4599537e?q=80&w=2070",
      "https://images.unsplash.com/photo-1565123409695-7b5ef10a772c?q=80&w=2069"
    ],
    sizes: ["16cm", "17cm", "18cm"],
    highlights: [
      "全球稀有草莓晶，爱情之石",
      "增强魅力，吸引爱情",
      "纯手工打造，每件独一无二",
      "赠送专业鉴定证书"
    ],
    reviews: []
  }
];
