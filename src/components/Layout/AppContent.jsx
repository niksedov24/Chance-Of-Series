import { Layout, Flex, Typography } from "antd";
import SeriesGenerator from "../SeriesGenerator";
import "../css/Content.css";

export default function AppContent() {
  return (
    <Layout.Content className="contentStyle">
      <Flex className="contentFlex" gap={"2.25rem"} vertical>
        <Typography.Title className="contentTitle">
          Chance of Series
        </Typography.Title>
        <Typography.Text className="contentText">
          “Случайный выбор – простое решение! Мы избавим вас от мук выбора и
          предложим сериал из нашей обширной базы данных. Это ваш шанс открыть
          для себя новые жанры, выйти за рамки привычного и просто хорошо
          провести время. Доверьтесь случаю!”
        </Typography.Text>
        <SeriesGenerator />
      </Flex>
    </Layout.Content>
  );
}
