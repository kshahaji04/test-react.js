import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const UseCustomChittiHook: any = () => {
  const [totalGrossWeightOfChallanTable, setTotalGrossWeightOfChallanTable] =
    useState<any>('');
  const [totalHuidWeightOfHuidTable, setTotalHuidWeightOfHuidTable] =
    useState<any>('');

  const [checkGrossAndNetWeight, setCheckGrossAndNetWeight] = useState({
    gross_weight: '0',
    net_weight: '',
  });

  const CheckValidGrossAndHuidWeight: any = () => {
    if (totalGrossWeightOfChallanTable < totalHuidWeightOfHuidTable) {
      toast.error('Huid weight cannot be greater than Gross weight');
    }
  };

  const CheckValidGrossAndNewWeight: any = () => {
    if (
      checkGrossAndNetWeight.gross_weight < checkGrossAndNetWeight.net_weight
    ) {
      toast.error('Net weight cannot be greater than Gross weight');
    }
  };

  useEffect(() => {
    CheckValidGrossAndHuidWeight();
    CheckValidGrossAndNewWeight();
  }, [
    totalGrossWeightOfChallanTable,
    totalHuidWeightOfHuidTable,
    checkGrossAndNetWeight,
  ]);

  return {
    totalGrossWeightOfChallanTable,
    totalHuidWeightOfHuidTable,
    setTotalGrossWeightOfChallanTable,
    setTotalHuidWeightOfHuidTable,
    checkGrossAndNetWeight,
    setCheckGrossAndNetWeight,
  };
};

export default UseCustomChittiHook;
