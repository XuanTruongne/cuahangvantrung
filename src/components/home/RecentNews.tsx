import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample news - in real app, fetch from Supabase
const recentNews = [
  {
    id: "1",
    slug: "huong-dan-chon-may-duc-be-tong",
    title: "Hướng dẫn chọn máy đục bê tông phù hợp với nhu cầu",
    excerpt:
      "Máy đục bê tông là thiết bị không thể thiếu trong các công trình xây dựng. Bài viết này sẽ giúp bạn lựa chọn loại máy phù hợp nhất.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    date: "2024-01-15",
  },
  {
    id: "2",
    slug: "bao-tri-may-phat-dien-dinh-ky",
    title: "5 bước bảo trì máy phát điện định kỳ đúng cách",
    excerpt:
      "Bảo trì định kỳ giúp máy phát điện hoạt động ổn định và kéo dài tuổi thọ. Tìm hiểu 5 bước quan trọng nhất.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop",
    date: "2024-01-10",
  },
  {
    id: "3",
    slug: "uu-nhuoc-diem-thue-thiet-bi",
    title: "Ưu nhược điểm khi thuê thiết bị xây dựng",
    excerpt:
      "Thuê hay mua thiết bị? Đây là câu hỏi nhiều nhà thầu đặt ra. Cùng phân tích ưu nhược điểm của từng phương án.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
    date: "2024-01-05",
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function RecentNews() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Tin tức mới nhất
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              KIẾN THỨC HỮU ÍCH
            </h2>
          </div>
          <Button variant="outline" asChild className="group">
            <Link to="/blog">
              Xem tất cả
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {recentNews.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group card-industrial animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
