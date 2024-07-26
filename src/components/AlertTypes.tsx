interface AlertTypesProps {
  alertTypesArray: Array<string>;
  onChange: (name: string) => void;
}

export default function AlertTypes({
  alertTypesArray,
  onChange,
}: AlertTypesProps) {
  return (
    <div className="d-flex flex-wrap mt-2 mb-4">
      {alertTypesArray.map((item) => (
        <div key={alertTypesArray.indexOf(item)}>
          <input
            type="checkbox"
            id={item}
            className="d-none filter"
            onChange={() => onChange(item)}
          />
          <label htmlFor={item} className="btn btn-outline-light m-1">
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}
