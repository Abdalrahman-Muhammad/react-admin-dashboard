import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
export const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (productId) => {
    setData(data.filter((product) => product.id !== productId));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },

    { field: "status", headerName: "Status", width: 120 },
    { field: "price", headerName: "Price", width: 160 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              onClick={() => handleDelete(params.row.id)}
              className="productListDelete"
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
