const Footer = () => {
  return (
    <footer className="py-8 bg-traffic-dark text-accent-foreground/60">
      <div className="container">
        <div className="text-center">
          <p className="text-sm mb-2">
            © {new Date().getFullYear()} Método Aprova DETRAN. Todos os direitos reservados.
          </p>
          <p className="text-xs">
            Este produto não possui nenhuma ligação oficial com o DETRAN ou qualquer órgão governamental.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
