import DatePicker from "react-datepicker";
import FormElement from "../form-element/FormElement";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../../../utils/calculator";

export interface DateInputProps {
  name: string;
  value?: Date;
  setValue: (value: Date | null) => void;
  label?: string;
  error?: boolean;
}

function DateInput(props: DateInputProps) {
  const handleChange = (value: Date | null) => {
    if (!value) return;
    props.setValue(new Date(value));
  }

  return (
    <FormElement {...props}>
      <DatePicker name={props.name} id={props.name} placeholderText={props.label} timeFormat="HH:mm" onChange={handleChange} value={formatDate(props.value)} selected={props.value} timeIntervals={5} showTimeSelect />
    </FormElement>
  )
}

export default DateInput;