const InputFieldComponent = ({
  value,
  readOnly,
  id,
  onChange,
  type,
  handleAddRow,
  inputRef,
}: any) => {
  const handleKeyDown: any = (e: any, id: any) => {
    if (e.key === 'Tab' && id === 'custom_hm_pcs') {
      handleAddRow();
    }
  };

  return (
    <div>
      <input
        type={type}
        className="form-control custom-input-field-t text-end"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        id={id}
        name={id}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => handleKeyDown(e, 'custom_hm_pcs')}
        ref={inputRef}
        autoComplete="off"
      />
    </div>
  );
};

export default InputFieldComponent;
