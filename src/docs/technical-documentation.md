
# 旅行寻珠项目技术文档

## 技术栈

项目使用了现代前端技术栈：

- **框架**: React 18
- **构建工具**: Vite
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI组件库**: shadcn-ui
- **路由**: React Router DOM
- **数据获取**: TanStack Query (React Query)
- **图表库**: Recharts
- **图标库**: lucide-react

## 项目目录结构

```
src/
├── components/          # 所有UI组件
│   ├── auth/            # 认证相关组件
│   ├── cart/            # 购物车相关组件
│   ├── FiveElementsCalculator/  # 五行元素计算器
│   ├── HealthAssessment/        # 健康评估系统
│   ├── product/         # 产品相关组件
│   ├── SidebarNav/      # 侧边导航
│   └── ui/              # UI基础组件(shadcn)
├── context/             # 上下文管理
│   └── CartContext.tsx  # 购物车上下文
├── data/                # 数据文件
│   └── productData.ts   # 产品数据
├── hooks/               # 自定义钩子
├── lib/                 # 工具函数库
├── pages/               # 页面组件
│   ├── Index.tsx        # 首页
│   ├── Product.tsx      # 产品详情页
│   ├── Products.tsx     # 产品列表页
│   ├── About.tsx        # 关于我们
│   ├── Blessing.tsx     # 祝福页面
│   ├── Culture.tsx      # 文化页面
│   ├── Article.tsx      # 文章详情页
│   ├── ArticleList.tsx  # 文章列表页
│   └── ...其他页面
└── types/               # 类型定义
    └── product.ts       # 产品相关类型
```

## 核心功能和组件

### 1. 产品展示系统

- **产品类型定义** (`src/types/product.ts`):
  ```typescript
  export interface Product {
    id: number;
    title: string;
    category: string;
    categoryId: number;
    price: string;
    originalPrice?: string;
    discount?: string;
    rating: number;
    reviewCount: number;
    soldCount: number;
    images: string[];
    descriptionImages?: string[];
    colors?: string[];
    sizes?: string[];
    highlights?: string[];
    description?: string[];
    specifications?: Specification[];
    usageGuide?: string[];
    usageGuideImages?: string[]; 
    usageGuideImageDescriptions?: string[]; 
    usageScenesImages?: string[]; 
    usageScenesDescriptions?: string[]; 
    careInstructions?: string[];
    reviews: Review[];
    createdAt?: number;
  }
  ```

- **产品详情页** (`src/pages/Product.tsx`): 
  展示产品详细信息，包含图片轮播、产品信息、使用指南、评论和相关产品推荐

- **产品组件**:
  - `ProductImageGallery.tsx`: 产品图片轮播展示
  - `ProductInfo.tsx`: 产品信息展示(标题、价格、评分等)
  - `ProductDescription.tsx`: 产品详细描述和使用指南
  - `ProductReviews.tsx`: 产品评论系统
  - `RelatedProducts.tsx`: 相关产品推荐

### 2. 购物车系统

- **购物车上下文** (`src/context/CartContext.tsx`):
  ```typescript
  interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
  }
  ```

- **购物车组件** (`src/components/cart/ShoppingCart.tsx`): 
  显示购物车商品、数量修改、删除功能和结算功能

### 3. 五行元素计算器

- **核心功能** (`src/components/FiveElementsCalculator/`):
  - 基于出生日期和时辰计算用户的五行属性
  - 提供个性化产品推荐

- **主要组件**:
  - `FiveElementsCalculator.tsx`: 主组件，包含整个计算器流程
  - `InputStep.tsx`: 收集用户信息步骤
  - `CalculatingStep.tsx`: 计算动画展示
  - `ResultStep.tsx`: 展示计算结果和产品推荐

### 4. 健康评估系统

- **健康评估** (`src/components/HealthAssessment/`):
  - 基于用户回答的健康问题提供产品推荐
  - 多步骤问答流程

- **主要组件**:
  - `HealthAssessmentCard.tsx`: 主卡片组件
  - `QuestionsStep.tsx`: 问题收集步骤
  - `RecommendationStep.tsx`: 结果推荐步骤

### 5. 导航和路由

- **应用路由** (`src/App.tsx`): 
  使用React Router管理应用路由

  ```typescript
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blessing" element={<Blessing />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/culture/:category" element={<ArticleList />} />
      <Route path="/culture/:category/:articleId" element={<Article />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/charity" element={<Charity />} />
      <Route path="/charity/projects" element={<CharityProjects />} />
      <Route path="/charity/projects/:id" element={<CharityProjectDetail />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  ```

- **侧边导航** (`src/components/SidebarNav/`):
  - `SidebarNav.tsx`: 包含导航链接和社交媒体连接
  - `NavLink.tsx`: 导航链接组件
  - `navItems.ts`: 导航项目配置

### 6. UI组件库

项目使用shadcn-ui组件库，包含以下组件：

- 按钮 (Button)
- 卡片 (Card)
- 对话框 (Dialog)
- 轮播 (Carousel)
- 表单控件 (Input, Select, RadioGroup等)
- 标签 (Label)
- 提示 (Toast)
- 进度条 (Progress)
- ...等其他UI组件

## 数据管理

目前项目使用模拟数据，主要在以下文件中：

- `src/data/productData.ts`: 产品数据
- `src/components/FiveElementsCalculator/fiveElementsData.ts`: 五行元素数据
- `src/components/HealthAssessment/healthData.ts`: 健康评估数据

## 状态管理

项目使用以下方式管理状态：

1. **React Context**: 用于全局状态(如购物车)
2. **React Query**: 用于数据获取和状态管理(准备连接后端)
3. **React状态钩子**: 用于组件本地状态

## 后端集成准备

项目已经准备好与后端集成：

1. **API调用结构**: 使用React Query的查询结构
2. **类型定义**: 所有数据模型都有TypeScript类型定义
3. **状态管理**: 购物车等功能使用Context API，易于与后端API集成

## 后端开发建议

1. **API端点**:
   - `/api/products`: 获取产品列表
   - `/api/products/:id`: 获取单个产品
   - `/api/cart`: 购物车操作
   - `/api/health-assessment`: 健康评估
   - `/api/five-elements`: 五行元素计算
   - `/api/auth`: 认证相关

2. **数据库表**:
   - `products`: 产品信息
   - `product_images`: 产品图片
   - `product_reviews`: 产品评论
   - `users`: 用户信息
   - `orders`: 订单信息
   - `order_items`: 订单项目
   - `cart_items`: 购物车项目

3. **认证**:
   - 建议实现JWT认证
   - 社交媒体登录(可选)

## 接下来的开发计划

1. 连接真实后端API
2. 实现用户认证
3. 实现真实购物流程和支付集成
4. 优化移动端响应式设计
5. 性能优化和SEO优化

## 总结

旅行寻珠项目是一个功能完善的电子商务前端应用，已经包含了产品展示、购物车、五行元素计算器和健康评估等核心功能。项目结构清晰，使用了最现代的前端技术栈，并准备好与后端服务进行集成。
