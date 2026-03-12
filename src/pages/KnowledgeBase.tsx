import { Layers, Code, FileText, PenTool, ArrowRight, Mail, MapPin, Send } from 'lucide-react';

export default function KnowledgeBase() {
  const articles = [
    {
      title: '高级 React 状态模式',
      desc: '探索用于复杂 UI 工作流的 useReducer、Context API 和状态机。',
      tag: 'React',
      time: '阅读需 10 分钟',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'API 安全最佳实践',
      desc: '保护您的后端免受常见漏洞的侵害，并正确实现 JWT 身份验证。',
      tag: 'Security',
      time: '阅读需 10 分钟',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'CSS Grid 大师课',
      desc: '通过网格区域和响应式技术掌握复杂的布局设计。',
      tag: 'CSS',
      time: '阅读需 10 分钟',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: '部署工作流',
      desc: '使用 GitHub Actions 和 Docker 容器自动化您的生产流水线。',
      tag: 'DevOps',
      time: '阅读需 10 分钟',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="flex flex-col items-center w-full px-6 md:px-10 py-12">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-none">
            <h1 className="text-4xl font-black tracking-tight md:text-5xl mb-4">知识库</h1>
            <p className="text-lg text-slate-600">
              这里记录了我作为 AI 产品练习生的成长轨迹，包括调优过的指令、产品思考以及一些不成熟的小随笔
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">文章分类</h3>
              <nav className="flex flex-col gap-2">
                <a className="flex items-center gap-3 rounded-lg bg-primary/10 px-4 py-2.5 text-primary font-semibold" href="#">
                  <Layers size={20} /> prompt实践
                </a>
                <a className="flex items-center gap-3 rounded-lg px-4 py-2.5 hover:bg-primary/5 text-slate-700 transition-colors" href="#">
                  <Code size={20} /> AI 洞察与技术笔记
                </a>
                <a className="flex items-center gap-3 rounded-lg px-4 py-2.5 hover:bg-primary/5 text-slate-700 transition-colors" href="#">
                  <FileText size={20} /> PM 碎碎念/随手记
                </a>
                <a className="flex items-center gap-3 rounded-lg px-4 py-2.5 hover:bg-primary/5 text-slate-700 transition-colors" href="#">
                  <PenTool size={20} /> 设计相关
                </a>
              </nav>
            </div>
          </aside>

          {/* Articles Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, i) => (
                <div key={i} className="group rounded-xl border border-primary/10 bg-white overflow-hidden hover:shadow-xl transition-all">
                  <div 
                    className="h-48 w-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${article.image})` }}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase">
                        {article.tag}
                      </span>
                      <span className="text-xs text-slate-400">{article.time}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{article.desc}</p>
                    <a className="flex items-center gap-2 text-sm font-bold text-primary cursor-pointer">
                      阅读文章 <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="mt-24 rounded-2xl bg-white shadow-2xl overflow-hidden border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text Side */}
            <div className="p-8 md:p-16 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-transparent">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">联系方式</span>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">让我们一起打造精彩的作品</h2>
              <p className="text-slate-600 mb-8 text-lg">有项目想法或想进行合作？我随时欢迎讨论新的想法和机会。</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Mail size={24} />
                  </div>
                  <span className="font-medium">hello@yourportfolio.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <MapPin size={24} />
                  </div>
                  <span className="font-medium">中国，上海</span>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8 md:p-16 bg-slate-50">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase">姓名</label>
                    <input className="w-full rounded-lg border border-slate-200 bg-white p-3 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm" placeholder="张三" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase">电子邮箱</label>
                    <input className="w-full rounded-lg border border-slate-200 bg-white p-3 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm" placeholder="john@example.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase">主题</label>
                  <input className="w-full rounded-lg border border-slate-200 bg-white p-3 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm" placeholder="项目咨询" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase">留言</label>
                  <textarea className="w-full rounded-lg border border-slate-200 bg-white p-3 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm resize-none" placeholder="请告诉我您的项目详情..." rows={4}></textarea>
                </div>
                <button className="w-full rounded-lg bg-gradient-to-r from-primary to-purple-600 py-4 text-center font-bold text-white shadow-xl shadow-primary/30 hover:opacity-90 transition-all flex items-center justify-center gap-2" type="button">
                  发送消息 <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
