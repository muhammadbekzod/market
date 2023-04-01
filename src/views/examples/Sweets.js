import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import MainTable from "components/tables/mainTable";
import AddProductButton from "views/buttons/addProductButton";

const Sweets = () => {
  return (
    <>
      <Header />
      <Container>
        <AddProductButton />
        <MainTable />
      </Container>
    </>
  );
};

export default Sweets;
