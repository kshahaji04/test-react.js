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
    if (e.key === 'Tab' && id?.includes('custom_hm_pcs')) {
      handleAddRow();
    }
    if (e.key === 'Enter' && id?.includes('r')) {
      handleAddRow();
    }
  };

  return (
    <div>
      <input
        type={type}
        className="form-control custom-input-field-t text-end"
        id={id}
        name={id}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => handleKeyDown(e, id)}
        ref={inputRef}
        autoComplete="off"
      />
    </div>
  );
};

export default InputFieldComponent;
