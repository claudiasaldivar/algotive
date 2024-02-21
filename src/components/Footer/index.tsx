
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 flex justify-center items-center flex-col">
      <div className="container mx-auto flex justify-center items-center">
        <img
          className="h-10 w-auto cursor-pointer"
          onClick={() => window.location.assign('https://www.algotive.ai/es-mx/')}
          src="https://media.licdn.com/dms/image/C560BAQFrsaZOj6h6Kg/company-logo_200_200/0/1646068526113/algotive_logo?e=2147483647&v=beta&t=HTZji5ph2U2lzmd-vtfJi9VV015mfZ0S1i7m4ZSNZtM"
          alt="Algotive Logo"
        />
      </div>
      <div className="container mx-auto flex justify-center items-center text-white text-sm mt-2">
        <p>Derechos Reservados &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
