import FormElement from "../form-element/FormElement";

export interface InputProps {
  type: 'string' | 'number';
  name: string;
  label?: string;
  placeholder?: string;
}

function Input(props : InputProps) {

  return (
    <FormElement {...props}>
      <input className="c-input" {...props} />
    </FormElement>
  )
}

export default Input;