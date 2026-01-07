import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.full_name || !formData.phone) {
      toast({
        title: "Vui lòng điền đầy đủ thông tin",
        description: "Họ tên và số điện thoại là bắt buộc.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from("leads").insert({
        full_name: formData.full_name,
        phone: formData.phone,
        email: formData.email || null,
        address: formData.address || null,
        message: formData.message || null,
        action: "contact",
        source: "contact_page",
      });

      if (error) throw error;

      toast({
        title: "Gửi thành công!",
        description: "Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.",
      });

      setFormData({
        full_name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau hoặc gọi trực tiếp cho chúng tôi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-industrial-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Liên hệ
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
              LIÊN HỆ <span className="text-primary">VỚI CHÚNG TÔI</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy để lại thông tin và chúng
              tôi sẽ liên hệ lại trong thời gian sớm nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl text-foreground mb-6">
                  THÔNG TIN LIÊN HỆ
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Địa chỉ
                      </h4>
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
                      <h4 className="font-semibold text-foreground mb-1">
                        Điện thoại
                      </h4>
                      <a
                        href="tel:0123456789"
                        className="text-primary hover:underline text-lg font-semibold"
                      >
                        0123 456 789
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:vantrung@example.com"
                        className="text-primary hover:underline"
                      >
                        vantrung@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Giờ làm việc
                      </h4>
                      <p className="text-muted-foreground">
                        7:00 - 18:00 (Thứ 2 - Thứ 7)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border h-[250px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946681007846!2d106.69920147573875!3d10.773374259225896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3a5bb9972!2zQuG6v24gVGjDoG5oIFBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1704963123456!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ cửa hàng Văn Trung"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border border-border p-8">
                <h2 className="font-display text-2xl text-foreground mb-6">
                  GỬI YÊU CẦU
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="full_name">
                        Họ và tên <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="full_name"
                        name="full_name"
                        placeholder="Nhập họ và tên"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Số điện thoại <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Nhập email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Địa chỉ</Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="Nhập địa chỉ"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Lời nhắn</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Nhập nội dung tin nhắn..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit" size="lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Gửi yêu cầu
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
