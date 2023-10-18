import { useState, useRef, useEffect } from 'react';
import '../Style/custom-dropdown.css';

const CustomDropDown = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const inputRef = useRef<any>(null);
  const datalistRef = useRef<any>(null);

  const options: any = ['option1', 'option2', 'option3'];

  useEffect(() => {
    if (selectedOptionIndex !== -1) {
      datalistRef?.current?.children[selectedOptionIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [selectedOptionIndex]);

  const handleInputChange = (e: any) => {
    if (e.key === 'ArrowDown' && selectedOptionIndex < options.length - 1) {
      setSelectedOptionIndex((prevIndex) => prevIndex + 1);
    } else if (e.key === 'ArrowUp' && selectedOptionIndex > 0) {
      setSelectedOptionIndex((prevIndex) => prevIndex - 1);
    } else if (e.key === 'Enter' && selectedOptionIndex !== -1) {
      setInputValue(options[selectedOptionIndex]);
      setSelectedOptionIndex(-1);
    }
  };

  return (
    <div className="">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleInputChange}
        list="options"
        ref={inputRef}
        className="input-field"
      />
      <datalist id="options" className="datalistd" ref={datalistRef}>
        {options.map((option: any, index: any) => (
          <option
            key={index}
            value={option}
            onClick={() => setInputValue(option)}
            className={index === selectedOptionIndex ? 'selected' : ''}
          />
        ))}
      </datalist>
    </div>
  );
};

export default CustomDropDown;
