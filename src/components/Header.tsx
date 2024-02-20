import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <h1 className="text-black text-2xl font-bold">Algotive Challenge</h1>
        </div>
        <div>
          <img 
            className='h-10 w-auto cursor-pointer' 
            onClick={() => window.location.assign('https://www.algotive.ai/es-mx/')} 
            src="https://media.licdn.com/dms/image/C560BAQFrsaZOj6h6Kg/company-logo_200_200/0/1646068526113/algotive_logo?e=2147483647&v=beta&t=HTZji5ph2U2lzmd-vtfJi9VV015mfZ0S1i7m4ZSNZtM" 
            alt="Algotive Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
