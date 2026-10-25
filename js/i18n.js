(function () {
  'use strict';

  var I18N = {
    zh: {
      '__title': 'Shen - 个人主页',
      'nav.top': '页首',
      'nav.projects': '项目作品',
      'nav.hobbies': '兴趣爱好',
      'sub.stars': '星空堆栈',
      'sub.vote': '班级投票',
      'sub.course': '课件批注',
      'sub.site': '自我介绍网页',
      'hero.welcome': '欢迎来到我的个人主页',
      'sec.projects': '项目作品',
      'sec.hobbies': '兴趣爱好',
      'lbl.result': '项目成果',
      'lbl.did': '我做了什么',
      'lbl.diff': '遇到的困难',
      'lbl.solve': '如何解决',
      'tag.astro': '天体摄影后期',
      'tag.dev': 'opencode开发',
      'tag.deploy-kimi': 'kimi部署',
      'tag.dynamic': '动态网页',
      'tag.skill': '自制skill',
      'tag.deploy-gh': 'GitHub部署',
      'p1.title': '1. opencode辅助星空堆栈',
      'p1.result': '从多张噪声杂乱的raw原图出发，最终合成出银河清晰可见的成品图像。',
      'p1.did': '将数据整理为4个文件夹：lights存放初始照片，另外3个分别存放单独拍摄的不同类型噪声校准帧；之后用opencode调用Siril完成校准、叠加与拉伸，再用StarNet去星、scipy降噪与锐化、星点硬化，最后Screen无损合成。',
      'p1.diff': 'raw原图中可以看出有很多杂乱的噪声信号，亮星暗星混杂，直接处理效果很差；单张成品tif文件高达121MB，超出GitHub单文件100MB的限制。',
      'p1.solve': '通过分类拍摄的校准帧进行堆栈叠加，有效抑制了噪声；将成品tif压缩为高质量jpg后再纳入版本管理。',
      'p1.cap1': 'light文件夹中raw格式原图的相机预览',
      'p1.cap2': 'raw原图在电脑上的显示（可见大量杂乱信号）',
      'p1.cap3': '初始数据分四个文件夹：lights存初始照片，其余存各类噪声校准帧',
      'p1.cap4': '最终成品图像：银河清晰可见',
      'p2.title': '2. 班级投票动态网页',
      'p2.result.pre': '一个可用的班级投票系统，支持发起投票、实时投票和结果展示，在线访问：',
      'p2.did': '开发前先绘制了网页流程设计图，明确网页要显示什么、点哪里会跳转到哪里、有哪些功能；之后用opencode完成开发，并通过kimi部署上线。',
      'p2.diff': '动态网页涉及多个页面与状态跳转，直接动手写代码容易理不清结构。',
      'p2.solve': '先用流程图把页面结构与跳转关系画清楚，再按模块逐个实现功能，开发效率和完成度都有保障。',
      'p2.cap1': '发起投票界面',
      'p2.cap2': '网页流程设计图：显示内容、跳转位置与功能规划',
      'p3.title': '3. 课件批注',
      'p3.result': '通过opencode对blackboard上的讲义中的专业词汇进行中文标注并附加详细解释（详细解释由LLM主要根据ppt生成），共完成13个课件，批注版课件以网页文件形式呈现，原版课件保持不变。',
      'p3.did': '在opencode中沉淀出自制skill（pdf-glossary-annotate），让大模型按照skill中的规范读取课件并生成批注版网页课件；期间多次迭代优化skill和参考词汇表。',
      'p3.diff': '最初没找到合适的专业词汇标注方法；大模型在提取ppt中的专业名词时精度不足。',
      'p3.solve': '自行设计标注格式并封装成skill，每次生成批注后都让大模型总结经验持续完善skill；同时改了好几版参考词汇表，有参照之后专业名词的提取明显更精准。',
      'p3.cap1': '文件夹截图：原版课件与生成的批注版课件',
      'p3.cap2': '标注效果示意：专业词汇下方显示中文翻译',
      'p3.cap3': 'opencode界面：skill的生成与使用',
      'p3.cap4': '标注效果示意：点击专业词汇后屏幕中央弹出中文解释',
      'p4.title': '4. 自我介绍静态网页',
      'p4.result.pre': '你现在看到的这个网站，在线访问：',
      'p4.did': '用opencode开发HTML/CSS静态页面，从零配置Git与SSH密钥，将项目推送到GitHub并启用GitHub Pages完成部署。',
      'p4.diff': '初版布局混乱（侧边栏挤压页脚、样式冲突）；图片引用路径与实际文件不符导致全部无法显示；一个长达547字节的中文文件名导致Pages部署连续失败；图片体积过大导致加载缓慢。',
      'p4.solve': '重构为单一样式表加顶部导航的布局；核对真实文件树后将图片统一整理到分类文件夹并改用简短文件名；缩短超长文件名使部署构建通过；最后将全站图片从约24MB压缩到约1.5MB，显著提升加载速度。',
      'hob1t': '数学',
      'hob1d': '热爱数学学习和探索，享受数学逻辑推理和解题的乐趣。',
      'hob2t': '摄影和后期修图',
      'hob2d': '喜欢摄影创作和后期处理，通过技术手段提升照片艺术效果。',
      'hob3t': '手工绘画',
      'hob3d': '通过绘画表达创意和情感，享受创作过程和艺术创作。',
      'hob4t': '观察饲养动植物',
      'hob4d': '喜欢观察和饲养各种动植物，了解自然生态和生命之美。',
      'hob5t': '利用opencode做小项目',
      'hob5d': '通过opencode开发各种小工具和应用，提升编程能力和问题解决能力。',
      'footer.source': '本站源码'
    },
    en: {
      '__title': 'Shen - Personal Homepage',
      'nav.top': 'Top',
      'nav.projects': 'Projects',
      'nav.hobbies': 'Hobbies',
      'sub.stars': 'Star Stacking',
      'sub.vote': 'Class Voting',
      'sub.course': 'Course Annotation',
      'sub.site': 'This Website',
      'hero.welcome': 'Welcome to my personal homepage',
      'sec.projects': 'Projects',
      'sec.hobbies': 'Hobbies',
      'lbl.result': 'Results',
      'lbl.did': 'What I Did',
      'lbl.diff': 'Challenges',
      'lbl.solve': 'Solutions',
      'tag.astro': 'Astrophotography post-processing',
      'tag.dev': 'Developed with opencode',
      'tag.deploy-kimi': 'Deployed via Kimi',
      'tag.dynamic': 'Dynamic web app',
      'tag.skill': 'Custom skill',
      'tag.deploy-gh': 'Hosted on GitHub Pages',
      'p1.title': '1. opencode-Assisted Star Stacking',
      'p1.result': 'Starting from raw frames full of noise, the final composite clearly reveals the Milky Way.',
      'p1.did': 'Organized the data into four folders: lights for the initial photos, and three more for separately-shot calibration frames of different noise types; then used opencode to drive Siril for calibration, stacking and stretching, followed by StarNet star removal, scipy denoising and sharpening, star-point hardening, and finally a lossless Screen composite.',
      'p1.diff': 'The raw frames show heavy, messy noise with bright and faint stars mixed together, so direct processing gives poor results; the finished TIFF reached 121MB, exceeding the 100MB per-file limit of GitHub.',
      'p1.solve': 'Stacking with the categorized calibration frames effectively suppressed the noise; the finished TIFF was compressed to a high-quality JPG before entering version control.',
      'p1.cap1': 'Camera preview of a raw frame in the lights folder',
      'p1.cap2': 'A raw frame on screen (heavy noise clearly visible)',
      'p1.cap3': 'Initial data in four folders: lights for photos, the rest for noise calibration frames',
      'p1.cap4': 'Final image: the Milky Way clearly visible',
      'p2.title': '2. Class Voting Web App',
      'p2.result.pre': 'A working class voting system that supports creating polls, live voting and result display. Visit: ',
      'p2.did': 'Before writing any code, I drew a page-flow diagram clarifying what each page shows, where each tap navigates, and which features exist; then developed the app with opencode and deployed it online via Kimi.',
      'p2.diff': 'A dynamic web app involves multiple pages and state transitions — writing code directly makes the structure easy to lose track of.',
      'p2.solve': 'First mapped the page structure and navigation with a flow diagram, then implemented the features module by module, ensuring both efficiency and completeness.',
      'p2.cap1': 'Poll creation interface',
      'p2.cap2': 'Page-flow design: content, navigation and feature planning',
      'p3.title': '3. Courseware Annotation',
      'p3.result': 'Used opencode to annotate technical terms in Blackboard lecture slides with Chinese translations and detailed explanations (generated by an LLM mainly from the PPTs); 13 courseware files were completed, each annotated version delivered as a web page while the original stays untouched.',
      'p3.did': 'Distilled a self-made skill (pdf-glossary-annotate) in opencode so the LLM reads the courseware and produces annotated web versions following the skill\u2019s rules; the skill and reference vocabulary were iterated on many times.',
      'p3.diff': 'At first no suitable way to annotate technical terms could be found, and the LLM\u2019s extraction of terms from the PPTs lacked precision.',
      'p3.solve': 'Designed the annotation format myself and packaged it into a skill; after each run I let the model summarize lessons back into the skill, and went through several versions of the reference vocabulary — with references in place, term extraction became much more accurate.',
      'p3.cap1': 'Folder screenshot: original courseware and the generated annotated version',
      'p3.cap2': 'Annotation effect (illustration): Chinese translation under each technical term',
      'p3.cap3': 'opencode interface: generating and using the skill',
      'p3.cap4': 'Annotation effect (illustration): clicking a term pops up a Chinese explanation at screen center',
      'p4.title': '4. Personal Static Website',
      'p4.result.pre': 'The website you are looking at right now. Visit: ',
      'p4.did': 'Developed the HTML/CSS static pages with opencode, set up Git and SSH keys from scratch, pushed the project to GitHub and enabled GitHub Pages.',
      'p4.diff': 'The first version had a messy layout (sidebar squeezing the footer, conflicting styles); image paths did not match the real files so no images displayed; a 547-byte Chinese filename made Pages deployments fail repeatedly; oversized images made loading slow.',
      'p4.solve': 'Refactored into a single stylesheet with a clean layout; checked the real file tree and reorganized images into categorized folders with short names; shortened the overlong filename so the build passed; compressed all site images from about 24MB to about 1.5MB, noticeably speeding up loading.',
      'hob1t': 'Math',
      'hob1d': 'Enjoys learning and exploring mathematics, and the fun of logical reasoning and problem solving.',
      'hob2t': 'Photography & Retouching',
      'hob2d': 'Enjoys photography and post-processing, using technique to enhance the artistry of photos.',
      'hob3t': 'Hand Drawing',
      'hob3d': 'Expresses creativity and emotion through drawing, enjoying both the process and the art.',
      'hob4t': 'Plants & Animals',
      'hob4d': 'Enjoys observing and raising plants and animals, learning about ecology and the beauty of life.',
      'hob5t': 'Small Projects with opencode',
      'hob5d': 'Builds small tools and apps with opencode, sharpening programming and problem-solving skills.',
      'footer.source': 'Source on GitHub'
    }
  };

  function apply(lang) {
    if (!I18N[lang]) { lang = 'zh'; }
    var dict = I18N[lang];
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    document.title = dict['__title'];
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var v = dict[nodes[i].getAttribute('data-i18n')];
      if (v !== undefined) { nodes[i].textContent = v; }
    }
    var imgs = document.querySelectorAll('[data-i18n-alt]');
    for (var j = 0; j < imgs.length; j++) {
      var a = dict[imgs[j].getAttribute('data-i18n-alt')];
      if (a !== undefined) { imgs[j].setAttribute('alt', a); }
    }
    var btns = document.querySelectorAll('.lang-btn');
    for (var k = 0; k < btns.length; k++) {
      var on = btns[k].getAttribute('data-lang') === lang;
      btns[k].classList.toggle('active', on);
      btns[k].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  var saved = null;
  try { saved = window.localStorage.getItem('site-lang'); } catch (e) {}
  var lang = saved;
  if (!lang) {
    var nav = (navigator.language || navigator.browserLanguage || 'en').toLowerCase();
    lang = nav.indexOf('zh') === 0 ? 'zh' : 'en';
  }

  var buttons = document.querySelectorAll('.lang-btn');
  for (var b = 0; b < buttons.length; b++) {
    buttons[b].addEventListener('click', function () {
      var target = this.getAttribute('data-lang');
      try { window.localStorage.setItem('site-lang', target); } catch (e) {}
      apply(target);
    });
  }

  apply(lang);
})();
