import React, { useState, useMemo, useCallback } from 'react';
import type { MenuProps } from 'antd';
import { Outlet, useLocation, history } from 'umi';
import { Layout, Menu, theme, ConfigProvider } from 'antd';
import routerArr from '@/router';
import styles from './index.less';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];


const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = useLocation()?.pathname || '';
  const layoutArr: any = useMemo(() => {
    let result: any = routerArr.filter(item => item?.useLayout)?.map(record=>record.path);
    return result;
  },[])
  const [selectedKeys, setSelectedKeys] = useState([pathname]);
  // const [slideMenu, setSlideMenu] = useState<any>([]);
  const slideMenu = useMemo(() => {
    let result: any =  routerArr?.filter(item => item?.useLayout)?.map((item: any) => {
      return {
        label: item.name,
        key: item.path,
      }
    });
    return result;
  },[])
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menuClick: any = useCallback((item, key, keyPath) => {
    setSelectedKeys([item?.key])
    history.push(item?.key)
  }, [])
  const layoutRender = useMemo(() => {
    return (<ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#00b96b', // 全局配置主题色，可以走接口
          borderRadius: 2,
        },
      }}
    >
      <Layout style={{ height: '100vh' }}>
        <Header style={{ padding: 0, height: '70px' }} >
          <div>12313</div>
        </Header>
        <Layout style={{ height: 'calc(100vh - 70px)',overflow:'hidden' }}>
          <Sider
            width={240}
            style={{ height: 'calc(100vh - 70px)' }}
            theme="light"
            collapsedWidth={0}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            zeroWidthTriggerStyle={{ opacity: 0.4 }}
          >
            <div className={styles.slideMenuBox}>
              <Menu
                onClick={menuClick}
                theme="light"
                defaultSelectedKeys={selectedKeys}
                selectedKeys={selectedKeys}
                mode="inline"
                items={slideMenu}
              />
            </div>s
          </Sider>
          <Content style={{padding:'20px', backgroundColor:'#f1f1f1'}}>
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>)
  }, [collapsed, menuClick, selectedKeys])
  const resultRender = useMemo(() => {
    let result: any = <></>;
    if (layoutArr?.includes(pathname)) {
      result = layoutRender
    } else {
      result = <><Outlet></Outlet></>
    }
    return result
  }, [layoutRender, pathname])
  return (<>{resultRender}</>);
};

export default App;