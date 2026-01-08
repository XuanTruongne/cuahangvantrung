import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import DOMPurify from "dompurify";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2, Facebook, Tag } from "lucide-react";
// Sample post data - in real app, fetch from Supabase
const postsData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}> = {
  "huong-dan-chon-may-duc-be-tong": {
    title: "Hướng dẫn chọn máy đục bê tông phù hợp với nhu cầu",
    excerpt: "Máy đục bê tông là thiết bị không thể thiếu trong các công trình xây dựng.",
    content: `
## Giới thiệu

Máy đục bê tông là một trong những thiết bị quan trọng nhất trong ngành xây dựng. Việc lựa chọn đúng loại máy sẽ giúp công việc được thực hiện hiệu quả hơn, tiết kiệm thời gian và chi phí.

## Các loại máy đục bê tông phổ biến

### 1. Máy đục bê tông điện
Đây là loại máy phổ biến nhất, phù hợp cho các công trình vừa và nhỏ. Ưu điểm là dễ sử dụng, bảo trì đơn giản.

### 2. Máy đục bê tông chạy xăng
Phù hợp cho các công trình ngoài trời hoặc những nơi không có nguồn điện. Công suất lớn hơn máy điện.

### 3. Máy đục bê tông khí nén
Sử dụng cho các công trình lớn, cần công suất cao. Yêu cầu máy nén khí đi kèm.

## Tiêu chí lựa chọn

1. **Công suất**: Tùy thuộc vào độ cứng và độ dày của bê tông cần đục
2. **Trọng lượng**: Cân nhắc khả năng di chuyển và thời gian làm việc
3. **Thương hiệu**: Nên chọn các thương hiệu uy tín như Bosch, Makita, Dewalt
4. **Giá cả**: Cân đối giữa ngân sách và chất lượng

## Kết luận

Việc chọn đúng máy đục bê tông sẽ giúp công việc của bạn trở nên dễ dàng và hiệu quả hơn. Hãy liên hệ Văn Trung để được tư vấn chi tiết!
    `,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop",
    date: "2024-01-15",
    author: "Văn Trung",
    tags: ["Máy đục", "Hướng dẫn", "Xây dựng"],
  },
};

const defaultPost = {
  title: "Bài viết",
  excerpt: "Nội dung bài viết đang được cập nhật...",
  content: "Nội dung bài viết đang được cập nhật. Vui lòng quay lại sau.",
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop",
  date: "2024-01-15",
  author: "Văn Trung",
  tags: ["Tin tức"],
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug && postsData[slug] ? postsData[slug] : defaultPost;

  // Sanitize and process content to prevent XSS attacks
  const sanitizedContent = useMemo(() => {
    const processedHtml = post.content
      .replace(/## /g, '<h2 class="font-display text-2xl text-foreground mt-8 mb-4">')
      .replace(/### /g, '<h3 class="font-semibold text-xl text-foreground mt-6 mb-3">')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
      .replace(/\n\n/g, '</p><p class="text-muted-foreground leading-relaxed">')
      .replace(/\n(\d+\.)/g, '</p><p class="text-muted-foreground leading-relaxed">$1');
    
    return DOMPurify.sanitize(processedHtml, {
      ALLOWED_TAGS: ['h2', 'h3', 'p', 'strong', 'em', 'ul', 'ol', 'li', 'br'],
      ALLOWED_ATTR: ['class'],
    });
  }, [post.content]);
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-8 bg-industrial-dark">
        <div className="container-custom">
          <Button
            variant="ghost"
            asChild
            className="text-muted-foreground hover:text-primary mb-6"
          >
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại tin tức
            </Link>
          </Button>
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-background">
        <div className="container-custom">
          <div className="relative -mt-4 rounded-lg overflow-hidden shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-[21/9] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                <div
                  className="text-foreground space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: sanitizedContent,
                  }}
                />
              </article>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="text-foreground font-medium">Chia sẻ:</span>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Tags */}
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-primary" />
                    THẺ
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-background text-muted-foreground text-sm rounded-full border border-border hover:border-primary hover:text-primary transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-primary rounded-lg p-6 text-center">
                  <h4 className="font-display text-lg text-primary-foreground mb-2">
                    CẦN TƯ VẤN?
                  </h4>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Liên hệ ngay để được hỗ trợ
                  </p>
                  <Button variant="secondary" size="sm" asChild>
                    <Link to="/contact">Liên hệ</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
