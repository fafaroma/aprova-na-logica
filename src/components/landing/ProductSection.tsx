import { BookOpen, Target, Brain, Shield } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";

const ProductSection = () => {
  const features = [
    { icon: BookOpen, text: "Entender como a prova funciona" },
    { icon: Target, text: "Evitar pegadinhas comuns" },
    { icon: Brain, text: "Escolher a alternativa correta mesmo na dúvida" },
    { icon: Shield, text: "Passar com confiança de primeira" },
  ];

  return (
    <section className="py-20 bg-muted" id="produto">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-traffic-green/30 blur-[60px] rounded-full" />
              <img 
                src={ebookCover} 
                alt="E-book Método Aprova CNH" 
                className="relative z-10 w-full max-w-sm drop-shadow-2xl animate-float rounded-2xl"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-full bg-traffic-green/10 text-traffic-green-dark text-sm font-semibold mb-6">
              📚 Conheça o Método
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              O que é o{" "}
              <span className="text-gradient-primary">Método Aprova CNH</span>?
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Um e-book prático e direto para quem está tirando a primeira habilitação e quer:
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card border border-traffic-green/20"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-success flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <p className="text-foreground font-medium text-lg">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-traffic-dark text-accent-foreground p-6 rounded-2xl border-l-4 border-traffic-yellow">
              <p className="text-lg italic">
                "Aqui você não decora artigos. Você aprende a tomar a decisão que a banca espera."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
