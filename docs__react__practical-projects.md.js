(self.webpackChunkantd_packages=self.webpackChunkantd_packages||[]).push([[5994],{42200:function(){},81125:function(D,c,r){"use strict";r.r(c);var u=r(46327),e=r(10170),F=r(50959);c.default=o=>{var C=o.children,a=(0,u.Z)(o,["children"]);return F.createElement(e.Z,a,F.createElement("div",{style:{contentVisibility:"auto",contain:"style layout paint"}},C))}},19982:function(D,c,r){"use strict";r.d(c,{m:function(){return u.m}});var u=r(78683),e=r(53587)},37235:function(D,c,r){"use strict";r.r(c);var u=r(50959),e=r(84e3),F=r(81125),o=r(81311),C=u.memo(a=>{var p=a.demos;return u.createElement(u.Fragment,null,u.createElement("div",{className:"markdown"},u.createElement("p",null,"\u5728\u771F\u5B9E\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u4F60\u53EF\u80FD\u4F1A\u9700\u8981 Redux \u6216\u8005 MobX \u8FD9\u6837\u7684\u6570\u636E\u6D41\u65B9\u6848\uFF0CAnt Design React \u4F5C\u4E3A\u4E00\u4E2A UI \u5E93\uFF0C\u53EF\u4EE5\u548C\u4EFB\u4F55 React \u751F\u6001\u5708\u5185\u7684\u6570\u636E\u6D41\u65B9\u6848\u4EE5\u53CA\u5E94\u7528\u6846\u67B6\u642D\u914D\u4F7F\u7528\u3002\u6211\u4EEC\u57FA\u4E8E\u4E1A\u52A1\u573A\u666F\u7684\u573A\u666F\uFF0C\u63A8\u51FA\u4E86\u53EF\u63D2\u62D4\u7684\u4F01\u4E1A\u7EA7\u5E94\u7528\u6846\u67B6 umi\uFF0C\u63A8\u8350\u4F60\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u3002"),u.createElement("p",null,u.createElement(e.Link,{to:"https://umijs.org/zh-CN"},"umi")," \u5219\u662F\u4E00\u4E2A\u53EF\u63D2\u62D4\u7684\u4F01\u4E1A\u7EA7 react \u5E94\u7528\u6846\u67B6\u3002Umi \u4EE5\u8DEF\u7531\u4E3A\u57FA\u7840\u7684\uFF0C\u652F\u6301",u.createElement(e.Link,{to:"https://umijs.org/zh-CN/docs/convention-routing"},"\u7C7B next.js \u7684\u7EA6\u5B9A\u5F0F\u8DEF\u7531"),"\uFF0C\u4EE5\u53CA\u5404\u79CD\u8FDB\u9636\u7684\u8DEF\u7531\u529F\u80FD\uFF0C\u5E76\u4EE5\u6B64\u8FDB\u884C\u529F\u80FD\u6269\u5C55\uFF0C\u6BD4\u5982",u.createElement(e.Link,{to:"https://umijs.org/zh-CN/config#dynamicimport"},"\u652F\u6301\u8DEF\u7531\u7EA7\u7684\u6309\u9700\u52A0\u8F7D"),"\u3002\u7136\u540E\u914D\u4EE5\u5B8C\u5584\u7684",u.createElement(e.Link,{to:"https://umijs.org/zh-CN/plugins/api"},"\u63D2\u4EF6\u4F53\u7CFB"),"\uFF0C\u8986\u76D6\u4ECE\u6E90\u7801\u5230\u6784\u5EFA\u4EA7\u7269\u7684\u6BCF\u4E2A\u751F\u547D\u5468\u671F\uFF0C\u652F\u6301\u5404\u79CD\u529F\u80FD\u6269\u5C55\u548C\u4E1A\u52A1\u9700\u6C42\uFF0C\u540C\u65F6\u63D0\u4F9B ",u.createElement(e.Link,{to:"https://umijs.org/zh-CN/docs/use-umi-ui"},"Umi UI")," \u901A\u8FC7\u53EF\u89C6\u5316\u8F85\u52A9\u7F16\u7A0B\uFF08VAP\uFF09\u63D0\u9AD8\u5F00\u53D1\u4F53\u9A8C\u548C\u7814\u53D1\u6548\u7387\u3002"),u.createElement("blockquote",null,u.createElement("p",null,"\u4F60\u53EF\u80FD\u4E5F\u4F1A\u5BF9 ",u.createElement(e.Link,{to:"https://pro.ant.design/"},"Ant Design Pro")," \u611F\u5174\u8DA3\uFF0C\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E Umi \u548C antd \u7684\u5F00\u7BB1\u5373\u7528\u7684\u4E2D\u53F0\u524D\u7AEF/\u8BBE\u8BA1\u89E3\u51B3\u65B9\u6848\u3002")),u.createElement("p",null,"\u672C\u6587\u4F1A\u5F15\u5BFC\u4F60\u4F7F\u7528 Umi \u548C antd \u4ECE 0 \u5F00\u59CB\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u5E94\u7528\u3002"),u.createElement("h2",{id:"\u5B89\u88C5-umi"},u.createElement(e.AnchorLink,{to:"#\u5B89\u88C5-umi","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5 Umi"),u.createElement("p",null,"\u63A8\u8350\u4F7F\u7528 yarn \u521B\u5EFA Umi \u811A\u624B\u67B6\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u3002"),u.createElement(o.Z,{code:`$ mkdir myapp && cd myapp
$ yarn create @umijs/umi-app
$ yarn`,lang:"bash"}),u.createElement("blockquote",null,u.createElement("p",null,"\u5982\u679C\u4F60\u4F7F\u7528 npm\uFF0C\u53EF\u6267\u884C ",u.createElement("code",null,"npx @umijs/create-umi-app"),"\uFF0C\u6548\u679C\u4E00\u81F4\u3002")),u.createElement("blockquote",null,u.createElement("p",null,"\u9ED8\u8BA4\u4F7F\u7528 ",u.createElement("code",null,'"antd": "^4.0.0"'),"\uFF0C\u5982\u679C\u8981\u4F7F\u7528\u56FA\u5B9A\u7248\u672C\u7684 antd\uFF0C\u4F60\u53EF\u4EE5\u5728\u9879\u76EE\u91CC\u5B89\u88C5\u989D\u5916\u7684 antd \u4F9D\u8D56\uFF0C",u.createElement("code",null,"package.json")," \u91CC\u58F0\u660E\u7684 antd \u4F9D\u8D56\u4F1A\u88AB\u4F18\u5148\u4F7F\u7528\u3002")),u.createElement("h2",{id:"\u65B0\u5EFA\u8DEF\u7531"},u.createElement(e.AnchorLink,{to:"#\u65B0\u5EFA\u8DEF\u7531","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u65B0\u5EFA\u8DEF\u7531"),u.createElement("p",null,"\u6211\u4EEC\u8981\u5199\u4E2A\u5E94\u7528\u6765\u5148\u663E\u793A\u4EA7\u54C1\u5217\u8868\u3002\u9996\u5148\u7B2C\u4E00\u6B65\u662F\u521B\u5EFA\u8DEF\u7531\uFF0C\u8DEF\u7531\u53EF\u4EE5\u60F3\u8C61\u6210\u662F\u7EC4\u6210\u5E94\u7528\u7684\u4E0D\u540C\u9875\u9762\u3002"),u.createElement("p",null,"\u7136\u540E\u901A\u8FC7\u547D\u4EE4\u521B\u5EFA ",u.createElement("code",null,"/products")," \u8DEF\u7531\uFF0C"),u.createElement(o.Z,{code:`$ npx umi g page products --typescript

Write: src/pages/products.tsx
Write: src/pages/products.css`,lang:"bash"}),u.createElement("p",null,"\u5728 ",u.createElement("code",null,".umirc.ts")," \u4E2D\u914D\u7F6E\u8DEF\u7531\uFF0C\u5982\u679C\u6709\u56FD\u9645\u5316\u9700\u8981\uFF0C\u53EF\u4EE5\u914D\u7F6E ",u.createElement("code",null,"locale")," \u5F00\u542F antd \u56FD\u9645\u5316\uFF1A"),u.createElement(o.Z,{code:`import { defineConfig } from 'umi';

export default defineConfig({
+ locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/index' },
+   { path: '/products', component: '@/pages/products' },
  ],
});`,lang:"diff"}),u.createElement("p",null,"\u8FD0\u884C ",u.createElement("code",null,"yarn start")," \u7136\u540E\u5728\u6D4F\u89C8\u5668\u91CC\u6253\u5F00 ",u.createElement(e.Link,{to:"http://localhost:8000/products"},"http://localhost:8000/products"),"\uFF0C\u4F60\u5E94\u8BE5\u80FD\u770B\u5230\u5BF9\u5E94\u7684\u9875\u9762\u3002"),u.createElement("h2",{id:"\u7F16\u5199-ui-component"},u.createElement(e.AnchorLink,{to:"#\u7F16\u5199-ui-component","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u7F16\u5199 UI Component"),u.createElement("p",null,"\u968F\u7740\u5E94\u7528\u7684\u53D1\u5C55\uFF0C\u4F60\u4F1A\u9700\u8981\u5728\u591A\u4E2A\u9875\u9762\u5206\u4EAB UI \u5143\u7D20 (\u6216\u5728\u4E00\u4E2A\u9875\u9762\u4F7F\u7528\u591A\u6B21)\uFF0C\u5728 Umi \u91CC\u4F60\u53EF\u4EE5\u628A\u8FD9\u90E8\u5206\u62BD\u6210 component \u3002"),u.createElement("p",null,"\u6211\u4EEC\u6765\u7F16\u5199\u4E00\u4E2A ",u.createElement("code",null,"ProductList")," component\uFF0C\u8FD9\u6837\u5C31\u80FD\u5728\u4E0D\u540C\u7684\u5730\u65B9\u663E\u793A\u4EA7\u54C1\u5217\u8868\u4E86\u3002"),u.createElement("p",null,"\u7136\u540E\u65B0\u5EFA ",u.createElement("code",null,"src/components/ProductList.tsx")," \u6587\u4EF6\uFF1A"),u.createElement(o.Z,{code:`import { Table, Popconfirm, Button } from 'antd'

const ProductList: React.FC<{
  products: { name: string }[]
  onDelete: (id: string) => void
}> = ({ onDelete, products }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm
            title="Delete?"
            onConfirm={() => onDelete(record.id)}
          >
            <Button>Delete</Button>
          </Popconfirm>
        )
      }
    }
  ]
  return (
    <Table
      dataSource={products}
      columns={columns}
    />
  )
}

export default ProductList`,lang:"tsx"}),u.createElement("h2",{id:"\u7B80\u5355\u6570\u636E\u6D41\u65B9\u6848"},u.createElement(e.AnchorLink,{to:"#\u7B80\u5355\u6570\u636E\u6D41\u65B9\u6848","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u7B80\u5355\u6570\u636E\u6D41\u65B9\u6848"),u.createElement("p",null,u.createElement("code",null,"@umijs/plugin-model")," \u662F\u4E00\u79CD\u57FA\u4E8E hooks \u8303\u5F0F\u7684\u7B80\u5355\u6570\u636E\u6D41\u65B9\u6848\uFF0C\u53EF\u4EE5\u5728\u4E00\u5B9A\u60C5\u51B5\u4E0B\u66FF\u4EE3 dva \u6765\u8FDB\u884C\u4E2D\u53F0\u7684\u5168\u5C40\u6570\u636E\u6D41\u3002\u6211\u4EEC\u7EA6\u5B9A\u5728 ",u.createElement("code",null,"src/models")," \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u4E3A\u9879\u76EE\u5B9A\u4E49\u7684 model \u6587\u4EF6\u3002\u6BCF\u4E2A\u6587\u4EF6\u9700\u8981\u9ED8\u8BA4\u5BFC\u51FA\u4E00\u4E2A function\uFF0C\u8BE5 function \u5B9A\u4E49\u4E86\u4E00\u4E2A Hook\uFF0C\u4E0D\u7B26\u5408\u89C4\u8303\u7684\u6587\u4EF6\u6211\u4EEC\u4F1A\u8FC7\u6EE4\u6389\u3002"),u.createElement("p",null,"\u6587\u4EF6\u540D\u5219\u5BF9\u5E94\u6700\u7EC8 model \u7684 name\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u63D0\u4F9B\u7684 API \u6765\u6D88\u8D39 model \u4E2D\u7684\u6570\u636E\u3002"),u.createElement("p",null,"\u6211\u4EEC\u4EE5\u4E00\u4E2A\u7B80\u5355\u7684\u8868\u683C\u4F5C\u4E3A\u793A\u4F8B\u3002\u9996\u5148\u65B0\u5EFA\u4E00\u4E2A ",u.createElement("code",null,"src/services/product.ts")," \u5B58\u653E\u4EA7\u54C1\u76F8\u5173\u7684\u63A5\u53E3\u3002"),u.createElement(o.Z,{code:`/*
export function queryProductList() {
  return fetch('/api/products').then(res => res.json());
}
*/
// \u5148\u7528 setTimeout \u6A21\u62DF\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u6B63\u5E38\u7684\u5199\u6CD5\u5982\u4E0A\u6240\u793A
export function queryProductList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'dva'
        },
        {
          id: 2,
          name: 'antd'
        }
      ])
    }, 2000)
  })
}`,lang:"tsx"}),u.createElement("p",null,"\u7136\u540E\u65B0\u5EFA\u6587\u4EF6 ",u.createElement("code",null,"src/models/useProductList.ts"),"\u3002"),u.createElement(o.Z,{code:`import { useRequest } from 'umi'
import { queryProductList } from '@/services/product'

export default function useProductList(params: {
  pageSize: number
  current: number
}) {
  const msg = useRequest(() =>
    queryProductList(params)
  )

  const deleteProducts = async (id: string) => {
    try {
      await removeProducts(id)
      message.success('success')
      msg.run()
    } catch (error) {
      message.error('fail')
    }
  }

  return {
    dataSource: msg.data,
    reload: msg.run,
    loading: msg.loading,
    deleteProducts
  }
}`,lang:"tsx"}),u.createElement("p",null,"\u7F16\u8F91 ",u.createElement("code",null,"src/pages/products.tsx"),"\uFF0C\u66FF\u6362\u4E3A\u4EE5\u4E0B\u5185\u5BB9\uFF1A"),u.createElement(o.Z,{code:`import { useModel } from 'umi'
import ProductList from '@/components/ProductList'

const Products = () => {
  const { dataSource, reload, deleteProducts } =
    useModel('useProductList')
  return (
    <div>
      <a onClick={() => reload()}>reload</a>
      <ProductList
        onDelete={deleteProducts}
        products={dataSource}
      />
    </div>
  )
}

export default Products`,lang:"tsx"}),u.createElement("p",null,"\u6267\u884C\u542F\u52A8\u547D\u4EE4\uFF1A"),u.createElement(o.Z,{code:"$ yarn start",lang:"bash"}),u.createElement("p",null,"\u8BBF\u95EE ",u.createElement(e.Link,{to:"http://localhost:8000/"},"http://localhost:8000"),"\uFF0C\u5E94\u8BE5\u80FD\u770B\u5230\u4EE5\u4E0B\u6548\u679C\uFF1A"),u.createElement("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/dPsy4tFHN3/umi.gif"}),u.createElement("h2",{id:"prolayout"},u.createElement(e.AnchorLink,{to:"#prolayout","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"ProLayout"),u.createElement("p",null,"\u4E00\u4E2A\u6807\u51C6\u7684\u4E2D\u540E\u53F0\u9875\u9762\uFF0C\u4E00\u822C\u90FD\u9700\u8981\u4E00\u4E2A\u5E03\u5C40\uFF0C\u8FD9\u4E2A\u5E03\u5C40\u5F88\u591A\u65F6\u5019\u90FD\u662F\u9AD8\u5EA6\u96F7\u540C\u7684\uFF0CProLayout \u5C01\u88C5\u4E86\u5E38\u7528\u7684\u83DC\u5355\uFF0C\u9762\u5305\u5C51\uFF0C\u9875\u5934\u7B49\u529F\u80FD\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u4E0D\u4F9D\u8D56\u7684\u6846\u67B6\u4E14\u5F00\u7BB1\u5373\u7528\u7684\u9AD8\u7EA7\u5E03\u5C40\u7EC4\u4EF6\u3002"),u.createElement("p",null,"\u5E76\u4E14\u652F\u6301 ",u.createElement("code",null,"side"),", ",u.createElement("code",null,"mix"),", ",u.createElement("code",null,"top")," \u4E09\u79CD\u6A21\u5F0F\uFF0C\u66F4\u662F\u5185\u7F6E\u4E86\u83DC\u5355\u9009\u4E2D\uFF0C\u83DC\u5355\u751F\u6210\u9762\u5305\u5C51\uFF0C\u81EA\u52A8\u8BBE\u7F6E\u9875\u9762\u6807\u9898\u7684\u903B\u8F91\u3002\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5FEB\u901F\u7684\u5F00\u59CB\u4E00\u4E2A\u9879\u76EE\u3002"),u.createElement("p",null,u.createElement("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/gXkuc%26RmT7/64038246-E2BF-4840-8898-5AF531897A44.png",alt:"site"})),u.createElement("p",null,"\u4F7F\u7528\u65B9\u5F0F\u4E5F\u662F\u6781\u4E3A\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u8FDB\u884C\u51E0\u4E2A\u7B80\u5355\u7684\u8BBE\u7F6E\u3002"),u.createElement(o.Z,{code:`import { Button } from 'antd'
import ProLayout, {
  PageContainer
} from '@ant-design/pro-layout'

export default (
  <ProLayout>
    <PageContainer
      extra={[
        <Button key="3">Operating</Button>,
        <Button key="2">Operating</Button>,
        <Button key="1" type="primary">
          Main Operating
        </Button>
      ]}
      footer={[
        <Button>reset</Button>,
        <Button type="primary">submit</Button>
      ]}
    >
      {children}
    </PageContainer>
  </ProLayout>
)`,lang:"tsx"}),u.createElement("p",null,"\u70B9\u51FB\u8FD9\u91CC",u.createElement(e.Link,{to:"https://procomponents.ant.design/components/layout"},"\u5FEB\u901F\u5F00\u59CB"),"\u3002"),u.createElement("h2",{id:"protable"},u.createElement(e.AnchorLink,{to:"#protable","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"ProTable"),u.createElement("p",null,"\u4E00\u4E2A\u4E2D\u540E\u53F0\u9875\u9762\u4E2D\u5F88\u591A\u6570\u636E\u90FD\u4E0D\u9700\u8981\u8DE8\u9875\u9762\u5171\u4EAB\uFF0Cmodels \u5728\u4E00\u4E9B\u65F6\u5019\u4E5F\u662F\u4E0D\u9700\u8981\u7684\u3002"),u.createElement(o.Z,{code:`import ProTable from '@ant-design/pro-table'
import { Popconfirm, Button } from 'antd'
import { queryProductList } from '@/services/product'

const Products = () => {
  const actionRef = useRef<ActionType>()

  const deleteProducts = async (id: string) => {
    try {
      await removeProducts(id)
      message.success('success')
      actionRef.current?.reload()
    } catch (error) {
      message.error('fail')
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm
            title="Delete?"
            onConfirm={() => onDelete(record.id)}
          >
            <Button>Delete</Button>
          </Popconfirm>
        )
      }
    }
  ]

  return (
    <ProTable<{ name: string }>
      headerTitle="\u67E5\u8BE2\u8868\u683C"
      actionRef={actionRef}
      rowKey="name"
      request={(params, sorter, filter) =>
        queryProductList({
          ...params,
          sorter,
          filter
        })
      }
      columns={columns}
    />
  )
}`,lang:"tsx"}),u.createElement("p",null,"ProTable \u63D0\u4F9B\u4E86\u9884\u8BBE\u903B\u8F91\u6765\u5904\u7406 loading\uFF0C\u5206\u9875 \u548C\u641C\u7D22\u8868\u5355\uFF0C\u53EF\u4EE5\u5927\u5927\u51CF\u5C11\u4EE3\u7801\u91CF\uFF0C\u70B9\u51FB\u8FD9\u91CC",u.createElement(e.Link,{to:"https://procomponents.ant.design/components/table"},"\u5FEB\u901F\u5F00\u59CB"),"\u3002"),u.createElement("h2",{id:"\u6784\u5EFA\u5E94\u7528"},u.createElement(e.AnchorLink,{to:"#\u6784\u5EFA\u5E94\u7528","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u6784\u5EFA\u5E94\u7528"),u.createElement("p",null,"\u5B8C\u6210\u5F00\u53D1\u5E76\u4E14\u5728\u5F00\u53D1\u73AF\u5883\u9A8C\u8BC1\u4E4B\u540E\uFF0C\u5C31\u9700\u8981\u90E8\u7F72\u7ED9\u6211\u4EEC\u7684\u7528\u6237\u4E86\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A"),u.createElement(o.Z,{code:"$ yarn build",lang:"bash"}),u.createElement("p",null,u.createElement("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/Zd3f%242NdOK/b911d244-f1a5-4d61-adc5-3710cd86cd1b.png",alt:"build"})),u.createElement("p",null,"\u6784\u5EFA\u4F1A\u6253\u5305\u6240\u6709\u7684\u8D44\u6E90\uFF0C\u5305\u542B JavaScript, CSS, web fonts, images, html \u7B49\u3002\u4F60\u53EF\u4EE5\u5728 ",u.createElement("code",null,"dist/")," \u76EE\u5F55\u4E0B\u627E\u5230\u8FD9\u4E9B\u6587\u4EF6\u3002"),u.createElement("h2",{id:"\u4E0B\u4E00\u6B65"},u.createElement(e.AnchorLink,{to:"#\u4E0B\u4E00\u6B65","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u4E0B\u4E00\u6B65"),u.createElement("p",null,"\u6211\u4EEC\u5DF2\u7ECF\u5B8C\u6210\u4E86\u4E00\u4E2A\u7B80\u5355\u5E94\u7528\uFF0C\u4F60\u53EF\u80FD\u8FD8\u6709\u5F88\u591A\u7591\u95EE\uFF0C\u6BD4\u5982\uFF1A"),u.createElement("ul",null,u.createElement("li",null,"\u5982\u4F55\u7EDF\u4E00\u5904\u7406\u51FA\u9519\uFF1F"),u.createElement("li",null,"\u5982\u4F55\u5904\u7406\u66F4\u591A\u8DEF\u7531\uFF0C\u6BD4\u5982\u52A8\u6001\u8DEF\u7531\uFF0C\u5D4C\u5957\u8DEF\u7531\uFF0C\u6743\u9650\u8DEF\u7531\u7B49\uFF1F"),u.createElement("li",null,"\u5982\u4F55 mock \u6570\u636E\uFF1F"),u.createElement("li",null,"\u5982\u4F55\u90E8\u7F72\uFF1F"),u.createElement("li",null,"\u7B49\u7B49")),u.createElement("p",null,"\u4F60\u53EF\u4EE5\uFF1A"),u.createElement("ul",null,u.createElement("li",null,"\u8BBF\u95EE ",u.createElement(e.Link,{to:"https://umijs.org/"},"Umi \u5B98\u7F51")),u.createElement("li",null,"\u7406\u89E3 ",u.createElement(e.Link,{to:"https://umijs.org/zh-CN/docs/routing"},"Umi \u7684\u8DEF\u7531")),u.createElement("li",null,"\u7406\u89E3 ",u.createElement(e.Link,{to:"https://umijs.org/zh-CN/docs/deployment"},"\u5982\u4F55\u90E8\u7F72 Umi \u5E94\u7528")),u.createElement("li",null,"\u5F00\u7BB1\u5373\u7528\u7684\u811A\u624B\u67B6 ",u.createElement(e.Link,{to:"https://pro.ant.design/"},"Ant Design Pro")),u.createElement("li",null,"\u9AD8\u7EA7\u5E03\u5C40 ",u.createElement(e.Link,{to:"https://procomponents.ant.design/components/layout"},"ProLayout")),u.createElement("li",null,"\u9AD8\u7EA7\u8868\u683C ",u.createElement(e.Link,{to:"https://procomponents.ant.design/components/table"},"ProTable")))))});c.default=a=>{var p=u.useContext(e.context),_=p.demos;return u.useEffect(()=>{var s;a!=null&&(s=a.location)!==null&&s!==void 0&&s.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),u.createElement(C,{demos:_})}},81311:function(D,c,r){"use strict";var u=r(50959),e=r(17758),F=r(84e3),o=r(42200),C=r.n(o);function a(){return a=Object.assign||function(t){for(var E=1;E<arguments.length;E++){var n=arguments[E];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},a.apply(this,arguments)}function p(t,E){return P(t)||y(t,E)||s(t,E)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(t,E){if(!!t){if(typeof t=="string")return f(t,E);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,E)}}function f(t,E){(E==null||E>t.length)&&(E=t.length);for(var n=0,l=new Array(E);n<E;n++)l[n]=t[n];return l}function y(t,E){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var l=[],i=!0,A=!1,m,B;try{for(n=n.call(t);!(i=(m=n.next()).done)&&(l.push(m.value),!(E&&l.length===E));i=!0);}catch(g){A=!0,B=g}finally{try{!i&&n.return!=null&&n.return()}finally{if(A)throw B}}return l}}function P(t){if(Array.isArray(t))return t}var L={acss:"css",axml:"xml"};c.Z=function(t){var E=t.code,n=t.lang,l=t.showCopy,i=l===void 0?!0:l,A=(0,F.useCopy)(),m=p(A,2),B=m[0],g=m[1];return u.createElement("div",{className:"__dumi-default-code-block"},u.createElement(e.ZP,a({},e.lG,{code:E,language:L[n]||n,theme:void 0}),function(d){var v=d.className,b=d.style,k=d.tokens,x=d.getLineProps,I=d.getTokenProps;return u.createElement("pre",{className:v,style:b},i&&u.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":g,onClick:function(){return B(E)}}),k.map(function(h,O){return u.createElement("div",x({line:h,key:O}),h.map(function(M,T){return u.createElement("span",I({token:M,key:T}))}))}))}))}}}]);
