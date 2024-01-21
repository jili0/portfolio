import "../stylesheets/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        Copyright &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Footer;
