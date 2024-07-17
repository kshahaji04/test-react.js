import EmeraldShilpiListing from './EmeraldShilpiListing';
import UseEmeraldShilpiHook from '../../../hooks/emeraldShilpi/emerald-shilpi-hook';

const MasterEmeraldShilpi = () => {
  const { emeraldShilpiListData }: any = UseEmeraldShilpiHook();

  return (
    <div>
      <EmeraldShilpiListing emeraldShilpiListData={emeraldShilpiListData} />
    </div>
  );
};

export default MasterEmeraldShilpi;
