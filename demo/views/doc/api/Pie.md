### 图表介绍

Pie， 饼图。

### attrs

| 属性名           | 类型    | 默认值           | 描述                                 |
| ---------------- | ------- | ---------------- | ------------------------------------ |
| pos              | Array   | `[10%, 10%]`     | 组件左上角偏移，可设置百分比或者像素 |
| size             | Array   | `['80%','80%']`  | 组件大小，可设置百分比或者像素       |
| startAngle       | Number  | `Math.PI * -0.5` | 起始角度                             |
| endAngle         | Number  | `Math.PI * 1.5`  | 结束角度                             |
| padAngle         | Number  | `Math.PI * 1.5`  | 两扇形之间间距                       |
| radius           | Number  | `0.8`            | 外半径比例                           |
| innerRadius      | Number  | `0`              | 内半径比例                           |
| translateOnClick | Boolean | `true`           | 控制扇形被点击时是否移动             |
| rose             | Boolean | `false`          | 是否渲染玫瑰图                       |

### style

```javascript
const pie = new Pie()
pie.style('text', { color: '#fff' }
```

组件中可以自定义 css 属性的元素如下表：

| 名称            | 基础类型 | 描述                     |
| --------------- | -------- | ------------------------ |
| sector          | 面       | 扇形样式                 |
| sector:hover    | 面       | 鼠标经过时扇形样式       |
| text            | 文本     | 扇形上文字样式           |
| text:hover      | 文本     | 鼠标经过时扇形上文字样式 |
| guideline       | 线       | 指导线样式               |
| guideline:hover | 线       | 鼠标经过时指导线样式     |
| guideText       | 文本     | 指导文字样式             |
| guideText:hover | 文本     | 鼠标经过时指导文字样式   |

#### 弧饼图

弧饼图继承至饼图，渲染所用的图形不同于饼图，并额外支持了 **标题** 与 **副标题** 的设置。

| 名称     | 基础类型 | 描述       |
| -------- | -------- | ---------- |
| arc      | 面       | 弧线样式   |
| title    | 文本     | 标题样式   |
| subTitle | 文本     | 副标题样式 |
