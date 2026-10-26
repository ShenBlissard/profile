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
      'lbl.advantage': '网页优势',
      'tag.astro': '天体摄影后期',
      'tag.dev': 'opencode开发',
      'tag.deploy-kimi': 'kimi部署',
      'tag.dynamic': '动态网页',
      'tag.skill': '自制skill',
      'tag.deploy-gh': 'GitHub部署',
      'p1.title': '1. opencode辅助星空堆栈',
      'p1.result': '从多张噪声杂乱的raw原图出发，最终合成出银河清晰可见的成品图像。',
      'p1.did': '将数据整理为4个文件夹：lights存放初始照片，另外3个分别存放单独拍摄的不同类型噪声校准帧；之后用opencode调用Siril完成校准、叠加与拉伸，再用StarNet去星、scipy降噪与锐化、星点硬化，最后Screen无损合成。',
      'p1.diff': '困难1：一开始打算手动操作Siril完成后期处理，但安装的Siril里没有堆栈降噪脚本，网上也很难找到现成的，星空处理最关键的步骤无法实现；\n困难2：拍摄时没有使用赤道仪，相机没有跟随星星移动，lights里的几张原图星点位移严重，无法直接多张堆栈，手动处理后的图片依然噪点很多、效果不好；\n困难3：部分步骤人工操作不如程序自动判定，比如背景提取要尽量避免选到星星和星云，靠人肉眼识别既低效又不可靠。',
      'p1.solve': '解决1：让opencode和大模型在GitHub等社区参考类似的堆栈脚本模板，自己写了一个脚本，实现了在Siril里堆栈的功能；\n解决2：针对没有赤道仪导致的星点位移，又让opencode写脚本自动解决了无法多张堆栈的问题；\n解决3：把我的需求、处理照片的全部流程和注意事项都告诉opencode，让它自动编写脚本调用Siril，实现了全自动处理照片——例如背景提取改由程序自动判定：很小的区域过亮就不选，并用Siril里的星云数据匹配出照片中的星云，比人工选择更可靠。',
      'p1.cap1': 'light文件夹中raw格式原图的相机预览',
      'p1.cap2': 'raw原图在电脑上的显示（可见大量杂乱信号）',
      'p1.cap3': '初始数据分四个文件夹：lights存初始照片，其余存各类噪声校准帧',
      'p1.cap4': '阶段性成品图',
      'p1.cap5': '最终成品图像：银河清晰可见',
      'p2.title': '2. 课件批注',
      'p2.result': '通过opencode对blackboard上的讲义中的专业词汇进行中文标注并附加详细解释（详细解释由LLM主要根据ppt生成），共完成13个课件，批注版课件以网页文件形式呈现，原版课件保持不变。',
      'p2.did': '在opencode中沉淀出自制skill（pdf-glossary-annotate），让大模型按照skill中的规范读取课件并生成批注版网页课件；期间多次迭代优化skill和参考词汇表。',
      'p2.diff': '困难1：强模型提取PPT中专业词汇的精确度较高，但比较费钱；弱模型便宜，但提取专业名词的精度不足；\n困难2：想把网页版课件上的文字复制下来做笔记，却发现无法复制——整个网页文件输出的都是图片；\n困难3：实现文字复制后，又遇到一页左右是两个不同文本的情况，直接复制一边的文本会把另一边也一起复制进来。',
      'p2.solve': '解决1：先用强模型提取专业词汇，再由我人工审核，生成并改了好几版参考词汇表给弱模型做参考，有参照之后专业名词的提取明显更精准；\n解决2：让opencode把原版PDF中的文字提取出来，隐形地黏在网页文件的图片上，使文字可以复制；\n解决3：让opencode参考原版PPT中的文本框，在一页里划分出不同的文本区域，实现了精准复制。',
      'p2.cap1': '文件夹截图：原版课件与生成的批注版课件',
      'p2.cap2': '标注效果示意：专业词汇下方显示中文翻译',
      'p2.cap3': 'opencode界面：skill的生成与使用',
      'p2.cap4': '标注效果示意：点击专业词汇后屏幕中央弹出中文解释',
      'p3.title': '3. 自我介绍静态网页',
      'p3.result.pre': '你现在看到的这个网站，',
      'p3.result.source': '源代码：',
      'p3.did': '用opencode开发HTML/CSS/JS静态页面（含中英双语切换与目录滚动高亮），从零配置Git与SSH密钥，将项目推送到GitHub并启用GitHub Pages完成部署。',
      'p3.diff': '困难1：初期网页排版混乱，页面不美观；\n困难2：在本地做完网站后，部署到公网时没有服务器。',
      'p3.solve': '解决1：让opencode去GitHub上找自我介绍网页相关的skill，我再人工提意见迭代网页排版；\n解决2：发现GitHub免费提供服务器（GitHub Pages），我在本地安装Git并配置SSH密钥，把网页文件传到GitHub服务器上完成部署。',
      'p4.title': '4. 班级投票动态网页',
      'p4.result.pre': '一个可用的班级投票系统，支持发起投票、实时投票和结果展示，在线访问：',
      'p4.result.source': '，源代码：',
      'p4.did': '开发前先绘制了网页流程设计图，明确网页要显示什么、点哪里会跳转到哪里、有哪些功能；之后用opencode完成开发，并通过kimi部署上线。',
      'p4.diff': '困难1：一开始设计的网页流程没有账号系统，链接一点进去就是管理投票界面——任何人拿到链接都能随意修改甚至删除投票，无法区分发起者和投票者，也难以防止重复投票；\n困难2：网页功能单一，比如引入投票人名单时只能一个一个手动输入，而且格式稍有不对就会导致导入出错；\n困难3：动态网页需要数据库，GitHub不向我提供数据库，我需要重新找服务器。',
      'p4.solve': '解决1：参考现有投票程序的流程，重新设计网页流程并修改代码；\n解决2：让身边的人体验我的投票网页，收集意见和bug，数次迭代网页功能、修复bug——比如增加了导入Word文档、Excel格式的名单，同时放宽格式要求，乱七八糟的格式导入进来也可以识别；\n解决3：把网页部署到kimi上。',
      'p4.advantage': '我身边的使用者发现网页不行了可以直接由我来维护；想要什么新功能直接跟我说就行，我可以自己加上。',
      'p4.cap1': '发起投票界面',
      'p4.cap2': '网页流程设计图：显示内容、跳转位置与功能规划',
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
      'lbl.advantage': 'Advantages',
      'tag.astro': 'Astrophotography post-processing',
      'tag.dev': 'Developed with opencode',
      'tag.deploy-kimi': 'Deployed via Kimi',
      'tag.dynamic': 'Dynamic web app',
      'tag.skill': 'Custom skill',
      'tag.deploy-gh': 'Hosted on GitHub Pages',
      'p1.title': '1. opencode-Assisted Star Stacking',
      'p1.result': 'Starting from raw frames full of noise, the final composite clearly reveals the Milky Way.',
      'p1.did': 'Organized the data into four folders: lights for the initial photos, and three more for separately-shot calibration frames of different noise types; then used opencode to drive Siril for calibration, stacking and stretching, followed by StarNet star removal, scipy denoising and sharpening, star-point hardening, and finally a lossless Screen composite.',
      'p1.diff': 'Challenge 1: I originally planned to do the post-processing manually in Siril, but the installed Siril came with no stacking or denoising scripts, and ready-made ones were hard to find online, so the most critical step of the workflow was simply impossible;\nChallenge 2: I had shot without an equatorial mount, so the camera did not follow the stars — several frames in the lights folder showed severe star drift and could not be stacked directly, and the manually processed image was still full of noise;\nChallenge 3: some steps were better judged automatically by the program than by hand: background extraction, for example, must avoid stars and nebulae, which meant relying on naked-eye selection — inefficient and unreliable.',
      'p1.solve': 'Solution 1: I had opencode and the LLM study similar stacking-script templates from GitHub-like communities and write a script of their own, which enabled stacking inside Siril;\nSolution 2: to fix the star drift caused by the missing equatorial mount, opencode wrote another script that automatically solved the multi-frame stacking problem;\nSolution 3: I told opencode my requirements along with the complete processing workflow and all the caveats, and let it write scripts that drive Siril for fully automatic processing — background extraction, for instance, is now decided by the program (tiny overly bright regions are rejected, and Siril\u2019s built-in nebula data is used to match the nebulae in my photos), which is far more reliable than manual selection.',
      'p1.cap1': 'Camera preview of a raw frame in the lights folder',
      'p1.cap2': 'A raw frame on screen (heavy noise clearly visible)',
      'p1.cap3': 'Initial data in four folders: lights holds the photos, the rest hold noise calibration frames',
      'p1.cap4': 'Interim result',
      'p1.cap5': 'Final image: the Milky Way clearly visible',
      'p2.title': '2. Courseware Annotation',
      'p2.result': 'Used opencode to annotate technical terms in Blackboard lecture slides with Chinese translations and detailed explanations (generated by an LLM mainly from the PPTs); 13 courseware files were completed, each annotated version delivered as a web page while the original stays untouched.',
      'p2.did': 'Distilled a self-made skill (pdf-glossary-annotate) in opencode so the LLM reads the courseware and produces annotated web versions following the skill\u2019s rules; the skill and reference vocabulary were iterated on many times.',
      'p2.diff': 'Challenge 1: Strong models extract technical terms from the PPTs quite accurately but are expensive; weak models are cheap but imprecise at extracting technical terms;\nChallenge 2: I wanted to copy text from the web-based courseware for note-taking, only to find it impossible — the entire page was rendered as images;\nChallenge 3: after text became copyable, a page with two different side-by-side texts would drag the other side in whenever I copied just one.',
      'p2.solve': 'Solution 1: I first used a strong model to extract the technical terms, then reviewed them manually, producing and revising several versions of a reference vocabulary for the weak model — with the reference in place, term extraction became noticeably more accurate;\nSolution 2: I had opencode extract the text from the original PDFs and invisibly overlay it on the courseware images, making the text selectable;\nSolution 3: opencode referenced the text boxes in the original PPTs to split each page into separate text regions, allowing precise copying.',
      'p2.cap1': 'Folder screenshot: original courseware and the generated annotated version',
      'p2.cap2': 'Annotation effect (illustration): Chinese translation under each technical term',
      'p2.cap3': 'opencode interface: generating and using the skill',
      'p2.cap4': 'Annotation effect (illustration): clicking a term pops up a Chinese explanation at screen center',
      'p3.title': '3. Personal Static Website',
      'p3.result.pre': 'The website you are looking at right now. ',
      'p3.result.source': 'Source code: ',
      'p3.did': 'Developed the HTML/CSS/JS static site with opencode (including Chinese/English switching and TOC scroll highlighting), set up Git and SSH keys from scratch, pushed the project to GitHub and enabled GitHub Pages.',
      'p3.diff': 'Challenge 1: The initial layout of the website was messy and unattractive;\nChallenge 2: After finishing the site locally, I had no server to deploy it to the public Internet.',
      'p3.solve': 'Solution 1: I had opencode look for skills related to personal-profile websites on GitHub, then gave my own feedback to iterate on the layout;\nSolution 2: I found that GitHub offers free hosting (GitHub Pages), so I installed Git locally, configured an SSH key, and pushed the website files to GitHub\u2019s server to complete the deployment.',
      'p4.title': '4. Class Voting Web App',
      'p4.result.pre': 'A working class voting system that supports creating polls, live voting and result display. Visit: ',
      'p4.result.source': '. Source code: ',
      'p4.did': 'Before writing any code, I drew a page-flow diagram clarifying what each page shows, where each tap navigates, and which features exist; then developed the app with opencode and deployed it online via Kimi.',
      'p4.diff': 'Challenge 1: The page flow I designed at first had no account system — the link led straight to the poll-management interface, so anyone with the link could edit or even delete polls, organizers could not be distinguished from voters, and repeated voting could hardly be prevented;\nChallenge 2: The features were limited — for example, importing the voter list meant typing names in one by one, and the slightest format error would break the import;\nChallenge 3: A dynamic web app needs a database, but GitHub does not provide one, so I had to find another server.',
      'p4.solve': 'Solution 1: Referenced the flows of existing voting apps, redesigned the page flow and modified the code;\nSolution 2: Let people around me try the site, collected feedback and bugs, and iterated the features several times — for example, added importing voter lists from Word and Excel documents, and loosened the format requirements so even messy files are recognized;\nSolution 3: Deployed the site on Kimi.',
      'p4.advantage': 'The people around me can come straight to me whenever the site breaks, and I maintain it myself; if they want a new feature, they just tell me and I can add it.',
      'p4.cap1': 'Poll creation interface',
      'p4.cap2': 'Page-flow design: content, navigation and feature planning',
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
