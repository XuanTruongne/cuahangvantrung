import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calendar, User, ArrowRight } from "lucide-react";

// Sample posts - in real app, fetch from Supabase
const posts = [
  {
    id: "1",
    slug: "huong-dan-chon-may-duc-be-tong",
    title: "Hướng dẫn chọn máy đục bê tông phù hợp với nhu cầu",
    excerpt:
      "Máy đục bê tông là thiết bị không thể thiếu trong các công trình xây dựng. Bài viết này sẽ giúp bạn lựa chọn loại máy phù hợp nhất với nhu cầu sử dụng và ngân sách của mình.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop",
    date: "2024-01-15",
    author: "Văn Trung",
    tags: ["Máy đục", "Hướng dẫn"],
  },
  {
    id: "2",
    slug: "bao-tri-may-phat-dien-dinh-ky",
    title: "5 bước bảo trì máy phát điện định kỳ đúng cách",
    excerpt:
      "Bảo trì định kỳ giúp máy phát điện hoạt động ổn định và kéo dài tuổi thọ. Tìm hiểu 5 bước quan trọng nhất để bảo trì máy phát điện đúng cách.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=500&fit=crop",
    date: "2024-01-10",
    author: "Văn Trung",
    tags: ["Bảo trì", "Máy phát điện"],
  },
  {
    id: "3",
    slug: "uu-nhuoc-diem-thue-thiet-bi",
    title: "Ưu nhược điểm khi thuê thiết bị xây dựng",
    excerpt:
      "Thuê hay mua thiết bị? Đây là câu hỏi nhiều nhà thầu đặt ra. Cùng phân tích ưu nhược điểm của từng phương án để đưa ra quyết định phù hợp.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop",
    date: "2024-01-05",
    author: "Văn Trung",
    tags: ["Cho thuê", "Tư vấn"],
  },
  {
    id: "4",
    slug: "cach-su-dung-may-toi-an-toan",
    title: "Cách sử dụng máy tời an toàn và hiệu quả",
    excerpt:
      "Máy tời là thiết bị hữu ích nhưng cũng tiềm ẩn nhiều rủi ro nếu sử dụng không đúng cách. Hướng dẫn chi tiết cách sử dụng máy tời an toàn.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop",
    date: "2024-01-01",
    author: "Văn Trung",
    tags: ["Máy tời", "An toàn"],
  },
  {
    id: "5",
    slug: "xu-huong-thiet-bi-xay-dung-2024",
    title: "Xu hướng thiết bị xây dựng năm 2024",
    excerpt:
      "Năm 2024 chứng kiến nhiều đổi mới trong ngành thiết bị xây dựng. Cùng điểm qua những xu hướng nổi bật nhất trong năm nay.",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=500&fit=crop",
    date: "2023-12-28",
    author: "Văn Trung",
    tags: ["Xu hướng", "2024"],
  },
  {
    id: "6",
    slug: "so-sanh-may-cat-sat-pho-bien",
    title: "So sánh các loại máy cắt sắt phổ biến trên thị trường",
    excerpt:
      "Đánh giá và so sánh chi tiết các loại máy cắt sắt đang được sử dụng phổ biến, giúp bạn lựa chọn sản phẩm phù hợp nhất.",
    image: "https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=800&h=500&fit=crop",
    date: "2023-12-20",
    author: "Văn Trung",
    tags: ["Máy cắt", "So sánh"],
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-industrial-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Tin tức
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
              TIN TỨC & <span className="text-primary">KIẾN THỨC</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Cập nhật những thông tin mới nhất về thiết bị xây dựng, hướng dẫn
              sử dụng và bảo trì hiệu quả.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group card-industrial"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Đọc thêm
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
