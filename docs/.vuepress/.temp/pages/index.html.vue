<template><div><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2>
<blockquote>
<p>这就是一个防止我忘记 three.js 咋用的简单组件库，目前主要用于网页背景</p>
</blockquote>
<h4 id="_1-安装组件库" tabindex="-1"><a class="header-anchor" href="#_1-安装组件库" aria-hidden="true">#</a> 1.安装组件库</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i three-bg
or
<span class="token function">yarn</span> <span class="token function">add</span> three-bg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-引用组件库" tabindex="-1"><a class="header-anchor" href="#_2-引用组件库" aria-hidden="true">#</a> 2.引用组件库</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//全部引入</span>
<span class="token keyword">import</span> <span class="token constant">THREEBG</span> <span class="token keyword">from</span> <span class="token string">'three-bg'</span>
vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">THREEBG</span><span class="token punctuation">)</span>
<span class="token comment">//按需引入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Background2To3 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'three-bg'</span>
vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Background2To3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


