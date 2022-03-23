import React, { ChangeEventHandler, HTMLAttributes } from "react";
import './styles.css';

interface ICheckboxProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  type?: string;
  error?: string;
  className?: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({ label, name, value, onChange, ...rest }) => {
  return (
    <div>
        <label htmlFor={name} className="checkbox-container">
            {label}
            <input 
              type="checkbox" 
              id={name} 
              name={name}
              value={value}
              onChange={onChange}
              {...rest} 
            />
            <span className="checkbox"></span>
        </label>
    </div>    
  )
}
export default Checkbox;