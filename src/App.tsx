import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Mail, MessageCircle, MapPin, Check } from 'lucide-react';
import { Flower, Star } from './components/Shapes';

export default function App() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const [copiedType, setCopiedType] = React.useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string, type: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="min-h-screen relative w-full overflow-hidden">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-6 md:px-16 fixed top-0 z-50 bg-[#FAF8F5]/80 backdrop-blur-md border-b border-ink/5 pt-8">
         <div className="text-sm font-semibold uppercase tracking-widest hidden md:block text-ink">Works</div>
         <div className="text-3xl md:text-4xl text-display italic font-semibold mx-auto md:mx-0 text-ink">Hou Mingyu.</div>
         <div className="text-sm font-semibold uppercase tracking-widest hidden md:block text-ink">Profiles</div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12">
        {/* Background Decorative Shapes */}
        <motion.div style={{ y: y1 }} className="absolute -left-32 md:-left-16 top-[15%] md:top-[10%] z-0 select-none opacity-90">
          <Flower fill="var(--color-brand-blue)" className="w-72 h-72 md:w-[450px] md:h-[450px] hover:rotate-[360deg] transition-transform duration-[1500ms] ease-in-out cursor-default" />
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="absolute -right-32 md:-right-16 top-[30%] md:top-[20%] z-0 select-none opacity-90">
          <Flower fill="var(--color-brand-red)" className="w-72 h-72 md:w-[450px] md:h-[450px] hover:rotate-[360deg] transition-transform duration-[1500ms] ease-in-out cursor-default" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center px-6 w-full max-w-6xl mx-auto mt-16 md:mt-8 pointer-events-none">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="text-center w-full pointer-events-auto"
           >
             <div className="flex justify-center mb-8">
               <Star fill="var(--color-brand-pink)" className="w-12 h-12" />
             </div>
             
             <h1 className="text-6xl md:text-[80px] leading-[1.2] font-sans font-bold tracking-tight text-center md:whitespace-nowrap text-ink">
               理性解决<span className="italic text-brand-blue font-display tracking-[-2px]">逻辑</span><br />
               感性传达<span className="italic text-brand-blue font-display tracking-[-2px]">情绪</span>
             </h1>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4, duration: 1 }}
             className="max-w-2xl mx-auto mt-20 text-center flex flex-col items-center pb-8 pointer-events-auto"
           >
             <div className="flex flex-col items-center mb-6">
               <span className="label-tag mb-4 text-brand-blue border-brand-blue/30 bg-brand-blue/5">01 ABOUT ME</span>
               <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-ink mb-8">关于我</h2>
               <p className="text-lg md:text-xl leading-loose font-medium text-ink text-center">
                  你好，我是 <strong className="font-bold px-2 text-2xl text-brand-blue">侯明宇</strong>。
                  一名来自湖北工业大学的产品设计专业学生。专注<br className="hidden md:block"/>
                  于创造高效且具共情力的数字体验。
               </p>
             </div>
             <p className="text-base md:text-lg leading-relaxed mt-6 text-ink/80 max-w-xl mx-auto font-medium">
                我能为你提供... 有感染力、能与用户建立情感连接的数字设计体验。
             </p>

             <button className="mt-12 px-8 py-4 bg-ink text-bg rounded-full font-medium hover:bg-brand-blue transition-colors flex items-center gap-3 group pointer-events-auto">
                <span className="tracking-wide">View Portfolio</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
             </button>
           </motion.div>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-20">
          <h2 className="font-sans font-bold tracking-tight text-5xl md:text-6xl mb-6 text-ink">我擅长...</h2>
          <p className="text-xl text-ink/70 font-medium tracking-wide">用设计解决问题，让数字体验更有温度。</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bento-card flex flex-col group !p-8">
            <span className="label-tag text-brand-blue mb-6">01 STRENGTH</span>
            <h3 className="text-3xl font-display leading-[1.1] mb-4 text-ink">UX/UI Design</h3>
            <p className="text-ink leading-relaxed font-semibold mb-2">坚持调研驱动方案。</p>
            <p className="text-ink/60 mt-1 leading-relaxed text-sm">擅长从产品自查、竞品分析与用户调研中精准定位痛点，并转化为直观的交互逻辑。</p>
          </div>
          <div className="bento-card flex flex-col group !p-8">
            <span className="label-tag text-brand-red mb-6">02 STRENGTH</span>
            <h3 className="text-3xl font-display leading-[1.1] mb-4 text-ink">Visual Storytelling</h3>
            <p className="text-ink leading-relaxed font-semibold mb-2">拒绝平庸的色彩堆砌。</p>
            <p className="text-ink/60 mt-1 leading-relaxed text-sm">擅长提取品牌与内容的“情绪色”，通过视觉语言建立与用户的深层连接。</p>
          </div>
          <div className="bento-card flex flex-col group !p-8">
            <span className="label-tag text-brand-yellow mb-6">03 STRENGTH</span>
            <h3 className="text-3xl font-display leading-[1.1] mb-4 text-ink">Global Vision</h3>
            <p className="text-ink leading-relaxed font-semibold mb-2">流利的英文文档阅读与交流。</p>
            <p className="text-ink/60 mt-1 leading-relaxed text-sm">优秀的英语能力（CET-4/6），持续关注 Web 3.0 及 Vibe Coding 等趋势，探索设计与代码的融合。</p>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="py-24 px-6 w-full max-w-[1400px] mx-auto relative z-10">
        <div className="mb-20 flex flex-col">
          <h2 className="font-sans font-bold tracking-tight text-5xl md:text-6xl mb-6 text-ink">精选作品</h2>
          <p className="text-xl text-ink/70 font-medium tracking-wide max-w-lg leading-relaxed">
            结合逻辑思考，驱动下一次的情绪体验突破 —— 打造兼具实用性与感官共鸣的设计。
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Project A (Qishui) */}
          <div className="group bento-card p-8 md:p-12 flex flex-col md:flex-row min-h-[500px] gap-12 items-center">
            <div className="flex-1 w-full relative min-h-[300px] md:min-h-[400px] flex items-center justify-center order-2 md:order-1">
              <div className="absolute inset-0 border border-ink/5 rounded-[32px] transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              
              <div className="bg-ink/5 backdrop-blur border border-ink/10 p-4 rounded-[32px] shadow-sm w-4/5 transform rotate-3 z-10 group-hover:scale-105 transition-transform duration-500 opacity-95">
                <img 
                  src="/4.png" 
                  alt="汽水音乐 音乐体验机制优化探索" 
                  className="w-full h-auto rounded-[20px] shadow-xl object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex-1 z-10 flex flex-col items-start justify-center order-1 md:order-2">
              <span className="label-tag mb-4">02 SELECTED WORKS</span>
              <h3 className="text-4xl md:text-[40px] leading-[1.1] mb-4 font-display">汽水音乐<br/>视听体验优化——C端</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                 <span className="px-3 py-1 bg-ink/5 border border-ink/10 text-ink rounded-full text-xs font-bold tracking-wider">UX/UI</span>
                 <span className="px-3 py-1 bg-ink/5 border border-ink/10 text-ink rounded-full text-xs font-bold tracking-wider">Interaction Design</span>
                 <span className="px-3 py-1 bg-ink/5 border border-ink/10 text-ink rounded-full text-xs font-bold tracking-wider">Product Design</span>
              </div>
              <div className="flex flex-col gap-3 mb-10 max-w-xl text-sm">
                 <p className="text-ink/80 leading-relaxed"><strong className="text-ink mr-1">挑战 (Challenge)：</strong>针对流媒体播放体验单调、社交分享链路过于单一（仅链接分享）的痛点进行优化。</p>
                 <p className="text-ink/80 leading-relaxed"><strong className="text-ink mr-1">方案 (Solution)：</strong>引入沉浸式多模态播放器，设计沉浸互动分享卡片。</p>
                 <p className="text-ink/80 leading-relaxed"><strong className="text-ink mr-1">核心洞察 (Insight)：</strong>独创“情绪代表色”提取机制，并不只以颜色占比为标准，而是选取最具情绪代表性的视觉元素。</p>
              </div>
              
              <a 
                href="/汽水音乐视听体验优化.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-brand-blue text-white font-bold px-8 py-4 rounded-full hover:bg-brand-yellow hover:text-ink transition-colors group cursor-pointer"
              >
                查看完整设计案
                <ArrowDown className="w-4 h-4 ml-2 group-hover:block hidden -rotate-90 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Project B (Douyin) */}
            <div className="col-span-1 md:col-span-7 group bento-card p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
              <div>
                 <span className="label-tag mb-4">03 CAMPAIGN</span>
                 <h3 className="text-[40px] leading-[1.1] mb-4 font-display">抖音<br/>春日漫游季</h3>
                 <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-ink/5 border border-ink/10 text-ink rounded-full text-xs font-bold tracking-wider">Visual Design</span>
                    <span className="px-3 py-1 bg-ink/5 border border-ink/10 text-ink rounded-full text-xs font-bold tracking-wider">Campaign</span>
                    <span className="px-3 py-1 bg-ink/5 border border-ink/10 text-ink rounded-full text-xs font-bold tracking-wider">Branding</span>
                 </div>
                 <p className="text-ink/80 mb-2 max-w-md text-sm"><strong className="text-ink">定位：</strong>视觉运营虚拟项目。</p>
                 <p className="text-ink/80 max-w-md text-sm"><strong className="text-ink">执行：</strong>围绕“高级感、年轻化”的视觉基调，构建具有春日氛围感的品牌传播链路。</p>
              </div>
              <div className="relative h-48 w-full mt-10 md:mt-0 flex items-end justify-end">
                  <Flower fill="var(--color-brand-red)" className="absolute -bottom-16 -left-8 w-40 h-40 group-hover:rotate-45 transition-transform duration-700 opacity-90" />
                  <a href="/Slide 16_9 - 1_compressed.pdf" target="_blank" rel="noopener noreferrer" className="bg-white/80 backdrop-blur-md border border-white rounded-[24px] p-6 shadow-sm relative z-10 mr-4 md:mr-12 group-hover:-translate-y-4 group-hover:bg-brand-yellow transition-all duration-500 inline-flex items-center gap-3 cursor-pointer">
                    <Star fill="var(--color-ink)" className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500 delay-100" />
                    <span className="flex flex-col">
                      <span className="text-display italic text-2xl font-bold text-ink whitespace-nowrap">Spring Vibe</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-ink/50 mt-1 flex items-center gap-1 group-hover:text-ink/80 transition-colors">
                        View PDF <ArrowDown className="w-3 h-3 -rotate-90" />
                      </span>
                    </span>
                  </a>
              </div>
            </div>

            {/* Toolkit */}
            <div className="col-span-1 md:col-span-5 group bento-card p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
              <span className="label-tag mb-6">04 TOOLKIT</span>
              <h3 className="text-[32px] leading-[1.1] mb-4 font-display">My Toolkit</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                 <span className="px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-full text-xs font-bold tracking-wider uppercase">Figma</span>
                 <span className="px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-full text-xs font-bold tracking-wider uppercase">Photoshop</span>
                 <span className="px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-full text-xs font-bold tracking-wider uppercase">Web 3.0</span>
              </div>
              <ul className="text-sm space-y-3 mt-4 text-ink/80">
                 <li>• Figma (Expert)</li>
                 <li>• Web 3.0 / Vibe Coding</li>
                 <li>• Photoshop / Illustrator</li>
                 <li>• CET-6 (Global Vision)</li>
                 <li>• Animation & UX/UI</li>
              </ul>
              <Star fill="var(--color-brand-red)" className="w-12 h-12 absolute bottom-8 right-8 mix-blend-multiply opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-24 px-6 w-full max-w-[1400px] mx-auto relative z-10">
        <div className="bento-card bg-brand-yellow !rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="flex flex-col z-10 relative">
             <span className="label-tag mb-4">05 GET IN TOUCH</span>
             <h2 className="text-3xl md:text-[40px] leading-none font-bold tracking-tight">侯明宇<br/><span className="text-brand-blue">(WX:Jacquemuss)</span></h2>
             <p className="text-lg font-medium mt-6 md:mt-8 opacity-80 max-w-md">
                如果你正在寻找一位既懂逻辑、又懂共情，且具备国际化潜力的设计新人，欢迎联系我。
             </p>
          </div>
          
          <div className="flex flex-col md:text-right gap-6 z-10 relative">
             <a href="mailto:1079616258@qq.com" className="text-2xl md:text-4xl font-display hover:text-brand-blue transition-colors text-ink">1079616258@qq.com</a>
             <div className="flex items-center gap-4 text-ink self-start md:self-end mt-4">
                <a href="#" onClick={(e) => handleCopy(e, '1079616258@qq.com', 'email')} className="p-3 bg-white/40 hover:bg-white rounded-full transition-colors border border-ink/10 relative group">
                  {copiedType === 'email' ? <Check className="w-5 h-5 text-green-600" /> : <Mail className="w-5 h-5"/>}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {copiedType === 'email' ? '已复制！' : '复制邮箱'}
                  </div>
                </a>
                <a href="#" onClick={(e) => handleCopy(e, 'Jacquemuss', 'wechat')} className="p-3 bg-white/40 hover:bg-white rounded-full transition-colors border border-ink/10 relative group">
                  {copiedType === 'wechat' ? <Check className="w-5 h-5 text-green-600" /> : <MessageCircle className="w-5 h-5"/>}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {copiedType === 'wechat' ? '已复制！' : '复制微信'}
                  </div>
                </a>
             </div>
          </div>
          
          <Star fill="var(--color-brand-red)" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 animate-[spin_20s_linear_infinite] pointer-events-none" />
        </div>
      </section>

      {/* Footer Flower Grid */}
      <div className="w-full overflow-hidden pt-12 pb-24 cursor-default select-none pointer-events-none relative z-0">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex justify-center gap-6 md:gap-12 min-w-max mb-6 md:mb-12" style={{marginLeft: i % 2 === 0 ? '-60px' : '0px'}}>
             {[...Array(15)].map((_, j) => {
                const colors = ["var(--color-brand-red)", "var(--color-brand-blue)", "var(--color-brand-yellow)", "var(--color-brand-pink)"];
                const fill = colors[(i+j) % colors.length];
                return (
                  <React.Fragment key={j}>
                    <Flower fill={fill} className="w-20 h-20 md:w-32 md:h-32 hover:scale-110 transition-transform duration-300" />
                  </React.Fragment>
                );
             })}
          </div>
        ))}
        <div className="text-center mt-20 text-ink/40 text-sm font-medium">
          <p>Great design is always hidden in plain sight.</p>
          <p className="mt-4 text-display italic text-lg text-ink/60">© {new Date().getFullYear()} Jacquemuss.</p>
        </div>
      </div>
    </div>
  );
}
