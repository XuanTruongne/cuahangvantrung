import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-industrial-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(220 15% 18% / 0.98) 0%, hsl(220 15% 25% / 0.95) 50%, hsl(32 95% 50% / 0.1) 100%)",
        }}
      />

      {/* Industrial Stripe Accent */}
      <div className="absolute top-0 left-0 right-0 h-2 industrial-stripe" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium animate-fade-in">
                <Wrench className="w-4 h-4" />
                Uy tín hơn 10 năm kinh nghiệm
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight animate-slide-up">
                VĂN TRUNG
                <span className="block text-primary">THIẾT BỊ XÂY DỰNG</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "100ms" }}>
                Chuyên cho thuê, mua bán, sửa chữa và bảo trì máy đục bê tông, 
                máy tời, máy phát điện và các thiết bị xây dựng chất lượng cao.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Button size="lg" asChild className="group">
                <Link to="/products">
                  Xem sản phẩm
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/contact">Liên hệ ngay</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-industrial-gray/30 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Khách hàng</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Thiết bị</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-industrial-gray/20 backdrop-blur border border-industrial-gray/30 rounded-lg p-6 hover:border-primary/50 transition-colors animate-scale-in" style={{ animationDelay: "200ms" }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg text-primary-foreground mb-2">
                  BẢO HÀNH UY TÍN
                </h3>
                <p className="text-sm text-muted-foreground">
                  Cam kết bảo hành chính hãng cho tất cả sản phẩm
                </p>
              </div>
              <div className="bg-industrial-gray/20 backdrop-blur border border-industrial-gray/30 rounded-lg p-6 hover:border-primary/50 transition-colors animate-scale-in" style={{ animationDelay: "400ms" }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg text-primary-foreground mb-2">
                  SỬA CHỮA NHANH
                </h3>
                <p className="text-sm text-muted-foreground">
                  Đội ngũ kỹ thuật viên lành nghề, sửa chữa nhanh chóng
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-industrial-gray/20 backdrop-blur border border-industrial-gray/30 rounded-lg p-6 hover:border-primary/50 transition-colors animate-scale-in" style={{ animationDelay: "300ms" }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg text-primary-foreground mb-2">
                  CHO THUÊ LINH HOẠT
                </h3>
                <p className="text-sm text-muted-foreground">
                  Thuê theo ngày, tuần hoặc tháng với giá ưu đãi
                </p>
              </div>
              <div className="bg-primary rounded-lg p-6 animate-scale-in" style={{ animationDelay: "500ms" }}>
                <div className="font-display text-2xl text-primary-foreground mb-2">
                  GỌI NGAY
                </div>
                <a
                  href="tel:0123456789"
                  className="text-xl font-bold text-primary-foreground hover:underline"
                >
                  0123 456 789
                </a>
                <p className="text-sm text-primary-foreground/80 mt-2">
                  Tư vấn miễn phí 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
