import{_ as a,M as e,p as t,q as o,R as n,t as c,N as i,a1 as p}from"./framework-053e1044.js";const r={},l=p(`<h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2><blockquote><p>这就是一个防止我忘记 three.js 咋用的简单组件库，目前主要用于网页背景 <strong>仅支持 Vue3</strong></p></blockquote><h4 id="_1-安装组件库" tabindex="-1"><a class="header-anchor" href="#_1-安装组件库" aria-hidden="true">#</a> 1.安装组件库</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i three-bg
or
<span class="token function">yarn</span> <span class="token function">add</span> three-bg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-引用组件库" tabindex="-1"><a class="header-anchor" href="#_2-引用组件库" aria-hidden="true">#</a> 2.引用组件库</h4><blockquote><p>在 main.js 中引入</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//全部引入</span>
<span class="token keyword">import</span> <span class="token constant">THREEBG</span> <span class="token keyword">from</span> <span class="token string">&#39;three-bg&#39;</span>
vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">THREEBG</span><span class="token punctuation">)</span>
<span class="token comment">//按需引入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Background2To3<span class="token punctuation">,</span> ModelHere <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;three-bg&#39;</span>
vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Background2To3<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ModelHere<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d={href:"https://yhao-o.github.io/Three-bg/",target:"_blank",rel:"noopener noreferrer"};function u(k,h){const s=e("ExternalLinkIcon");return t(),o("div",null,[l,n("p",null,[n("a",d,[c("参数详情"),i(s)])])])}const v=a(r,[["render",u],["__file","index.html.vue"]]);export{v as default};
