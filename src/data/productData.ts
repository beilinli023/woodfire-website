
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "尼泊尔手工金刚结吉祥护身珠",
    category: "护身珠",
    categoryId: 1,
    price: "¥299",
    originalPrice: "¥399",
    discount: "25%",
    rating: 4.8,
    reviewCount: 128,
    soldCount: 368,
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
    price: "¥399",
    originalPrice: "¥499",
    discount: "20%",
    rating: 4.5,
    reviewCount: 85,
    soldCount: 213,
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
    price: "¥249",
    rating: 4.7,
    reviewCount: 63,
    soldCount: 175,
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
    price: "¥599",
    originalPrice: "¥899",
    discount: "33%",
    rating: 4.9,
    reviewCount: 42,
    soldCount: 89,
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
  }
];
