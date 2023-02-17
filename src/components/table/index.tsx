import { getObjectValue } from "@/utils/object";
interface Column {
  key: string;
  name: string;
}
interface ComponentProps {
  columns: Array<Column>
  data: Array<any>
  children: any;
  actionsComponent: any;
}
function Table(props: ComponentProps) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {props.columns.map((column) => (
            <th key={column.key}>{column.name}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((rowData) => (
          <tr key={rowData.id}>
            {props.columns.map((column) => (
              <td key={`${rowData.id}-${column.key}`}>{getObjectValue(rowData, column.key)}</td>
            ))}
            <td>
              <props.actionsComponent data={rowData} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;