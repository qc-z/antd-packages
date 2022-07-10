import dumiContext from '@umijs/preset-dumi/lib/theme/context'
import { ConfigProvider, Switch } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import Layout from 'dumi-theme-default/src/layout'
import moment from 'moment'
import 'moment/locale/zh-cn'
import {
  useContext,
  useEffect,
  useMemo
} from 'react'
import {
  Helmet,
  HelmetProvider
} from 'react-helmet-async'
import {
  IRouteComponentProps,
  isBrowser
} from 'umi'
import './layout.less'
import { useDarkreader } from './useDarkreader'
moment.locale('zh-cn')
// 调整自定义样式最后加载
window.onload = function () {
  import('/src/style/index.less')
}

const DarkButton = () => {
  const colorScheme = useMemo(() => {
    if (!isBrowser()) {
      return 'light'
    }

    return (
      matchMedia?.('(prefers-color-scheme: dark)')
        .matches && 'dark'
    )
  }, [])

  const defaultDarken = useMemo(() => {
    if (!isBrowser()) {
      return 'light'
    }
    return (
      localStorage.getItem(
        'procomponents_dark_theme'
      ) || colorScheme
    )
  }, [])

  const setColor = (isDarken: boolean) => {
    try {
      const theme =
        document.getElementsByTagName('meta')[
          'theme-color'
        ]
      theme.setAttribute(
        'content',
        isDarken ? '#242525' : '#1890ff'
      )
    } catch (error) {}
  }

  const [isDark, { toggle }] = useDarkreader(
    defaultDarken === 'dark'
  )

  useEffect(() => {
    setColor(isDark)
  }, [isDark])

  if (!isBrowser()) {
    return null
  }
  return (
    <Switch
      checkedChildren="🌜"
      unCheckedChildren="🌞"
      defaultChecked={defaultDarken === 'dark'}
      checked={isDark}
      onChange={(check) => {
        toggle()
        if (!check) {
          localStorage.setItem(
            'procomponents_dark_theme',
            'light'
          )
        } else {
          localStorage.setItem(
            'procomponents_dark_theme',
            'dark'
          )
        }
      }}
    />
  )
}

function loadJS(url, callback) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.onload = function () {
    callback?.()
  }
  script.src = url

  document
    .getElementsByTagName('head')[0]
    .appendChild(script)
}

const LayoutPage = ({
  children,
  ...props
}: IRouteComponentProps) => {
  const context = useContext(dumiContext)
  const title = useMemo(() => {
    if (context.meta.title?.includes('-')) {
      return `${context.meta.title}`
    }
    if (!context.meta.title) {
      return '组件'
    }
    return `${context.meta.title} - antd-packages`
  }, [context])

  return (
    <HelmetProvider>
      <ConfigProvider locale={zhCN}>
        <Layout {...props}>
          <div>
            <Helmet key="title">
              <title>{title}</title>
            </Helmet>
            <div key="children">{children}</div>
            <div
              style={{
                position: 'fixed',
                right: 8,
                top: 0,
                zIndex: 999,
                display: 'flex',
                alignItems: 'center'
              }}
              key="procomponents_dark_theme_view"
              className="procomponents_dark_theme_view"
            >
              {isBrowser() ? (
                <DarkButton />
              ) : null}
            </div>
          </div>
        </Layout>
      </ConfigProvider>
    </HelmetProvider>
  )
}

export default LayoutPage
