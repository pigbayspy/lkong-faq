import { ConfigProvider, Layout, Typography } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import "antd/dist/antd.css";

moment.locale("zh-cn");

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout style={{ margin: "0 auto", maxWidth: "480px" }}>
        <Layout.Content style={{ padding: '10px 50px' }}>
          <Typography>
            <Typography.Title>龙空 APP 帮助</Typography.Title>
            <Typography.Text>帮助内容</Typography.Text>
          </Typography>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
