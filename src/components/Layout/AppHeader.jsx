import { Button, Layout, Typography } from "antd";
import "../css/Header.css";

export default function AppHeader() {
  return (
    <Layout.Header className="headerStyle">
      <Typography.Title level={2} style={{ color: "#1677ff", margin: 0 }}>
        Chance of Series
      </Typography.Title>

      <ul className="nav__list">
        <li>
          <a href="#">Отзывы</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
        <li>
          <a href="#">Хочу посмотреть</a>
        </li>
      </ul>
    </Layout.Header>
  );
}
