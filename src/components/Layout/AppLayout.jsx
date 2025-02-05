import { Layout, Spin } from "antd";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import "../css/Container.css";

export default function AppLayout() {
  return (
    <div className="container">
      <Layout>
        <AppHeader />
        <Layout>
          <AppContent />
        </Layout>
      </Layout>
    </div>
  );
}
