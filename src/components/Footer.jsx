export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Sozinha Nunca Mais. Todos os direitos reservados.
        </p>

        <div className="footer-links">
          <a href="#termos">Termos de Uso</a>
          <a href="#privacidade">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
