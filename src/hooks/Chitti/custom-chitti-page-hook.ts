import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const UseCustomChittiHook: any = () => {
  const [totalGrossWeightOfChallanTable, setTotalGrossWeightOfChallanTable] =
    useState<any>('');
  const [totalHuidWeightOfHuidTable, setTotalHuidWeightOfHuidTable] =
    useState<any>('');

  const CheckValidGrossAndHuidWeight: any = () => {
    if (totalGrossWeightOfChallanTable < totalHuidWeightOfHuidTable) {
      toast.error('Huid weight cannot be greater than Gross weight');
    }
  };

  useEffect(() => {
    CheckValidGrossAndHuidWeight();
  }, [totalGrossWeightOfChallanTable, totalHuidWeightOfHuidTable]);
  console.log('checkk', CheckValidGrossAndHuidWeight);
  return {
    totalGrossWeightOfChallanTable,
    totalHuidWeightOfHuidTable,
    setTotalGrossWeightOfChallanTable,
    setTotalHuidWeightOfHuidTable,
  };
};

export default UseCustomChittiHook;
