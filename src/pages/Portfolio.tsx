import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import LazyImage from '../components/LazyImage';

interface Project {
  title: string;
  subtitle: string;
  cover: string;
  tags: string[];
  detailImages: string[];
  categories: string[];
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('全部项目');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // 本地图片资源前缀
  const sparkBaseUrl = '/portfolio/portfolio1-spark/';
  const sparkImages = Array.from({ length: 11 }, (_, i) => `${sparkBaseUrl}${i + 1}.png`);

  const mumuBaseUrl = '/portfolio/portfolio2-MUMU/';
  const mumuImages = Array.from({ length: 22 }, (_, i) => `${mumuBaseUrl}${i + 1}.png`);

  const yexingBaseUrl = '/portfolio/portfolio3-Yexing/';
  const yexingImages = Array.from({ length: 14 }, (_, i) => `${yexingBaseUrl}${i + 1}.png`);

  const xingzheBaseUrl = '/portfolio/portfolio4-Xingzhe/';
  const xingzheImages = [`${xingzheBaseUrl}Frame%201.png`];

  const arBaseUrl = '/portfolio/portfolio5-AR 腹腔镜手术/';
  const arImages = Array.from({ length: 26 }, (_, i) => `${arBaseUrl}${i + 1}.png`);

  const vocaflowBaseUrl = '/portfolio/portfolio6-vocaflow/';
  const vocaflowImages = [`${vocaflowBaseUrl}1.png`];

  const projects: Project[] = [
    {
      title: 'Spark！-儿童灵感绘画应用',
      subtitle: '一款搭载于ipad，专注于儿童灵感收集和培养的应用。',
      cover: sparkImages[0],
      tags: ['交互设计', 'AI coding', 'ipad应用'],
      detailImages: sparkImages,
      categories: ['ai coding', 'UI/UX 设计']
    },
    {
      title: '沐沐-专注时刻',
      subtitle: '通过物理翻转的方式实现快速手机防沉迷，并设计一套奖励机制制鼓励用户减少手机沉迷',
      cover: mumuImages[0],
      tags: ['交互设计', 'APP应用'],
      detailImages: mumuImages,
      categories: ['UI/UX 设计']
    },
    {
      title: '野行-寻找志同道合的人',
      subtitle: '野行强调了搭伴的安全性、旅途中的相互配合以及整体的旅行体验。我们的目标是打造一个寻找志同道合的搭子平台',
      cover: yexingImages[0],
      tags: ['交互设计', 'APP应用'],
      detailImages: yexingImages,
      categories: ['UI/UX 设计']
    },
    {
      title: '行者-无人驾驶公交系统设计',
      subtitle: '整个公交出行系统的设计旨在优化公交资源配置的同时减少用户在道路上花费的时间，达到安全，高效，共融的出行体验。',
      cover: xingzheImages[0],
      tags: ['无人驾驶', '产品设计', '系统'],
      detailImages: xingzheImages,
      categories: ['智能产品']
    },
    {
      title: 'AR 腹腔镜手术导航系统',
      subtitle: '通过增强现实（AR）技术的空间交互优势，解决腹腔镜手术中医生空间感知能力受限的问题。',
      cover: arImages[0],
      tags: ['AR', '医疗设计', '交互'],
      detailImages: arImages,
      categories: ['UI/UX 设计', '智能产品']
    },
    {
      title: 'VocaFlow-智能语音助手',
      subtitle: '是一款轻量级的语音转文字工具，方便用户与大模型进行更快速的对话。',
      cover: vocaflowImages[0],
      tags: ['语音识别', 'AI', 'AI coding'],
      detailImages: vocaflowImages,
      categories: ['ai coding']
    }
  ];

  const filteredProjects = activeTab === '全部项目' 
    ? projects 
    : projects.filter(p => p.categories.includes(activeTab));

  return (
    <div className="flex flex-col items-center w-full px-6 md:px-10 py-12 md:py-20">
      <div className="max-w-7xl w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">作品集</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            这里收录了我参与过的 AI 产品迭代、从 0 到 1 的创意落地，以及一些关于交互设计的获奖尝试。
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 mb-8 border-b border-slate-200">
          <div className="flex gap-8 overflow-x-auto pb-px">
            {['全部项目', 'ai coding', 'UI/UX 设计', '智能产品'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap pb-4 text-sm font-bold border-b-2 transition-all ${
                  activeTab === tab 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video w-full bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10">
                  <button className="bg-primary text-white px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                    查看详情
                  </button>
                </div>
                <LazyImage
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-1">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] bg-black/70"
          onClick={() => setSelectedProject(null)}
        >
          {/* Modal Content Container (Green Area - White Background) */}
          <div 
            className="relative w-full h-full bg-[#f5f5f5] overflow-y-auto animate-in fade-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button (Blue Area) */}
            <button 
              className="fixed top-8 right-8 md:top-10 md:right-10 z-[120] p-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full shadow-2xl transition-all border border-gray-100 group"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Content Area (Red Area - Header & Images) */}
            <div className="max-w-[90vw] mx-auto w-full">
              {/* Header Section */}
              <div className="px-10 py-16 md:py-24">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{selectedProject.title}</h2>
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <span className="text-sm font-semibold text-green-600 tracking-wide uppercase">AVAILABLE FOR WORK</span>
                </div>
              </div>

              {/* Image Content Section */}
              <div className="w-full p-0 m-0 flex flex-col gap-0">
                {selectedProject.detailImages.map((img, idx) => (
                  <LazyImage
                    key={idx}
                    src={img}
                    alt={`${selectedProject.title} detail ${idx + 1}`}
                    className="w-full h-auto block"
                    referrerPolicy="no-referrer"
                  />
                ))}
                {/* Bottom Spacer */}
                <div className="h-24 w-full" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
