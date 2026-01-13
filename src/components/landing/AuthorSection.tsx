import authorPhoto from "@/assets/author-photo.jpeg";

const AuthorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-traffic-yellow/30 blur-[40px] rounded-full" />
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-traffic-yellow shadow-primary">
                  <img 
                    src={authorPhoto} 
                    alt="Autora do Método Aprova Detran" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-traffic-yellow/10 text-traffic-yellow-dark text-sm font-semibold mb-6">
                👩‍🏫 Quem criou o método
              </span>

              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Especialista em aprovação no Detran
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Com anos de experiência ajudando pessoas a conquistarem sua CNH, desenvolvi um método que foca no que realmente importa: 
                <strong className="text-foreground"> entender a lógica da prova</strong>.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Vi muitas pessoas inteligentes reprovando por estudar da forma errada. Por isso criei este material: para mostrar o caminho mais curto até sua aprovação.
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
