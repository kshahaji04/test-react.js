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

  const checkObjectHasValues = (challanTableData: any) => {
    return challanTableData.map((item: any) => {
      // Update missing or null values to 0
      const updatedItem = {
        ...item,
        gross_weight: item.gross_weight || 0,
        net_weight: item.net_weight || 0,
        amount: item.amount || 0,
      };

      const hasSubCategory = updatedItem.hasOwnProperty('sub_category');
      const hasGrossWeight = updatedItem.gross_weight > 0;
      const hasNetWeight = updatedItem.net_weight > 0;
      const hasAmount = updatedItem.amount > 0;

      // Return the updated item if it meets the conditions
      return hasSubCategory && (hasGrossWeight || hasNetWeight || hasAmount) ? updatedItem : null;
    }).filter((item: any) => item !== null);
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
