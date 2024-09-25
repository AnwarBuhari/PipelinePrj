  
	  import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
    import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
    import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
    import {useState, useEffect} from 'react';
    import "ag-grid-community/styles/ag-theme-quartz.css"; // import Quartz theme
    
    const GridExample = () => {

        // Row Data: The data to be displayed.
      // eslint-disable-next-line
        const [rowData, setRowData] = useState([
          { make: "Tesla", model: "Model Y", price: 64950, electric: true },
          { make: "Ford", model: "F-Series", price: 33850, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        ]);
        

        // Column Definitions: Defines the columns to be displayed.
       // eslint-disable-next-line
        const [colDefs, setColDefs] = useState([
          { field: 'athlete' },
          { field: 'age' },
          { field: 'country' },
          { field: 'year' },
          { field: 'date' },
          { field: 'sport' },
          { field: 'gold' },
          { field: 'silver' },
          { field: 'bronze' },
          { field: 'total' }
        ]);
       
        // const setValue = (newValue) => {
        //   setColDefs({ ...colDefs, value: newValue })
        // }

        // const selection = useMemo(() => { 
        //     return {
        //       mode: 'multiRow',
        //     };
        // }, []);
    
        const pagination = true;
        const paginationPageSize = 500;
        const paginationPageSizeSelector = [1, 200, 500, 1000];
    
        // eslint-disable-next-line
        const [gridOptions, setGridOptions] = useState([
         { pagination: true,
          rowModelType: 'infinite',
          cacheBlockSize: 10,
          paginationPageSize: 10}
        ]);

        useEffect(() => {
          fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
          .then(result => result.json())
          .then(rowData => setRowData(rowData))
        }, []);


        return (
            // wrapping container with theme & size
            <div
             className="ag-theme-quartz" // applying the Data Grid theme
             style={{ height: 500 }} // the Data Grid will fill the size of the parent container
            >
              <AgGridReact
                  rowData={rowData}
                  columnDefs={colDefs}
                  gridOptions={gridOptions}
                  pagination={pagination}
                  paginationPageSize={paginationPageSize}
                  paginationPageSizeSelector={paginationPageSizeSelector}
              />
            </div>
           )
       
       }
    
       export default GridExample;