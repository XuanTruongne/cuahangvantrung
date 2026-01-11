import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/ui/page-transition";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/ui/animated-section";
import { MapPin, Phone, Mail, Clock, Users, Target, Award } from "lucide-react";
const About = () => {
  return <Layout>
      <PageTransition>
        {/* Hero */}
        <section className="pt-24 pb-12 bg-industrial-dark">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Về chúng tôi
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
                CỬA HÀNG <span className="text-primary">VĂN TRUNG</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Hơn 10 năm kinh nghiệm trong lĩnh vực cho thuê, mua bán, sửa chữa và bảo trì thiết bị xây dựng chất lượng cao.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Câu chuyện của chúng tôi
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  HÀNH TRÌNH XÂY DỰNG UY TÍN
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Văn Trung được thành lập từ năm 2014 với mong muốn mang đến cho
                    khách hàng những thiết bị xây dựng chất lượng nhất với giá cả
                    hợp lý.
                  </p>
                  <p>
                    Qua hơn 10 năm phát triển, chúng tôi đã trở thành đối tác tin
                    cậy của hàng trăm công trình xây dựng lớn nhỏ trên khắp cả
                    nước.
                  </p>
                  <p>
                    Với đội ngũ kỹ thuật viên lành nghề và hệ thống kho bãi hiện
                    đại, chúng tôi cam kết đáp ứng mọi nhu cầu về thiết bị xây
                    dựng của quý khách.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
                <AnimatedItem>
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="font-display text-4xl text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Năm kinh nghiệm</div>
                  </div>
                </AnimatedItem>
                <AnimatedItem>
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="font-display text-4xl text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Khách hàng</div>
                  </div>
                </AnimatedItem>
                <AnimatedItem>
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="font-display text-4xl text-primary mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Thiết bị</div>
                  </div>
                </AnimatedItem>
                <AnimatedItem>
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="font-display text-4xl text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Hỗ trợ</div>
                  </div>
                </AnimatedItem>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <AnimatedContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
              <AnimatedItem>
                <div className="bg-card rounded-lg p-8 border border-border h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-4">SỨ MỆNH</h3>
                  <p className="text-muted-foreground">
                    Cung cấp giải pháp thiết bị xây dựng toàn diện, giúp khách hàng
                    tiết kiệm chi phí và tối ưu hiệu quả công việc.
                  </p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className="bg-card rounded-lg p-8 border border-border h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-4">TẦM NHÌN</h3>
                  <p className="text-muted-foreground">
                    Trở thành đơn vị hàng đầu trong lĩnh vực cung cấp thiết bị xây
                    dựng tại Việt Nam.
                  </p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className="bg-card rounded-lg p-8 border border-border h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-4">GIÁ TRỊ CỐT LÕI</h3>
                  <p className="text-muted-foreground">
                    Uy tín - Chất lượng - Tận tâm - Chuyên nghiệp là những giá trị
                    chúng tôi luôn đề cao.
                  </p>
                </div>
              </AnimatedItem>
            </AnimatedContainer>
          </div>
        </section>

        {/* Contact Info & Map */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Info */}
              <AnimatedSection direction="left">
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Thông tin liên hệ
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                  ĐẾN VỚI CHÚNG TÔI
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Địa chỉ</h4>
                      <p className="text-muted-foreground">
                        123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Điện thoại</h4>
                      <a href="tel:0123456789" className="text-primary hover:underline">
                        0123 456 789
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a href="mailto:vantrung@example.com" className="text-primary hover:underline">
                        vantrung@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Giờ làm việc</h4>
                      <p className="text-muted-foreground">
                        7:00 - 18:00 (Thứ 2 - Thứ 7)
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Map */}
              <AnimatedSection direction="right" delay={0.2}>
                <div className="rounded-lg overflow-hidden border border-border h-[400px]">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946681007846!2d106.69920147573875!3d10.773374259225896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3a5bb9972!2zQuG6v24gVGjDoG5oIFBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1704963123456!5m2!1svi!2s" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bản đồ cửa hàng Văn Trung" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>;
};
export default About;