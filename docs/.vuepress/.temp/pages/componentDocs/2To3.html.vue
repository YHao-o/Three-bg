<template><div><h1 id="background2to3" tabindex="-1"><a class="header-anchor" href="#background2to3" aria-hidden="true">#</a> Background2To3</h1>
<blockquote>
<p>这是个传入 2D 图片及其深度图得到 3D 背景图的组件</p>
</blockquote>
<h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Background2To3</span>
  <span class="token attr-name">picSrc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/images/2dto3d.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">depthSrc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/images/2dto3d_depth.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">:strength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span>
  <span class="token attr-name">selfStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width:780px; height:360px; top: 0; left: 0;z-index:1<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Background2To3</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<br/>
<h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4>
<ClientOnly>
<Background2To3 :strength="3" picSrc='/Three-bg/images/2dto3d.jpg' depthSrc='/Three-bg/images/2dto3d_depth.jpg' selfStyle='width:780px; height:360px; top: 0; left: 0;z-index:1'></Background2To3>
</ClientOnly>
<h4 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h4>
<p><a href="https://convert.leiapix.com" target="_blank" rel="noopener noreferrer">获取深度图<ExternalLinkIcon/></a></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>是否必要</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>picSrc</td>
<td>图片入口</td>
<td>String</td>
<td>true</td>
<td>-</td>
</tr>
<tr>
<td>depthSrc</td>
<td>深度图入口</td>
<td>String</td>
<td>true</td>
<td>-</td>
</tr>
<tr>
<td>strength</td>
<td>3D 效果强度</td>
<td>Number</td>
<td>false</td>
<td>2</td>
</tr>
<tr>
<td>adaptive</td>
<td>是否开启自适应</td>
<td>Boolean</td>
<td>false</td>
<td>true</td>
</tr>
<tr>
<td>canvasHeight</td>
<td>画布高度比例</td>
<td>Number</td>
<td>false</td>
<td>1</td>
</tr>
<tr>
<td>canvasWidth</td>
<td>画布宽度比例</td>
<td>Number</td>
<td>false</td>
<td>1</td>
</tr>
<tr>
<td>selfStyle</td>
<td>自定义样式</td>
<td>String</td>
<td>false</td>
<td>'width: 100vw; height: 100vh; position: absolute; top: 0; left: 0;z-index:-1'</td>
</tr>
<tr>
<td>picLoadedFn</td>
<td>图片加载完成后的回调函数 ，默认传参 e 为图片信息</td>
<td>Function</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>mouseMoveFn</td>
<td>鼠标移动触发事件，默认传参 e 为鼠标移动信息</td>
<td>Function</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>screenResizeFn</td>
<td>页面窗口变化事件，默认传参 e 为页面窗口信息</td>
<td>Function</td>
<td>false</td>
<td>-</td>
</tr>
</tbody>
</table>
</div></template>


