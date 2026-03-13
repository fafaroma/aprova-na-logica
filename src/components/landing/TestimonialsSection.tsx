import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mariana S.",
      location: "São Paulo, SP",
      text: "Reprovei 2 vezes antes de conhecer o método. Depois que estudei pelo e-book, passei de primeira! As dicas de interpretação de questão fizeram toda a diferença.",
      stars: 5,
    },
    {
      name: "Carlos Eduardo",
      location: "Belo Horizonte, MG",
      text: "Eu achava que tinha que decorar tudo. O método me mostrou que é questão de lógica. Passei com 28 acertos de 30!",
      stars: 5,
    },
    {
      name: "Juliana R.",
      location: "Rio de Janeiro, RJ",
      text: "Tinha muito medo da prova. Estudei pelo celular no ônibus por 3 dias e passei de primeira. Material incrível e direto ao ponto.",
      stars: 5,
    },
    {
      name: "Rafael M.",
      location: "Curitiba, PR",
      text: "Já tinha perdido dinheiro reprovando duas vezes. Com o Método Aprova CNH consegui passar e finalmente tirar minha CNH. Recomendo demais!",
      stars: 5,
    },
    {
      name: "Amanda L.",
      location: "Salvador, BA",
      text: "Passei de primeira graças ao método! As regras mentais são geniais, resolvi questões que antes eu erraria com certeza.",
      stars: 5,
    },
    {
      name: "Fernando T.",
      location: "Fortaleza, CE",
      text: "Depois de reprovar e quase desistir, esse e-book me salvou. Entendi como a banca pensa e acertei 27 de 30. Vale cada centavo!",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-traffic-green/10 text-traffic-green-dark text-sm font-semibold mb-6">
            ⭐ Depoimentos Reais
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Quem usou, <span className="text-gradient-primary">aprovou</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Veja o que nossos alunos estão dizendo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card border border-traffic-green/10 hover:shadow-card-hover transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-traffic-green/20 absolute top-4 right-4" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-traffic-yellow text-traffic-yellow" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
