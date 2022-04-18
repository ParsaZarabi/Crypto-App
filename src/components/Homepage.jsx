import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const golobalStats = data?.data?.stats;

    if(isFetching) return 'Loading ...';

  return (
    <div>
        <>
          <Title level={2} className="heading">Global Crypto Stats</Title>
          <Row>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={golobalStats.total} /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(golobalStats.totalMarketCap)} /></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(golobalStats.total24hVolume)} /></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(golobalStats.totalMarkets)} /></Col>
          </Row>
        </>
    </div>
  )
}

export default Homepage