import { useState } from 'react';

const useCustomPurchaseReceiptHook = () => {
  const initialTableState: any = {
    idx: 1,
    sub_category: '',
    gross_weight: '',
    less_weight: '',
    net_weight: '',
    amount: '',
  };

  const [purchaseReceiptTable, setPurchaseReceiptTable] = useState<any>([
    initialTableState,
  ]);
  const [topSectionInputData, setTopSectionInputData] = useState<any>({});
  const [amountValue, setamountValue] = useState<any>(false);
  const [stateForDocStatus, setStateForDocStatus] = useState<boolean>(false);

  const handleKeyDown = (event: any, id: any) => {
    if (
      event.key === 'Tab' &&
      id === purchaseReceiptTable[purchaseReceiptTable.length - 1].idx
    ) {
      event.preventDefault(); // Prevent the default tab behavior
      handleAddRow();
      setTimeout(() => {
        const nextInput: any = document.querySelector(
          `.input-${purchaseReceiptTable.length + 1}`
        );
        if (nextInput) {
          nextInput.focus();
        }
      }, 0);
    }
  };

  const handleAddRow: any = () => {
    const newRow = {
      idx: purchaseReceiptTable?.length + 1,
      sub_category: '',
      gross_weight: '',
      less_weight: '',
      net_weight: '',
      amount: '',
    };

    // Add the new row to the tableData
    setPurchaseReceiptTable([...purchaseReceiptTable, newRow]);

    // Calculate the new total values, including the new row
    const newColumnTotals = purchaseReceiptTable.reduce(
      (totals: any, row: any) => {
        totals.gross_weight += row.gross_weight || 0;
        totals.less_wt += row.less_wt || 0;
        totals.net_weight += row.net_weight || 0;
        totals.amount += row.amount || 0;
        return totals;
      },
      { gross_weight: 0, net_weight: 0, amount: 0 }
    );

    // Add the values of the new row to the totals
    newColumnTotals.gross_weight += newRow.gross_weight || 0;
    newColumnTotals.less_wt += newRow.less_weight || 0;
    newColumnTotals.net_weight += newRow.net_weight || 0;
    newColumnTotals.amount += newRow.amount || 0;

    // Update the total values

    setamountValue(newColumnTotals);
    setStateForDocStatus(true);
  };

  const handleDeleteRow: any = (id: any) => {
    if (purchaseReceiptTable?.length > 1) {
      const updatedData = purchaseReceiptTable
        .filter((row: any) => row.idx !== id)
        .map((row: any, index: number) => ({ ...row, idx: index + 1 }));
      setPurchaseReceiptTable(updatedData);
      setStateForDocStatus(true);
    }
  };

  const handlePRTopSectionData = (value: any, fieldName: any) => {
    const processedValue = typeof value === 'boolean' ? (value ? 1 : 0) : value;
    setTopSectionInputData((prevState: any) => {
      const newState = {
        ...prevState,
        [fieldName]: processedValue,
      };

      // Ensure only one checkbox is checked at a time
      if (fieldName === 'check_916' && processedValue === 1) {
        newState.check_75 = 0;
      } else if (fieldName === 'check_75' && processedValue === 1) {
        newState.check_916 = 0;
      }

      return newState;
    });

    setStateForDocStatus(true);
  };

  return {
    purchaseReceiptTable,
    setPurchaseReceiptTable,
    handleAddRow,
    amountValue,
    stateForDocStatus,
    handleKeyDown,
    setStateForDocStatus,
    setamountValue,
    handlePRTopSectionData,
    topSectionInputData,
    setTopSectionInputData,
    handleDeleteRow,
  };
};

export default useCustomPurchaseReceiptHook;
