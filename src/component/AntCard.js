import * as React from 'react';
import { Card } from 'antd';

export default function AntCard({ data }) {
  return (
    <Card style={{ width: 300, height: 100, marginBottom: 5, marginTop: 5, marginLeft: '40%' }}>
      <p>{data}</p>
    </Card>
  );
}