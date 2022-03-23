import React, { TextareaHTMLAttributes } from "react";
import './styles.css';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}


const Textarea: React.FC<ITextareaProps> = ({ label, name, ...rest }) => {
  return (
        <div className="content">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} {...rest}></textarea>
    </div>
  );
}

// function Textarea(props: ITextArea) {
//   return (
//     <div className="content">
//       <label htmlFor={props.id}>{props.label}</label>
//       <textarea id={props.id} name={props.name} placeholder="Alguma dúvida? Recado?"></textarea>
//     </div>
//   )
// }

export default Textarea