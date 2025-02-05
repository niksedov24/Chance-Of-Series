import { Modal, Typography, Flex, Tag, Button } from "antd";

export default function SeriesCard({ series, open, onCancel }) {
  if (!series) return null;

  return (
    <Modal width={"40.625rem"} open={open} footer={null} onCancel={onCancel}>
      <Typography.Title level={2} style={{}}>
        {" "}
        {series.name}{" "}
      </Typography.Title>
      <Flex gap={"4.375rem"}>
        <img
          src={series.image.medium}
          alt={series.name}
          style={{
            borderRadius: "0.938rem",
          }}
        />
        <Typography.Paragraph style={{ marginTop: "1.875rem" }}>
          {series.genres.length > 0 && (
            <p>
              {" "}
              <span style={{ fontWeight: "700" }}>Genre:</span>{" "}
              {series.genres.join(", ")}
            </p>
          )}
          <p>
            {" "}
            <span style={{ fontWeight: "700" }}>Status:</span> {series.status}
          </p>
          <p>
            <span style={{ fontWeight: "700" }}>Описание:</span> Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Doloribus esse, at
            omnis nostrum beatae magni exercitationem animi quia. Quis in
            quisquam sunt consequatur nobis consectetur laudantium hic odio
            rerum excepturi?
          </p>
          <Button
            style={{ marginTop: "1.5rem", marginLeft: "30%" }}
            type="primary"
            size="medium"
          >
            Смотреть
          </Button>
        </Typography.Paragraph>
      </Flex>
    </Modal>
  );
}
