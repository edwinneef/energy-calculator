import { useState } from "react";
import FormElement from "../form-element/FormElement";
import "react-datepicker/dist/react-datepicker.css";

export interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: Array<{ value: string; label: string; }>
  value?: string;
  error?: boolean;
  setValue: (value: string) => void;
}

function Select(props: SelectProps) {
  const [focus, setFocus] = useState(false);
  const selectClasses = focus ? 'c-select c-select--focus' : 'c-select';

  return (
    <FormElement {...props}>
      <div className={selectClasses}>
        <select onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChange={(e) => props.setValue(e.target.value)} value={props.value} name={props.name} id={props.name}>
          {props.options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
        </select>
      </div>
    </FormElement>
  )
}

export default Select;