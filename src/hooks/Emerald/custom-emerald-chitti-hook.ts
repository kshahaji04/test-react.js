import { useState } from 'react';

const useCustomEmeraldChittiHook = () => {
  const initialTableData = [
    {
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      gross_weight: '',
      stn_wt: '21',
      h: '',
      i: '',
      j: '',
      net_weight: '',
      project: '',
      product: '',
      n: '',
      o: '',
      p: '',
      q: '',
      r: '',
      sub_category: '',
      category: '',
      cz_amt: '',
      cs_amt: '',
      amount: '',
    },
  ];

  const [tableData, setTableData] = useState<any>(initialTableData);

  const handleAddRow: any = () => {
    const newRow = {
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      gross_weight: '',
      stn_wt: '',
      h: '',
      i: '',
      j: '',
      net_weight: '',
      project: '',
      product: '',
      n: '',
      o: '',
      p: '',
      q: '',
      r: '',
      sub_category: '',
      category: '',
      cz_amt: '',
      cs_amt: '',
      amount: '',
    };

    // Add the new row to the tableData
    setTableData([...tableData, newRow]);
  };
  const findDuplicateValuesInEmeraldChittiTable = (arr: any) => {
    const counts: any = {};
    const duplicates = [];

    for (const obj of arr) {
      const keyA =
        obj.a !== null && obj.a !== undefined ? String(obj.a) : '___empty___';
      const grossWeight =
        obj.gross_weight !== null && obj.gross_weight !== undefined
          ? String(obj.gross_weight)
          : '___empty___';

      // Combine "a" value and gross_weight value for comparison
      const combinedValue = `${keyA}_${grossWeight}`;

      counts[combinedValue] = (counts[combinedValue] || 0) + 1;

      if (counts[combinedValue] === 2) {
        duplicates.push(combinedValue);
      }
    }

    return duplicates;
  };

  const findDuplicateIndicesInEmeraldChittiTable = (arr: any) => {
    const indices: any = {};
    const duplicateIndices = [];

    for (const { a, gross_weight, index } of arr) {
      const keyA = a !== null && a !== undefined ? String(a) : '___empty___';
      const normalizedValue =
        gross_weight !== null && gross_weight !== undefined
          ? String(gross_weight)
          : '___empty___';

      // Combine "a" value and gross_weight value for comparison
      const combinedValue = `${keyA}_${normalizedValue}`;

      if (indices[combinedValue] !== undefined) {
        duplicateIndices.push([indices[combinedValue], index]);
      } else {
        indices[combinedValue] = index;
      }
    }

    return duplicateIndices;
  };

  return {
    handleAddRow,
    tableData,
    setTableData,
    findDuplicateValuesInEmeraldChittiTable,
    findDuplicateIndicesInEmeraldChittiTable,
  };
};

export default useCustomEmeraldChittiHook;
