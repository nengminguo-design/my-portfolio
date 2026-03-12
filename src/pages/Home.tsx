import { Download, Send, Code, Briefcase, Share2, Smartphone, Globe, Database, Palette, Terminal, CheckCircle2, Rocket } from 'lucide-react';
import resumePdf from '../jianli/郭能敏-18300155496.pdf';

const profilePic = '/profile.png';

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = '郭能敏-18300155496.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center w-full px-6 md:px-10 py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start z-10">
          <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 flex items-center gap-2 w-fit">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            虚位以待
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
            我是 <span className="relative inline-block px-1">
              <span className="text-black">郭锅锅锅</span>
              <span className="absolute inset-x-0 bottom-1 h-2 bg-primary -z-10 pointer-events-none select-none" aria-hidden="true">
              </span>
            </span>，一名 <span className="text-primary">AI产品经理</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
            练习时长两年的 AI 产品经理，擅长用大厂实战经验与设计思维，为用户打造有温度的智能体验~
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-16">
            <button 
              onClick={handleDownload}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/30"
            >
              联系我 <Send size={18} />
            </button>
            <button 
              onClick={handleDownload}
              className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-sm border border-slate-200"
            >
              下载简历 <Download size={18} />
            </button>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 group-hover:text-primary group-hover:shadow-md transition-all">
                <Code size={24} />
              </div>
              <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">GITHUB</span>
            </div>
            <div className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 group-hover:text-primary group-hover:shadow-md transition-all">
                <Briefcase size={24} />
              </div>
              <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">LINKEDIN</span>
            </div>
            <div className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 group-hover:text-primary group-hover:shadow-md transition-all">
                <Share2 size={24} />
              </div>
              <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">TWITTER</span>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 relative flex justify-center items-center mt-10 lg:mt-0 z-10">
          <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border-[12px] border-primary/10 p-2">
            <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-white shadow-2xl relative">
              <img 
                src={profilePic} 
                alt="Profile" 
                className="w-full h-full object-cover relative z-20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none z-10"></div>
            </div>
            
            {/* Badges */}
            <div className="absolute top-12 -right-4 md:-right-12 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce z-30" style={{ animationDuration: '3s' }}>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <CheckCircle2 size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">练习时长</p>
                <p className="text-base font-black text-slate-900">2年+</p>
              </div>
            </div>

            <div className="absolute bottom-12 -left-4 md:-left-12 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce z-30" style={{ animationDuration: '4s' }}>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Rocket size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">项目经验</p>
                <p className="text-base font-black text-slate-900">3段相关实习经历</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specializations */}
      <div className="max-w-6xl w-full mt-32 mb-20 z-10">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">专业领域</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: <Smartphone size={28} />, title: 'User Insights', desc: '用户洞察', color: 'text-purple-500' },
            { icon: <Globe size={28} />, title: 'AI Workflow', desc: 'AI 工作流', color: 'text-blue-500' },
            { icon: <Code size={28} />, title: 'AI Coding', desc: 'AI 编程', color: 'text-red-500' },
            { icon: <Palette size={28} />, title: 'Interaction Design', desc: '交互设计', color: 'text-teal-500' },
            { icon: <Terminal size={28} />, title: 'Rapid Prototyping', desc: '快速原型', color: 'text-slate-700' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col items-start">
              <div className={`mb-6 ${item.color}`}>
                {item.icon}
              </div>
              <h4 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
