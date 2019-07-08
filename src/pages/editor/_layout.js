
import { Layout} from 'antd';

const { Header, Sider, Content } = Layout;

function _Layout({}) {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header>Header</Header>
      <Layout style={{ height: '100%' }}>
        <Sider>left-sider</Sider>
        <Layout>
          <Layout>
            <Content>content-up</Content>
            <Layout>contant-down</Layout>
          </Layout>
          <Sider>content-right-sider</Sider>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default _Layout;