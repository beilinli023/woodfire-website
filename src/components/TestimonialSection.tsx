
const testimonials = [
  {
    id: 1,
    content: "这些珠宝不仅仅是装饰品，它们确实带给我内心的平静和力量。每次佩戴时，我都能感受到特别的能量流动。",
    author: "李明",
    location: "上海",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    content: "我在尼泊尔旅行时购买了他们的能量石手链，回国后惊喜地发现这里也有销售。质量和能量完全一致，非常满意！",
    author: "王芳",
    location: "北京",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    content: "作为一名瑜伽老师，我经常推荐这些灵性珠宝给我的学生。它们不仅美丽，还能帮助冥想和灵性修行。",
    author: "张伟",
    location: "成都",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">客户评价</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-gray-900 p-6 rounded-lg border border-gray-800 relative group"
          >
            {/* Quote icon */}
            <svg
              className="absolute top-6 right-6 h-12 w-12 text-gray-800 opacity-30 group-hover:text-gray-700 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <div className="text-gray-300 mb-6 relative z-10">
              {testimonial.content}
            </div>
            
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="h-10 w-10 rounded-full object-cover mr-4"
              />
              <div>
                <div className="text-white font-medium">{testimonial.author}</div>
                <div className="text-gray-400 text-sm">{testimonial.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
