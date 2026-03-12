import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const navLinks = [
    { name: '首页', path: '/' },
    { name: '关于我', path: '/about' },
    { name: '工作经验', path: '/experience' },
    { name: '作品集', path: '/portfolio' },
    { name: '知识库', path: '/knowledge' },
  ];

  return (
    <header className="flex items-center justify-center px-4 md:px-10 py-6 border-b border-primary/10 backdrop-blur-md sticky top-0 bg-background-light/80 z-50">
      <div className="max-w-6xl w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Sparkles size={18} />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
            郭锅锅锅<span className="text-primary">.</span>
          </h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm ${
                  isActive
                    ? 'text-primary font-semibold relative after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary'
                    : 'text-slate-600 font-medium hover:text-primary transition-colors'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <button className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/30 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5">
          联系我
        </button>
      </div>
    </header>
  );
}
