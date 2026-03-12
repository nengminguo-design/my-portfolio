import { Terminal, Zap, Share2, Settings, Database, PenTool, LayoutGrid, Send } from 'lucide-react';

export default function Experience() {
  const skills = [
    { name: 'claude code', level: '初级', percent: 60, icon: <Terminal size={20} />, color: 'text-red-500', bg: 'bg-red-50' },
    { name: 'cursor', level: '初级', percent: 65, icon: <Zap size={20} />, color: 'text-pink-500', bg: 'bg-pink-50' },
    { name: 'dify', level: '中级', percent: 80, icon: <Share2 size={20} />, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'N8N', level: '初级', percent: 65, icon: <Settings size={20} />, color: 'text-slate-700', bg: 'bg-slate-100' },
    { name: 'MySQL', level: '中级', percent: 80, icon: <Database size={20} />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { name: 'Figma', level: '高级', percent: 95, icon: <PenTool size={20} />, color: 'text-purple-500', bg: 'bg-purple-50' },
    { name: 'modao', level: '高级', percent: 95, icon: <LayoutGrid size={20} />, color: 'text-orange-600', bg: 'bg-orange-50' },
    { name: '飞书', level: '高级', percent: 90, icon: <Send size={20} />, color: 'text-green-500', bg: 'bg-green-50' },
  ];

  const experiences = [
    {
      title: 'AI 产品实习生',
      company: '深圳惊叹科技有限公司',
      date: '2025.11 - 2026.2',
      desc: '【项目背景】midoo是一款出海的语言教育agent，为语言学习者提供个性化、动态生长的学习路径。当前产品正处在研发的初期，旨在利用 AI 技术实现定制化的口语练习体验，提升产品的付费率。',
      bullets: [
        '【用户注册链路优化】针对注册完成率仅58%、用户信息收集环节流失高的问题，通过端侧数字人+对话式Workflow重构采集逻辑，引入动态追问机制增强个性化感知，最终使注册完成率提升18.78%，支付转化率提升6.4%。',
        '【从0-1搭建场景练习模块】为解决用户因“练习场景不明确”导致的留存低下问题，构建“分类-场景-脚本”三层架构，通过AI Workflow自动化生成包含角色人设与三阶任务链的沉浸式对话环境，填补产品在具体场景功能欠缺，完整实验周期内，次日留存提升了8.63%，支付率提升了3.64%。',
        '【核心学习体验优化】 针对上课板块查词延迟高（1.5s）及纠错功能缺失的问题，提出轻量API秒出基础释义+Workflow异步解析语境的方案，并配套搭建纠错逻辑与Redis词库，实现查词毫秒级响应，显著优化了查词体验。'
      ]
    },
    {
      title: '产品经理实习生',
      company: '百度科技',
      date: '2025.5 - 2025.9',
      desc: '【项目背景】百度健康商城内循环服务于投流的商家（药品、保健品、医疗器械等），商品转化率达到行业准线，为了进一步突破现有瓶颈，决定将策略转向通过提升产品品质认知和商家的品牌认知，以促进用户下单意愿。',
      bullets: [
        '【参数板块重构】商详页参数体系混乱问题，用户很难总结获取有用信息，因此将参数列因子按照影响决策相关性进行重新排序，参数板块点击率提升15.36%，商详页下单转化率提升3.56%，广告消费新增7.3w/天。',
        '【药师科普板块建设】主导搭建“药师科普”内容体系。联合专业药师，优先覆盖具备药监认证的有保证的商品，构建专业内容。内容覆盖科普主体的作用机制、核心功效等。支付率提升1.58%，转化率提升0.95%，推全后预计新增订单203单/天。',
        '【店铺板块优化】当前用户对商家品牌认同感不强，通过制定店铺数据露出的标准，在店铺名片中可视化展示商家销量、好评率、复购率等关键数据，增强用户对优质商家的感知。转化率提升了1.17%，推全后预计现金消费新增4.7w/日。',
        '【数据监测】建立并维护项目的数据监控与评估体系。一方面，通过渠道看板进行日常数据异动监测与归因分析；另一方面，主导所有需求的A/B测试，以量化数据分析需求的实际收益，调整需求的方向，指导页面的迭代。'
      ]
    },
    {
      title: 'AI产品实习生',
      company: '阿里巴巴',
      date: '2024.4 - 2024.8',
      desc: '【项目背景】本项目借助阿里已有的AI转写产品底层技术能力，推动通义听悟的上线，并在一期实现两大功能模块实时转写和非实时转写。一期是以吸引用户和导流为主，上线3个月用户量4.1w+达标，但DAU5.7k+、7日用户留存9.4%并不达标。',
      bullets: [
        '【播客转写功能新增】基于数据分析的结果，以及本项目的目标是拉新促活，因此从拓展用户使用时间和帮助他们获取一个确定的结构化的音视频内容这两个点出发，确定了播客转写的场景。进一步进行市场调研和用户调研，分析用户的需求和痛点后，确定了本场景下项目的价值。通过RSS订阅链接直接进行播客内容转写，基于一期沉淀的转写能力和模型，进行转写内容的总结。最终上线DAU增长了49.12%，留存上升了3%，用户数量增长了45.24%，超过了预期。',
        '【prompt 设计与迭代】针对播客场景，在原先已有的prompt基础上进行调优，设计了包含任务背景、语气、任务描述和规则、黄金范例等的结构化prompt，引导模型精准完成摘要、关键词、章节速览等任务。并引入思路链机制，定义模型思考的SOP，将事实性错误率降低至5%以下。',
        '【prompt评估体系建立】创建基准评估数据集，覆盖了科技、商业、人文、访谈等8大类播客，并定义了包含基础转写和智能转写质量两个维度下的7个核心维度的评分标准，为每个评估案例，创建一套结构化的评分依据，为AI智能转写质量优化提供了量化依据。'
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center w-full px-6 md:px-10 py-10">
      <div className="max-w-5xl w-full flex flex-col">
        {/* Skills Section */}
        <section className="mt-4">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-slate-900 text-[28px] font-bold leading-tight tracking-tight">专业技能</h2>
            <p className="text-slate-600 text-base font-normal leading-normal max-w-2xl">
              精心挑选的我所擅长的技术和工具，用于构建从强大的后端到精美的界面的高质量数字产品。
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white border border-primary/5 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`size-10 rounded-lg ${skill.bg} flex items-center justify-center ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <span className="font-bold text-slate-900">{skill.name}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
                    <span>{skill.level}</span>
                    <span>{skill.percent}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${skill.percent}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-16">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-slate-900 text-2xl font-black">工作经历</h2>
            <div className="h-px bg-slate-200 grow"></div>
          </div>
          
          <div className="relative flex flex-col gap-8">
            {/* Vertical Line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-slate-200"></div>
            
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-10">
                <div className="absolute left-0 top-1.5 size-6 rounded-full border-2 border-primary bg-background-light z-10 flex items-center justify-center">
                  <div className="size-2 rounded-full bg-primary/20"></div>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{exp.title}</h3>
                    <p className="text-primary text-sm font-semibold mb-3">{exp.company}</p>
                    <p className="text-slate-600 text-sm text-justify leading-7 mb-4">{exp.desc}</p>
                    <div className="space-y-4">
                      {exp.bullets.map((bullet, j) => (
                        <div key={j} className="text-slate-600 text-sm text-justify leading-7">
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full">
                      {exp.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Banner */}
        <section className="mt-16 bg-primary/5 rounded-xl p-8 border border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">静待更多花开</h3>
              <p className="text-slate-600">在未来的时光里，更多的创意与成果将如繁花般逐一绽放。</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
