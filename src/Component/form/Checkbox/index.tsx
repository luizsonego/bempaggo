import './styles.css';

interface ICheckbox {
    id: string;
    value: string;
    label: string;
}

function Checkbox({id, value, label}: ICheckbox) {
  return (
    <div>
        <label htmlFor={id} className="checkbox-container">
            {label}
            <input type="checkbox" id={id} value={value} />
            <span className="checkbox"></span>
        </label>
    </div>
  )
}

export default Checkbox;