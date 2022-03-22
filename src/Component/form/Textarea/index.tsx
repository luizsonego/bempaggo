import './styles.css';

interface ITextArea {
  name: string;
  id: string;
  label: string;
}

function Textarea(props: ITextArea) {
  return (
    <div className="content">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea id={props.id} name={props.name} placeholder="Alguma dúvida? Recado?"></textarea>
    </div>
  )
}

export default Textarea