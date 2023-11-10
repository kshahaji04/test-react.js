import { useState } from "react";

const UseCustomEmeraldChittiHook = () => {

    const initialTableData = [
        {
            a: "",
            b: "",
            c: "",
            d: "",
            e: "",
            gross_weight: '',
            stn_wt: '21',
            h: "",
            i: "",
            j: "",
            net_weight: '',
            project: "",
            product: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            sub_category: "",
            category: "",
            cz_amt: '',
            cs_amt: '',
            amount: ''
        }

    ];

    const [tableData, setTableData] = useState<any>(initialTableData);


    const HandleAddRow: any = () => {
        const newRow = {
            a: "",
            b: "",
            c: "",
            d: "",
            e: "",
            gross_weight: '',
            stn_wt: '',
            h: "",
            i: "",
            j: "",
            net_weight: '',
            project: "",
            product: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            sub_category: "",
            category: "",
            cz_amt: '',
            cs_amt: '',
            amount: ''
        }


        // Add the new row to the tableData
        setTableData([...tableData, newRow]);
        // setStateForDocStatus(true);

        // // Calculate the new total values, including the new row
        // const newColumnTotals = tableData.reduce(
        //     (totals: any, row: any) => {
        //         totals.gross_weight += row.gross_weight;
        //         totals.net_weight += row.net_weight;
        //         totals.amount += row.amount;
        //         return totals;
        //     },
        //     { gross_weight: 0, net_weight: 0, amount: 0 }
        // );

        // // Add the values of the new row to the totals
        // newColumnTotals.gross_weight += newRow.gross_weight;
        // newColumnTotals.net_weight += newRow.net_weight;
        // newColumnTotals.amount += newRow.amount;

        // // Update the total values
        // setamountValue(newColumnTotals);
    };


    // console.log("table data set", tableData)


    console.log("table data set", tableData)
    return { HandleAddRow, tableData, setTableData }
}

export default UseCustomEmeraldChittiHook;