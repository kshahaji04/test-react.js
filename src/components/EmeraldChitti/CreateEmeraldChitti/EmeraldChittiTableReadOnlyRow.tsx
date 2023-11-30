import InputFieldComponent from './InputFieldComponent';

const EmeraldChittiTablereadOnlyRow = ({ calculationRow }: any) => {
  return (
    <>
      <tr>
        <td className="emerald_chitti_table_td"></td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.gross_weight.toFixed(3)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.stn_wt.toFixed(3)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.h.toFixed(3)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.i.toFixed(3)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.j.toFixed(3)}
            readOnly={'true'}
          />
        </td>

        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.k.toFixed(3)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow.net_weight.toFixed(3)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent value={''} readOnly={'true'} />
        </td>

        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.amount?.toFixed(3)}
            readOnly={'true'}
          />
        </td>
        <td className="emerald_chitti_table_td">
          <InputFieldComponent
            value={calculationRow?.hm_pcs?.toFixed(3)}
            readOnly={'true'}
          />
        </td>

        <td></td>
      </tr>
    </>
  );
};

export default EmeraldChittiTablereadOnlyRow;
