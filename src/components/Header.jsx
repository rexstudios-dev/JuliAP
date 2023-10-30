import { Link } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom'; 

export default function Header() {
 const location = useLocation(); 

  return (
    <header className="bg-indigo-700 shadow-lg animated fade-in-down">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-3xl text-white font-bold">Julieta</h1>
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-gray-200 hover:text-white transition duration-300 transform hover:scale-110"
          >
            Inicio
          </Link>

          {/* inutiles no rompan nada vos principalmente kevin */}
          {location.pathname !== '/gallery' && (
            <Link
              to="/gallery"
              className="text-gray-200 hover:text-white transition duration-300 transform hover:scale-110"
            >
              Galería
            </Link>
          )}
          <Link
            to="/contact"
            className="text-gray-200 hover:text-white transition duration-300 transform hover:scale-110"
          >
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}
