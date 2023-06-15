import FormElement from "../form-element/FormElement";

export interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: boolean;
  setValue: (value: string) => void;
}

function Input(props: InputProps) {

  return (
    <FormElement {...props}>
      <input onChange={(e) => props.setValue(e.target.value)} type="number" min={1} value={props.value} className="c-input" name={props.name} id={props.name} />
    </FormElement>
  )
}

export default Input;