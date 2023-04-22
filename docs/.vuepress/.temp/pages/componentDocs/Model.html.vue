<template><div><h1 id="modelhere" tabindex="-1"><a class="header-anchor" href="#modelhere" aria-hidden="true">#</a> ModelHere</h1>
<blockquote>
<p>该组件支持模型上传，并绑定鼠标移动、滚轮事件触发等多种事件</p>
</blockquote>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> background <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">'/images/scene.jpg'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//模型路径</span>
    <span class="token literal-property property">modelSrc</span><span class="token operator">:</span> <span class="token string">'/model/X7.gltf'</span><span class="token punctuation">,</span>
    <span class="token comment">// 模型比例</span>
    <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0.1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 模型坐标</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 模型初始角度</span>
    <span class="token literal-property property">rotation</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 模型偏移延迟</span>
    <span class="token literal-property property">delayTime</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// 偏移强度</span>
    <span class="token literal-property property">strength</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// 偏转轴向</span>
    <span class="token literal-property property">axial</span><span class="token operator">:</span> <span class="token string">'x'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">modelSrc</span><span class="token operator">:</span> <span class="token string">'/model/B1.gltf'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.08</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.08</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0.08</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rotation</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">delayTime</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">strength</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">modelSrc</span><span class="token operator">:</span> <span class="token string">'/model/小汽车.gltf'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0.4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">17</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rotation</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">delayTime</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">strength</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">axial</span><span class="token operator">:</span> <span class="token string">'y'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> light <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'0xffffff'</span><span class="token punctuation">,</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">strength</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'0x000000'</span><span class="token punctuation">,</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">strength</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'0x2b1e54'</span><span class="token punctuation">,</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">strength</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ModelHere</span>
  <span class="token attr-name">selfStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width:740px; height:356px;border-radius: 10px;overflow:hidden<span class="token punctuation">"</span></span>
  <span class="token attr-name">:backgroundInfo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>background<span class="token punctuation">"</span></span>
  <span class="token attr-name">:modelList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model<span class="token punctuation">"</span></span>
  <span class="token attr-name">:lightList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span>
  <span class="token attr-name">:isFullScreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ModelHere</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<ClientOnly>
<ModelHere></ModelHere>
</ClientOnly>
<h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3>
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
<td>selfStyle</td>
<td>自定义样式</td>
<td>String</td>
<td>false</td>
<td>'position:absolute;top:0;left:0;z-index=-1'</td>
</tr>
<tr>
<td>isFullScreen</td>
<td>是否开启双击全屏</td>
<td>Boolean</td>
<td>false</td>
<td>false</td>
</tr>
<tr>
<td>isWheel</td>
<td>是否开启滚轮切换功能</td>
<td>Boolean</td>
<td>false</td>
<td>true</td>
</tr>
<tr>
<td>backgroundInfo</td>
<td>画布材质信息,有三个参数<code v-pre>src:''</code>为图片路径，<code v-pre>position:{x,y}</code>为图片坐标，以及<code v-pre>size:{x,y}</code>为图片拉伸比例</td>
<td>Object<br/>如<code v-pre>{src:'',position:{x:0,y:0},size:{x:1,y:1}}</code></td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>lightList</td>
<td>添加光源，每组光源包含<code v-pre>color:0x000000</code>色彩，<code v-pre>position:{x,y,z}</code>位置，<code v-pre>strength:1</code>光照强度</td>
<td>Array<br/>如<code v-pre>[{ color: 0xffffff, position: { x: -6, y: 0, z: 1 }, strength: 1 },{ color: 0x000000, position: { x: 0, y: 0, z: -1 }, strength: 0.5 }]</code></td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>modelList</td>
<td>添加模型，<code v-pre>modelSrc:'/model/x7.gltf'</code>模型路径,<code v-pre>scale:{x,y,z}</code>模型大小，<code v-pre>position:{x,y,z}</code>模型坐标，<code v-pre>rotation:{x:0,y:1,z:0}</code>模型初始角度，<code v-pre>delayTime:1</code>延迟时间，<code v-pre>strength:1</code>偏移强度，<code v-pre>axial:''</code>转轴，转轴可以设定 x 或 y，默认为全角度</td>
<td>Array<br/>如<code v-pre>[{modelSrc:'/model/x7.gltf',scale:{x:1,y:1,z:1},position:{x:1,y:0,z:0},rotation:{x:0,y:-1.3,z:0},delayTime:1,strength:'1',axial:'x'}]</code></td>
<td>true</td>
<td>-</td>
</tr>
<tr>
<td>wheelFn</td>
<td>鼠标滚轮视角，默认参数 e 为页面值，页面值会根据模型数量生成</td>
<td>Function</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>screenResizeFn</td>
<td>带防抖的页面大小变化回调函数,默认参数 e 为页面窗口信息</td>
<td>Function</td>
<td>false</td>
<td>-</td>
</tr>
</tbody>
</table>
</div></template>


