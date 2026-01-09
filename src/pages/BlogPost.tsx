import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, User, ArrowLeft, Share2, Facebook, Tag } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  // Sanitize and process content to prevent XSS attacks
  const sanitizedContent = useMemo(() => {
    if (!post?.content) return "";
    
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
  }, [post?.content]);

  if (isLoading) {
    return (
      <Layout>
        <section className="pt-24 pb-8 bg-industrial-dark">
          <div className="container-custom">
            <Skeleton className="h-8 w-32 mb-6" />
            <div className="max-w-4xl space-y-4">
              <div className="flex gap-2">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
              </div>
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-3/4" />
              <div className="flex gap-6">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background">
          <div className="container-custom">
            <Skeleton className="w-full aspect-[21/9] rounded-lg" />
          </div>
        </section>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <section className="pt-24 pb-12 bg-industrial-dark">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl text-primary-foreground mb-4">
              Không tìm thấy bài viết
            </h1>
            <p className="text-muted-foreground mb-6">
              Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.
            </p>
            <Button asChild>
              <Link to="/blog">Quay lại tin tức</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

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
            {post.tags && post.tags.length > 0 && (
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
            )}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.published_at || post.created_at)}</span>
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
              src={post.featured_image || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop"}
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
                {post.tags && post.tags.length > 0 && (
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
                )}

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
