import { Layout, Menu, Breadcrumb, Image } from 'antd';
import { PieChartOutlined, DesktopOutlined, UserOutlined } from '@ant-design/icons';
import headPic from './head.jpg'
import './index.module.scss'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Admin() {
  return (
    <Layout style={{ height: '100%' }}>
      <Header className="header">
        <div className="logo">
          <Image src={headPic} width={60} height={60} alt=""></Image>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="sub1" icon={<PieChartOutlined />}>
              工作台
            </Menu.Item>
            <Menu.Item key="sub2" icon={<DesktopOutlined />} >
              添加文章
            </Menu.Item>
            <SubMenu key="sub3" icon={<UserOutlined />} title="文章管理">
              <Menu.Item key="9">添加文章</Menu.Item>
              <Menu.Item key="10">添加列表</Menu.Item>
            </SubMenu>
            <Menu.Item key="sub5" icon={<DesktopOutlined />} >
              留言管理
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Admin
