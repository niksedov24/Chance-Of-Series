import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import SeriesCard from "./SeriesCard";
import CoverSlider from "./CoverSlider";

export default function SeriesGenerator() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomSeries, setRandomSeries] = useState(null);
  const [modal, setModal] = useState(false);
  const [coverUrls, setCoverUrls] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setSeries(data);
        setLoading(false);
        const coverImages = data
          .filter((show) => show.image && show.image.medium)
          .map((show) => show.image.medium);
        setCoverUrls(coverImages);
      })
      .catch((error) => console.error("Ошибка:", error));
  }, []);

  function handleGenerateRandom() {
    if (series.length > 0) {
      const randomIndex = Math.floor(Math.random() * series.length);
      setRandomSeries(series[randomIndex]);
      setModal(true);
    }
  }

  return (
    <div>
      <CoverSlider coverUrls={coverUrls} />
      <Button
        onClick={handleGenerateRandom}
        style={{
          margin: "40px auto",
        }}
        type="primary"
        size="large"
        icon={<SearchOutlined />}
      >
        Сгенерировать
      </Button>
      {randomSeries && (
        <SeriesCard
          onCancel={() => setModal(false)}
          open={modal}
          series={randomSeries}
        />
      )}
    </div>
  );
}
