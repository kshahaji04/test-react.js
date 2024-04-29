import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const useCustomChittiHook: any = () => {
  const [totalGrossWeightOfChallanTable, setTotalGrossWeightOfChallanTable] =
    useState<any>('');
  const [totalHuidWeightOfHuidTable, setTotalHuidWeightOfHuidTable] =
    useState<any>('');

  const [checkGrossAndNetWeight, setCheckGrossAndNetWeight] = useState({
    gross_weight: '0',
    net_weight: '',
  });

  const checkValidGrossAndHuidWeight: any = () => {
    if (totalGrossWeightOfChallanTable < totalHuidWeightOfHuidTable) {
      toast.error('Huid weight cannot be greater than Gross weight');
    }
  };

  const checkValidGrossAndNewWeight: any = () => {
    if (
      checkGrossAndNetWeight.gross_weight < checkGrossAndNetWeight.net_weight
    ) {
      toast.error('Net weight cannot be greater than Gross weight');
    }
  };

  useEffect(() => {
    checkValidGrossAndHuidWeight();
    checkValidGrossAndNewWeight();
  }, [
    totalGrossWeightOfChallanTable,
    totalHuidWeightOfHuidTable,
    checkGrossAndNetWeight,
  ]);

  const checkObjectHasValuesInHuid = (narrationTableData: any) => {
    return narrationTableData.filter((item: any) => {
      return (
        item.hasOwnProperty('product') &&
        item.product !== null &&
        item.product !== undefined &&
        item.product !== ''
      );
    });
  };

  const checkObjectHasValues: any = (challanTableData: any) => {
    return challanTableData.filter((item: any) => {
      const hasSubCategory = item.hasOwnProperty('sub_category');
      const hasGrossWeight =
        item.hasOwnProperty('gross_weight') && item.gross_weight > 0;
      const hasNetWeight =
        item.hasOwnProperty('net_weight') && item.net_weight > 0;
      const hasAmount = item.hasOwnProperty('amount') && item.amount > 0;

      // Include a check for sub_category and at least one of gross_weight, net_weight, or amount
      return hasSubCategory && (hasGrossWeight || hasNetWeight || hasAmount);
    });
  };

  return {
    totalGrossWeightOfChallanTable,
    totalHuidWeightOfHuidTable,
    setTotalGrossWeightOfChallanTable,
    setTotalHuidWeightOfHuidTable,
    checkGrossAndNetWeight,
    setCheckGrossAndNetWeight,
    checkObjectHasValuesInHuid,
    checkObjectHasValues,
  };
};

export default useCustomChittiHook;
