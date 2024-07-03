// src/GridPage.js
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { DATA } from "../data/data";
import Details from "./Details";

const GridPage = () => {
  const [gridApi, setGridApi] = useState();
  const rowData = DATA;

  const columns = [
    {
      headerName: "Make",
      field: "make",
      cellRenderer: "agGroupCellRenderer",
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    { headerName: "Price", field: "price" },
    { headerName: "Model", field: "model" },
    { headerName: "Date", field: "date" },
  ];

  const defColumnDefs = { flex: 1 };

  const onGridReady = (params) => {
    setGridApi(params);
  };
  const onFirstDataRendered = () => {
    gridApi.api.forEachNode((node) => {
      node.setExpanded(true);
    });
    // gridApi.api.getDisplayedRowAtIndex(0).setExpanded(true);
  };

  return (
    <div className="my-20">
      <h2 className="text-3xl mb-4 font-bold" align="center">Ag Grid with React</h2>
      <p className="text-lg mb-4" align="center">Details Row Panel in AG Grid</p>
      <div className="ag-theme-material" style={{ height: 600 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columns}
          defaultColDef={defColumnDefs}
          onGridReady={onGridReady}
          masterDetail={true}
          detailCellRenderer={(props) => <Details {...props} />}
          detailRowHeight={250}
          onFirstDataRendered={onFirstDataRendered}
        />
      </div>
    </div>
  );
};

export default GridPage;
