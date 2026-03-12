import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col items-center w-full px-6 md:px-10 py-20">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Content */}
        <div className="flex-1 w-full">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 border border-primary/10 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2 rounded-full border border-primary/10 text-primary font-bold text-sm shadow-sm">
              关于我
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-8 mt-4 text-justify">
              我是练习时长两年半的产品经理郭能敏。我擅长于快速迭代原型并根据市场反馈完成产品的闭环优化。
              拥有超强执行力和主观能动性，习惯于在复杂业务逻辑中梳理出最优路径，推动跨部门高效协作；对新鲜的事物充满热情和探索欲望，喜欢拆解优秀竞品和探索最新的技术，并将所学转化为自己的能力储备。
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-6">我的核心竞争力：</h3>
            
            <ul className="space-y-4">
              {[
                '一线大厂 AI 产品实战与落地能力',
                '不知名 AI 技术追随者',
                '用户体验洞察与产品迭代优化',
                'UI/UX 设计协作',
                'API 开发与集成'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            将 <span className="text-primary">创意</span> 转化为 <span className="text-primary">现实</span>
          </h2>
          <p className="text-slate-600 text-lg mb-12 leading-relaxed">
            拥有 2.5 年的产品经理经验，我擅长于快速迭代原型并根据市场反馈完成产品的闭环优化。
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { num: '2.5', label: '年经验' },
              { num: '3+', label: 'AI CODING' },
              { num: '40+', label: '承接需求' },
              { num: '30+', label: '竞赛奖项' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
                <h4 className="text-4xl font-black text-primary mb-2">{stat.num}</h4>
                <p className="text-sm font-bold text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
