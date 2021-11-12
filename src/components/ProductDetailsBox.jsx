import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

const ProductDetailsBox = ({ product }) => {
  const property = (title, value) => {
    const cellStyle = { verticalAlign: "top", whiteSpace: "pre-line" };
    return (
      <TableRow>
        <TableCell style={cellStyle}>
          <b>{title}</b>
        </TableCell>
        <TableCell style={cellStyle}>{value}</TableCell>
      </TableRow>
    );
  };
  return (
    <TableContainer sx={{ maxWidth: 500 }}>
      <Table>
        <TableBody>
          {property("Type", product.category + " fan")}
          {property("Features", product.features.join("\n"))}
          {property("Speed Settings", product.speedSettings)}
          {property("Coefficient of Performance", product.COP + ".0")}
          {property("Power Consumption", "80 W")}
          {property("Noise Level", product.soundLevel)}
          {property("Dimensions", "H: 50 cm\nW: 50 cm\nD:50 cm")}
          {property("Color", product.color)}
          {property("Material", product.material)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductDetailsBox;
