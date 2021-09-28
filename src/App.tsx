import { ConfigProvider, Layout, Typography } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import "antd/dist/antd.css";

moment.locale("zh-cn");

function App() {
  return (
      <ConfigProvider locale={zhCN}>
          <Layout style={{margin: "0 auto", maxWidth: "480px", minHeight: "960px"}}>
              <Layout.Content style={{padding: '0 24px', marginTop: "36px"}}>
                  <Typography>
                      <Typography.Title>龙空 APP 帮助</Typography.Title>
                      <Typography.Text>帮助内容</Typography.Text>
                  </Typography>
              </Layout.Content>
              <Layout.Footer
                  style={{textAlign: 'center', background: "#f0f2f5", paddingLeft: '24px', paddingRight: "24px"}}>
                  <Typography>
                      <Typography.Text>感谢支持</Typography.Text>
                  </Typography>
              </Layout.Footer>
          </Layout>
      </ConfigProvider>
  );
}

export default App;
