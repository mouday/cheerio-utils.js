const { replaceImages, extractImages, removeAttrs, removeBlankLabel } = require('./index.js');

let html = `<div class="common-width content articleDetailContent kr-rich-text-wrapper"><p>本文来自<a class="project-link" data-id="3968527" data-name="微信" data-logo="https://img.36krcdn.com/20200916/v2_811751a081924fa9af8741ce120bd7bf_img_png" data-refer-type="2" href="https://36kr.com/projectDetails/3968527" target="_blank">微信</a>公众号<a href="https://mp.weixin.qq.com/s/U8FN8n8yxGvIb5dgvKBJIQ">“量子位”（ID:QbitAI）</a>，作者：荣伟，36氪经授权发布。</p> 
<p>当在某东上搜索“脑机接口”、“意念控制”这些词，看着从上到下密麻麻的商品页，你还会觉得脑机接口离你的日常生活很远吗？</p> 
<p><img src="https://img.36krcdn.com/20210809/v2_979ee2779d1340e7a522e07ad40d007f_img_000" data-img-size-val="750,1334"></p> 
<h2>脑机接口行业有多深？</h2> 
<p>当然，脑机接口行业可远不止你眼前的这冰山一角。</p> 
<p>看得见的是一件小小的脑机接口设备，看不着的是背后一整个庞大的脑机接口行业在悄然壮大。</p> 
<p><img src="https://img.36krcdn.com/20210809/v2_8ba279056df54b45b7914d10887e3302_img_000" data-img-size-val="1080,476"></p> 
<p>由于处在早期的野蛮生长阶段，国内乃至全球的脑机接口产业呈现着“百花齐放”的状态。</p> 
<p>根据提供的产品和服务，国内脑机接口公司大抵能分成三种角色：基础设施提供商、产品/APP提供商和二次定制服务商。</p> 
<ul class=" list-paddingleft-2"> 
 <li><p>基础设施提供商</p></li> 
</ul> 
<p>这类公司由于较早进入脑机接口领域，且自身研发实力较强，所以选择了从电极材料、芯片、软件算法等底层开始全栈自研，从而形成<a class="project-link" data-id="4263750" data-name="壁垒" data-logo="https://img.36krcdn.com/20210716/v2_63cfc02f48d341b99c257491f917fc19_img_000" data-refer-type="1" href="https://www.36dianping.com/space/4226801031" target="_blank">壁垒</a>及核心优势。</p> 
<p>这类公司投资回收周期长至10年以上，并且需要神经科学在内的诸多学科及领域的人才。</p> 
<p>因此，资本和人才的门槛极高，护城河也极深。</p> 
<p>在投资方看来，这种具有高技术壁垒，从而可进入更多领域的平台公司，更具有优势和未来的想象空间。</p> 
<p>这类公司的关键竞争力在于行业号召力和底层自研的技术能力。</p> 
<ul class=" list-paddingleft-2"> 
 <li><p>产品/APP提供商</p></li> 
</ul> 
<p>这类公司直接对外售卖产品，是最易产生行业影响力的角色，不过这类公司在产业链中覆盖的环节有限。</p> 
<p>由于只能基于硬件产品的检测输出结果进行二次开发，这类公司无法决定产品的性能、功能、价格等，在发展的自由度上相对受限。</p> 
<p>由于投资变现较快（3年左右），这类公司预估是短期内资本关注的重点，同时是数量增长最快的类别。</p> 
<p>关键竞争力在于开拓需求场景、与合伙伙伴的商务关系维护。</p> 
<ul class=" list-paddingleft-2"> 
 <li><p>二次定制服务商</p></li> 
</ul> 
<p>这类公司与合作伙伴共同进行定制化开发。</p> 
<p>由合作伙伴提供特定行业的行业知识及相关硬件(安全帽、VR眼镜、机器人等)，脑机接口公司提供相关设备和开发能力。</p> 
<p>对这类公司而言，特定行业客户的大型采购意向，可被视作证明场景需求和产品能力基本成熟的关键节点。</p> 
<p>这类公司的关键竞争力同样在于行业拓展和合作体系建设。</p> 
<p><img src="https://img.36krcdn.com/20210809/v2_4e8190670df34f159dcbc7f3c8103eb4_img_000" data-img-size-val="1080,483"></p> 
<p>多数知名的脑机接口公司会选择三类角色并行发展。</p> 
<p>首先，对关键技术点形成底层自研，在关键基础设施上形成话语权。其次，直接针对重点市场推出产品，以消费级产品/应用或科研级设备实现研发投入变现。</p> 
<p>最后，部分规模较大的公司还会针对高潜力新场景连接其它行业合作伙伴，<a class="project-link" data-id="81906" data-name="一起" data-logo="https://img.36krcdn.com/20210709/v2_647b9860d6f7437caf1be2501d37698a_img_000" data-refer-type="1" href="https://www.36dianping.com/space/4772100123" target="_blank">一起</a>进行产品定制，抢占新赛道。</p> 
<h2>脑机接口市场有多大？</h2> 
<p>水大了，鱼儿才会大。</p> 
<p>脑机接口产业的“百花齐放”，离不开脑机接口市场规模的持续快速增长。</p> 
<p>经<a class="project-link" data-id="397416" data-name="量子位" data-logo="https://img.36krcdn.com/20200729/v2_ac002e38e2904e0280dae679728d9e3e_img_000" data-refer-type="2" href="https://36kr.com/projectDetails/397416" target="_blank">量子位</a>分析师测算，目前我国脑机接口光设备的市场规模已经在十亿人民币级别。除了少数卖给硬核玩家之外，脑机接口的设备大多供给了科研和医疗机构。</p> 
<p>根据<a class="project-link" data-id="7191" data-name="臻泰智能" data-logo="https://img.36krcdn.com/20210806/v2_25d6a4f8f516473ab8c0b9dab241f8bf_img_000" data-refer-type="2" href="https://36kr.com/projectDetails/7191" target="_blank">臻泰智能</a>分析，我国脑机接口纯设备的市场，在与具体的使用场景的结合后会产生明显的放大效应，未来可能达到千亿规模。</p> 
<p><img src="https://img.36krcdn.com/20210809/v2_353a40251aec422fbf81302d21147315_img_000" data-img-size-val="1080,474"></p> 
<p>到了2040年，我国脑机接口纯设备市场规模预计会达到560亿人民币，年均复合增长率在21%。</p> 
<p>综合市场规模更会达到1250亿人民币，年均复合增长率在26%。</p> 
<p><img src="https://img.36krcdn.com/20210809/v2_7ab010daa15248bebe7e1fc13bfe6a18_img_000" data-img-size-val="992,976"></p> 
<p>我国脑机接口市场不仅增长速度<a class="project-link" data-id="224258" data-name="会领" data-logo="https://img.36krcdn.com/20210809/v2_e2971a3d548f4997988f2988da100a46_img_000" data-refer-type="2" href="https://36kr.com/projectDetails/224258" target="_blank">会领</a>先全球，而且在全球市场中的比重也会明显上升。</p> 
<h2>脑机接口市场怎么培育？</h2> 
<p>尽管未来可期，但也要认清我国脑机接口行业发展相对落后，市场还不成熟的现实。</p> 
<p>某东上脑机接口设备零星的购买量，显示出我国消费者对脑机接口的认可度存在严重不足。</p> 
<p>据Neurosky<a class="project-link" data-id="1083" data-name="神念科技" data-logo="https://img.36krcdn.com/20210806/v2_c19e6e0dae9540a4998b871161392c51_img_000" data-refer-type="2" href="https://36kr.com/projectDetails/1083" target="_blank">神念科技</a>估计，国内在脑机接口的消费习惯培养上与国外相差10年。</p> 
<p>得益于我国庞大的人口基数，脑机接口行业的确存在市场短期爆发的可能，长期市场规模也具有很大的想象空间。</p> 
<p>有别于公众对底层科学技术突破的看重，在脑机接口行业的未来发展中，优秀的脑机接口公司其实担当了更为关键的角色。</p> 
<p><img src="https://img.36krcdn.com/20210809/v2_000cd86ae5ed47089ea08d849bece2e3_img_000" data-img-size-val="1080,207"></p> 
<p>一个新兴市场规模的持续快速增长，离不开产品使用场景的扩展和消费者认知的培育。</p> 
<p>通过挖掘需求、协调合作并最终完成产品落地，这些公司承担着拓展行业想象空间、推动行业长期向好发展的重任。</p> 
<ul class=" list-paddingleft-2"> 
 <li><p>挖掘需求</p></li> 
</ul> 
<p>目前国内脑机接口的一大困境在于缺乏合适的场景。</p> 
<p>行业仍需寻找更能凸显脑机接口优势的使用场景，并打造相应的产品。</p> 
<p>医疗康复是公认的刚性市场，短期内增长最为确定。</p> 
<p>相比国外公司在利用侵入式手段治疗疑难问题上的大量投入，国内公司受限于技术和出于对高风险长周期的担忧，更倾向康复领域和非侵入。</p> 
<p>在国内公司推出的现有场景及产品中，脑机接口不具备创新性的必备作用或绝对的性能优势，功能方面对患者的吸引力有限。</p> 
<p>实际上脑机接口作为工具性产业，对外延展的灵活性极强。基于注意力检测、脑部状态检测等核心能力，可以承接驾驶、施工、教育等大量延伸场景。</p> 
<p><img src="https://img.36krcdn.com/20210809/v2_a987b04cb52a4888861c150dba813249_img_000" data-img-size-val="1080,409"></p> 
<p>随着行业生态降低技术门槛，能够专注于场景挖掘与需求培养的应用类公司数量将有所增加，成为脑机接口行业近期最大的驱动力。</p> 
<ul class=" list-paddingleft-2"> 
 <li><p>协调合作</p></li> 
</ul> 
<p>由于国内脑机接口行业规模还很小，行业参与者更多地想用合作、开放而非竞争，共同扩大脑机接口行业的产业影响力，解决行业目前首要的生存问题。</p> 
<p>目前行业的一大生存难题在于产业链发展不够完善，缺乏专有供应商。芯片领域可以视为我国脑机接口产业链中最为薄弱的环节，受制于德州电气（信号处理芯片TI AD1299）、<a class="project-link" data-id="495386" data-name="意法" data-logo="https://img.36krcdn.com/20201112/v2_94ef9cdef57949828c33ec6c59f7fba6_img_000" data-refer-type="2" href="https://36kr.com/projectDetails/495386" target="_blank">意法</a>半导体（程序控制单片机STM32）等国外厂商。</p> 
<p><img src="https://img.36krcdn.com/20210809/v2_eada736fe15b433ab687a1cd9b38229b_img_000" data-img-size-val="1080,767"></p> 
<p>同时，脑机接口属于高度体系化的行业，需要产业间的整体协调。例如，手术植入单个环节的低效率会直接影响整体植入方案的效果，进而阻碍场景发展。</p> 
<p>在Neuralink此前公布的小鼠实验中，业内人士普遍认为最重要的进展是能够提升植入效率的“缝纫机”植入设备。</p> 
<p>这种关注重点正体现了业内对产业整体协调的重视。</p> 
<p>行业内很多承担基础设施提供商的公司都通过标准化模组、开放生态体系将底层能力逐步对外开放。</p> 
<p><img src="https://img.36krcdn.com/20210809/v2_b097a6f12e4d4f1eaf2479a89f34822b_img_000" data-img-size-val="1080,413"></p> 

<ul class=" list-paddingleft-2"> 
 <li><p>完成产品落地</p></li> 
</ul> 

<h2>脑机接口还有哪些机会？</h2> 

<p><img src="https://img.36krcdn.com/20210809/v2_1e0442e12ea64fd8be4718d8fc39fa8b_img_000" data-img-size-val="1080,521"></p> 
<p>这一细分化切入方式也是业内人士建议的相对低门槛方式，既避免了与头部公司正面交锋，还有助于产业规模的快速扩大。</p> 
</div>
`;

// console.log(removeAttrs(html, ['class', 'id', 'style']));
// console.log(extractImages(html));
// console.log(replaceImages(html, {'img-url': 'new-img-url'}));


html =  `<div><p data-src="daa" src="dd">plebale</p></div>`;
console.log(removeAttrs(html, ['src', 'data-src']));
// <div><p>plebale</p></div>