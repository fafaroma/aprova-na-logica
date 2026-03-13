import authorPhoto from "@/assets/author-photo.jpeg";

const AuthorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-traffic-yellow/30 blur-[40px] rounded-full" />
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-traffic-yellow shadow-primary">
                  <img 
                    src={authorPhoto} 
                    alt="Ana Carla Roma - Autora do Método Aprova CNH" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-traffic-yellow/10 text-traffic-yellow-dark text-sm font-semibold mb-6">
                👩‍🏫 Quem criou o método
              </span>

              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Ana Carla Roma
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Advogada e Instrutora de Trânsito</strong> com mais de 20 anos de experiência, contribuindo para a formação de mais de 10.000 condutores aprovados.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Desenvolvi um método que foca no que realmente importa: 
                <strong className="text-foreground"> entender a lógica da prova</strong> e passar com confiança.
              </p>

              <div className="bg-muted p-4 rounded-xl border-l-4 border-traffic-yellow">
                <p className="text-foreground italic">
                  "Minha missão é te ajudar a passar de primeira, sem estresse e sem decoreba."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
