import { AgGridReact } from "ag-grid-react";
import { DATA } from "../data/data";
import "ag-grid-community/styles/ag-theme-quartz.css";

const DeatailsComponent = (props) => {
  const { data } = props;
  const columns = [
    {
      headerName: "Make",
      field: "make",
      cellRenderer: "agGroupCellRenderer",
      checkboxSelection: true,
    },
    { headerName: "Price", field: "price" },
    { headerName: "Date", field: "date" },
  ];
  return (
    <div style={{ padding: "10px 50px", backgroundColor: "azure" }}>
      <h3 style={{ margin: 0, paddingBottom: 10 }}>
        {data.make}
        <i> ({data.model})</i>
      </h3>
      <div className="ag-theme-quartz-dark" style={{ height: 200 }}>
        <AgGridReact
          rowData={DATA}
          columnDefs={columns}
          defaultColDef={{ flex: 1 }}
        />
      </div>
    </div>
  );
};

export default DeatailsComponent;
