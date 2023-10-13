import React from 'react';
import EmeraldShilpiListing from './EmeraldShilpiListing';
import UseEmeraldShilpiHook from '../../../hooks/emerald-shilpi/emerald-shilpi-hook';

const MasterEmeraldShilpi = () => {
  const { emeraldShilpiListData }: any = UseEmeraldShilpiHook();
  console.log('emeraldShilpiListData', emeraldShilpiListData);
  return (
    <div>
      <EmeraldShilpiListing emeraldShilpiListData={emeraldShilpiListData} />
    </div>
  );
};

export default MasterEmeraldShilpi;
