import { Globe, Mail, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto py-10 border-t border-primary/10 px-6 md:px-20 lg:px-40 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 opacity-60">
          <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
            <Sparkles size={14} />
          </div>
          <span className="text-sm font-bold">郭锅锅锅</span>
        </div>
        <div className="flex gap-4">
          <a className="text-slate-400 hover:text-primary transition-colors" href="#">
            <Globe size={20} />
          </a>
          <a className="text-slate-400 hover:text-primary transition-colors" href="#">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
