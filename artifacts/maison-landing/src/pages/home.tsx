import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Instagram, ChevronRight } from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex gap-8 text-sm uppercase tracking-widest text-foreground/80 hidden md:flex font-sans">
          <a href="#collections" className="hover:text-accent transition-colors">Coleções</a>
          <a href="#atelier" className="hover:text-accent transition-colors">L'Atelier</a>
        </div>
        
        <div className="text-2xl font-serif tracking-widest text-foreground absolute left-1/2 -translate-x-1/2">
          Maison Lumière
        </div>

        <div className="flex gap-8 text-sm uppercase tracking-widest text-foreground/80 hidden md:flex font-sans">
          <a href="#bespoke" className="hover:text-accent transition-colors">Bespoke</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contato</a>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden bg-background">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src="/images/atelier-hero.png" 
          alt="Maison Lumiere Atelier" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </motion.div>
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white/80 font-sans tracking-[0.3em] text-sm mb-6 uppercase">São Paulo • Paris</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-wide mb-8">
            L'Élégance <br /> <span className="italic text-accent">Absolue</span>
          </h1>
          <p className="text-white/90 font-sans font-light max-w-lg mx-auto text-lg leading-relaxed mb-12">
            A precisão da alta costura encontra a sensualidade e o calor do Brasil. Onde cada detalhe é uma afirmação.
          </p>
          
          <a 
            href="#collections"
            className="inline-flex items-center gap-2 border-b border-white/40 pb-2 text-white hover:text-accent hover:border-accent transition-colors duration-300 font-sans uppercase tracking-widest text-sm"
          >
            Descubra as Coleções
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section id="atelier" className="py-32 bg-background relative z-30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-accent font-sans uppercase tracking-[0.2em] text-xs mb-8"
          >
            Nossa Filosofia
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl leading-tight text-foreground font-light mb-10"
          >
            "A verdadeira sofisticação não grita. Ela respira, observa e ocupa o espaço com <span className="italic">absoluta certeza</span>."
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Fundada em 2009 no coração dos Jardins, a Maison Lumière traduz a excelência do savoir-faire europeu para a fluidez do estilo de vida contemporâneo. Nossas peças não são apenas vestuário; são armaduras de confiança para arquitetos, executivos e visionários.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-sans uppercase tracking-[0.2em] text-xs mb-4">Prêt-à-Porter</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light">As Coleções</h2>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            href="#" 
            className="group flex items-center gap-2 font-sans uppercase tracking-widest text-xs text-foreground/70 hover:text-accent transition-colors mt-6 md:mt-0"
          >
            Ver o Arquivo <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[3/4] mb-6">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 duration-500" />
              <img 
                src="/images/collection-eclat.png" 
                alt="Éclat Collection" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-serif text-2xl mb-1 group-hover:text-accent transition-colors">Éclat</h3>
                <p className="font-sans text-muted-foreground text-sm uppercase tracking-widest">Spring/Summer 2026</p>
              </div>
              <ChevronRight className="w-6 h-6 text-border group-hover:text-accent transition-colors" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group cursor-pointer md:mt-24"
          >
            <div className="relative overflow-hidden aspect-[3/4] mb-6">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 duration-500" />
              <img 
                src="/images/collection-ombra.png" 
                alt="Ombra Collection" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-serif text-2xl mb-1 group-hover:text-accent transition-colors">Ombra</h3>
                <p className="font-sans text-muted-foreground text-sm uppercase tracking-widest">Fall/Winter 2025</p>
              </div>
              <ChevronRight className="w-6 h-6 text-border group-hover:text-accent transition-colors" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Materials = () => {
  return (
    <section className="py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="/images/craft-materials.png" 
                alt="Craft and Materials" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <p className="text-accent font-sans uppercase tracking-[0.2em] text-xs mb-6">Matières Premières</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-8 leading-tight">
              A Obsessão Pela <br/><span className="italic text-accent">Matéria</span>
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              Nossa busca pela perfeição começa muito antes do primeiro corte. Viajamos às fiações mais antigas da Europa para selecionar manualmente tecidos que respiram e se movem com o corpo.
            </p>
            
            <ul className="space-y-4 font-sans text-sm text-foreground/80 border-t border-border pt-8">
              <li className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent block" />
                <span className="font-medium">Loro Piana</span> <span className="text-muted-foreground">— Cashmere & Silk Blends</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent block" />
                <span className="font-medium">Huddersfield</span> <span className="text-muted-foreground">— Bespoke English Tweed</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent block" />
                <span className="font-medium">Dormeuil</span> <span className="text-muted-foreground">— Architectural Suiting</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="bespoke" className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-sans uppercase tracking-[0.2em] text-xs mb-6">Sur Mesure</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-8 leading-tight text-white">
              Sua Medida, <br/><span className="italic text-accent">Nossa Arte</span>
            </h2>
            <p className="font-sans text-white/70 leading-relaxed mb-10 max-w-md">
              O serviço Bespoke da Maison Lumière é um diálogo íntimo entre cliente e alfaiate. Mais de 40 horas de trabalho manual dedicadas à construção de uma peça que é uma extensão da sua identidade.
            </p>
            
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-sans uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Agendar Consulta Privada
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] w-full"
          >
            <img 
              src="/images/bespoke-services.png" 
              alt="Bespoke Services" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card p-12 lg:p-20 border border-border shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="font-serif text-4xl text-foreground font-light mb-6">Visite o L'Atelier</h2>
              <p className="font-sans text-muted-foreground mb-10 leading-relaxed">
                Atendimentos presenciais ocorrem exclusivamente com horário marcado, garantindo privacidade e atenção absoluta a cada detalhe.
              </p>
              
              <div className="space-y-6 font-sans">
                <div className="flex items-start gap-4 text-foreground/80">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Jardins, São Paulo</p>
                    <p className="text-muted-foreground text-sm mt-1">Rua Oscar Freire, 847<br/>SP 01426-001</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-foreground/80">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <a href="tel:+551138472290" className="hover:text-accent transition-colors">+55 (11) 3847-2290</a>
                </div>
                
                <div className="flex items-center gap-4 text-foreground/80">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a href="mailto:atelier@maisonlumiere.com.br" className="hover:text-accent transition-colors">atelier@maisonlumiere.com.br</a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Nome Completo" className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground" />
                </div>
                <div>
                  <input type="email" placeholder="E-mail" className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground" />
                </div>
                <div>
                  <input type="text" placeholder="Interesse (Bespoke, Coleção, Styling)" className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground" />
                </div>
                <button className="w-full py-4 bg-primary text-primary-foreground font-sans uppercase tracking-widest text-xs hover:bg-accent hover:text-accent-foreground transition-all duration-300 mt-4">
                  Solicitar Contato
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-serif tracking-widest text-white">
          Maison Lumière
        </div>
        
        <div className="flex gap-6 font-sans text-sm text-white/60">
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">Journal</a>
        </div>
        
        <div className="text-white/40 font-sans text-xs">
          &copy; {new Date().getFullYear()} Maison Lumière. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <Hero />
      <Philosophy />
      <Collections />
      <Materials />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
