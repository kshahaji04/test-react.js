import React from 'react';
import UseEmeraldShilpiDetails from '../../../hooks/emerald-shilpi/emerald-shilpi-detail-hook';

const EmeraldShilpiDetails = () => {
  const { emeraldShilpiDetails }: any = UseEmeraldShilpiDetails();
  console.log('emeraldShilpiDetails', emeraldShilpiDetails);

  return <div>EmeraldShilpiDetails</div>;
};

export default EmeraldShilpiDetails;
