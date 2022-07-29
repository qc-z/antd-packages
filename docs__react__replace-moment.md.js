(self.webpackChunkantd_packages=self.webpackChunkantd_packages||[]).push([[9965],{42200:function(){},81125:function(f,o,r){"use strict";r.r(o);var e=r(46327),n=r(10170),s=r(50959);o.default=l=>{var F=l.children,i=(0,e.Z)(l,["children"]);return s.createElement(n.Z,i,s.createElement("div",{style:{contentVisibility:"auto",contain:"style layout paint"}},F))}},19982:function(f,o,r){"use strict";r.d(o,{m:function(){return e.m}});var e=r(78683),n=r(53587)},5494:function(f,o,r){"use strict";r.r(o);var e=r(50959),n=r(84e3),s=r(81125),l=r(81311),F=e.memo(i=>{var _=i.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("p",null,"\u4F60\u53EF\u4EE5\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08",e.createElement(n.Link,{to:"https://day.js.org/"},"day.js"),"\u3001",e.createElement(n.Link,{to:"https://date-fns.org/"},"date-fns"),"\uFF09\u66FF\u6362 Moment \u4EE5\u4F18\u5316\u6253\u5305\u5927\u5C0F\u3002\u5728\u8FD9\u91CC\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E24\u79CD\u65B9\u5F0F\u6765\u5B9E\u73B0\u66FF\u6362:"),e.createElement("h2",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},e.createElement(n.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),e.createElement("p",null,"\u7B2C\u4E00\u79CD\u65B9\u6CD5\u662F\u4F7F\u7528 ",e.createElement("code",null,"generatePicker"),"\uFF08\u6216 ",e.createElement("code",null,"generateCalendar"),"\uFF09\u8F85\u52A9\u521B\u5EFA Picker \u7EC4\u4EF6\u3002"),e.createElement("p",null,"\u6211\u4EEC\u5148\u521D\u59CB\u5316\u4E00\u4E2A ",e.createElement("code",null,"create-react-app")," \u7684 antd demo\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003 ",e.createElement(n.Link,{to:"/docs/react/use-in-typescript"},"\u5728 TypeScript \u4E2D\u4F7F\u7528")," \u8FDB\u884C\u6784\u5EFA\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4ECE\u8FD9\u91CC\u5F00\u59CB",e.createElement(n.Link,{to:"https://github.com/xiaohuoni/antd4-generate-picker/commit/47fec964e36d48bd15760f8f5abcb9655c259aa6"},"init antd")),e.createElement("h3",{id:"datepickertsx"},e.createElement(n.AnchorLink,{to:"#datepickertsx","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"DatePicker.tsx"),e.createElement("p",null,"\u65B0\u5EFA ",e.createElement("code",null,"src/components/DatePicker.tsx"),"\u3002"),e.createElement("p",null,"\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"),e.createElement(l.Z,{code:`import { Dayjs } from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs'
import generatePicker from 'antd/es/date-picker/generatePicker'
import 'antd/es/date-picker/style/index'

const DatePicker = generatePicker<Dayjs>(
  dayjsGenerateConfig
)

export default DatePicker`,lang:"tsx"}),e.createElement("h3",{id:"timepickertsx"},e.createElement(n.AnchorLink,{to:"#timepickertsx","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"TimePicker.tsx"),e.createElement("p",null,"\u65B0\u5EFA ",e.createElement("code",null,"src/components/TimePicker.tsx"),"\u3002"),e.createElement("p",null,"\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"),e.createElement(l.Z,{code:`import { Dayjs } from 'dayjs'
import * as React from 'react'
import DatePicker from './DatePicker'
import { PickerTimeProps } from 'antd/es/date-picker/generatePicker'

export interface TimePickerProps
  extends Omit<
    PickerTimeProps<Dayjs>,
    'picker'
  > {}

const TimePicker = React.forwardRef<
  any,
  TimePickerProps
>((props, ref) => {
  return (
    <DatePicker
      {...props}
      picker="time"
      mode={undefined}
      ref={ref}
    />
  )
})

TimePicker.displayName = 'TimePicker'

export default TimePicker`,lang:"tsx"}),e.createElement("h3",{id:"calendartsx"},e.createElement(n.AnchorLink,{to:"#calendartsx","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"Calendar.tsx"),e.createElement("p",null,"\u65B0\u5EFA ",e.createElement("code",null,"src/components/Calendar.tsx"),"\u3002"),e.createElement("p",null,"\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"),e.createElement(l.Z,{code:`import { Dayjs } from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs'
import generateCalendar from 'antd/es/calendar/generateCalendar'
import 'antd/es/calendar/style'

const Calendar = generateCalendar<Dayjs>(
  dayjsGenerateConfig
)

export default Calendar`,lang:"tsx"}),e.createElement("h4",{id:"\u5BFC\u51FA\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},e.createElement(n.AnchorLink,{to:"#\u5BFC\u51FA\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u5BFC\u51FA\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),e.createElement("p",null,"\u65B0\u5EFA ",e.createElement("code",null,"src/components/index.tsx"),"\u3002"),e.createElement("p",null,"\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"),e.createElement(l.Z,{code:`export { default as DatePicker } from './DatePicker'
export { default as Calendar } from './Calendar'
export { default as TimePicker } from './TimePicker'`,lang:"tsx"}),e.createElement("h3",{id:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},e.createElement(n.AnchorLink,{to:"#\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),e.createElement("p",null,"\u4FEE\u6539 ",e.createElement("code",null,"src/App.tsx"),"\uFF0C\u5F15\u5165 ",e.createElement("code",null,"dayjs")," \u548C\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u3002"),e.createElement(l.Z,{code:`- import { DatePicker, Calendar } from 'antd';
- import format from 'moment';

+ import { DatePicker, TimePicker, Calendar } from './components';
+ import format from 'dayjs';`,lang:"diff"}),e.createElement("p",null,"\u5982\u679C\u6309\u7167\u4E0A\u8FF0\u6B65\u9AA4\u65E0\u6CD5\u6B63\u786E\u8FD0\u884C\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003",e.createElement(n.Link,{to:"https://github.com/xiaohuoni/antd4-generate-picker/tree/master/antd-ts"},"antd4-generate-picker/antd-ts"),"\u3002"),e.createElement("p",null,"\u5982\u679C\u4F60\u9700\u8981 JavaScript \u4EE3\u7801\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003 ",e.createElement(n.Link,{to:"https://github.com/xiaohuoni/antd4-generate-picker/tree/master/antd-demo"},"antd4-generate-picker/antd-demo"),"\u3002"),e.createElement("p",null,"\u5982\u679C\u4F60\u719F\u6089 ",e.createElement(n.Link,{to:"https://umijs.org/"},"umi"),"\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003 ",e.createElement(n.Link,{to:"https://github.com/xiaohuoni/antd4-use-dayjs-replace-moment"},"antd4-use-dayjs-replace-moment"),"\u3002"),e.createElement("h2",{id:"antd-dayjs-webpack-plugin"},e.createElement(n.AnchorLink,{to:"#antd-dayjs-webpack-plugin","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"antd-dayjs-webpack-plugin"),e.createElement("p",null,"\u6211\u4EEC\u8FD8\u63D0\u4F9B\u53E6\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002\u4F7F\u7528 ",e.createElement("code",null,"antd-dayjs-webpack-plugin")," \u63D2\u4EF6\uFF0C\u65E0\u9700\u5BF9\u73B0\u6709\u4EE3\u7801\u505A\u4EFB\u4F55\u4FEE\u6539\u76F4\u63A5\u66FF\u6362\u6210 ",e.createElement("code",null,"Day.js"),"\u3002\u8BF7\u53C2\u8003 ",e.createElement(n.Link,{to:"https://github.com/ant-design/antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"),"\u3002"),e.createElement(l.Z,{code:`// webpack-config.js
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin'

module.exports = {
  // ...
  plugins: [new AntdDayjsWebpackPlugin()]
}`,lang:"js"}),e.createElement("h2",{id:"\u4F7F\u7528-date-fns"},e.createElement(n.AnchorLink,{to:"#\u4F7F\u7528-date-fns","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528 date-fns"),e.createElement("p",null,e.createElement(n.Link,{to:"https://date-fns.org/"},"date-fns")," \u76EE\u524D\u652F\u6301\u548C dayjs \u7C7B\u4F3C\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65B9\u6CD5\uFF0C\u533A\u522B\u5728\u4E8E\u4F7F\u7528\u7684\u53C2\u6570\u7C7B\u578B\u4E0D\u540C\uFF0C\u5728 antd 4.5.0 \u4EE5\u4E0A\u7248\u672C\u63D0\u4F9B\u652F\u6301\u3002"),e.createElement("p",null,"\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A"),e.createElement("h3",{id:"datepickertsx-1"},e.createElement(n.AnchorLink,{to:"#datepickertsx-1","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"DatePicker.tsx"),e.createElement("p",null,"\u65B0\u5EFA ",e.createElement("code",null,"src/components/DatePicker.tsx"),"\u3002"),e.createElement("p",null,"\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"),e.createElement(l.Z,{code:`import dateFnsGenerateConfig from 'rc-picker/es/generate/dateFns'
import generatePicker from 'antd/es/date-picker/generatePicker'
import 'antd/es/date-picker/style/index'

const DatePicker = generatePicker<Date>(
  dateFnsGenerateConfig
)

export default DatePicker`,lang:"tsx"})))});o.default=i=>{var _=e.useContext(n.context),A=_.demos;return e.useEffect(()=>{var E;i!=null&&(E=i.location)!==null&&E!==void 0&&E.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(i.location.hash.slice(1)))},[]),e.createElement(F,{demos:A})}},81311:function(f,o,r){"use strict";var e=r(50959),n=r(17758),s=r(84e3),l=r(42200),F=r.n(l);function i(){return i=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var u=arguments[a];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c])}return t},i.apply(this,arguments)}function _(t,a){return D(t)||P(t,a)||E(t,a)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(t,a){if(!!t){if(typeof t=="string")return g(t,a);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return g(t,a)}}function g(t,a){(a==null||a>t.length)&&(a=t.length);for(var u=0,c=new Array(a);u<a;u++)c[u]=t[u];return c}function P(t,a){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var c=[],m=!0,C=!1,d,k;try{for(u=u.call(t);!(m=(d=u.next()).done)&&(c.push(d.value),!(a&&c.length===a));m=!0);}catch(h){C=!0,k=h}finally{try{!m&&u.return!=null&&u.return()}finally{if(C)throw k}}return c}}function D(t){if(Array.isArray(t))return t}var B={acss:"css",axml:"xml"};o.Z=function(t){var a=t.code,u=t.lang,c=t.showCopy,m=c===void 0?!0:c,C=(0,s.useCopy)(),d=_(C,2),k=d[0],h=d[1];return e.createElement("div",{className:"__dumi-default-code-block"},e.createElement(n.ZP,i({},n.lG,{code:a,language:B[u]||u,theme:void 0}),function(p){var x=p.className,b=p.style,v=p.tokens,j=p.getLineProps,L=p.getTokenProps;return e.createElement("pre",{className:x,style:b},m&&e.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":h,onClick:function(){return k(a)}}),v.map(function(y,T){return e.createElement("div",j({line:y,key:T}),y.map(function(O,M){return e.createElement("span",L({token:O,key:M}))}))}))}))}}}]);
