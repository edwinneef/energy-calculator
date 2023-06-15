import { ReactElement } from "react";

export interface FormElementProps {
  label?: string;
  error?: boolean;
  name: string;
  children: ReactElement;
}

function FormElement(props: FormElementProps) {
  const formElementClasses = props.error ? 'c-form-element c-form-element--error' : 'c-form-element';
  return (
    <div className={formElementClasses}>
      {props.label ? <div className="form-element__label">
        <label htmlFor={props.name}>{props.label}</label>
      </div> : null}
      <div className="form-element__wrapper">
        {props.children}
      </div>
      {props.error ? <div className="form-element__error">
        <span>This field is required.</span>
      </div> : null}
    </div>
  )
}

export default FormElement;