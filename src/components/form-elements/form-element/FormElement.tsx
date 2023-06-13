import { ReactElement } from "react";

export interface FormElementProps {
  label?: string;
  name: string;
  children: ReactElement;
}

function FormElement(props: FormElementProps) {

  return (
    <div className="c-form-element">
      {props.label ? <div className="form-element__label">
        <label htmlFor={props.name}>{props.label}</label>
      </div> : null}
      <div className="form-element__wrapper">
        {props.children}
      </div>
    </div>
  )
}

export default FormElement;