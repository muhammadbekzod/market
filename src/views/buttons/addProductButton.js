import React, { useState } from "react";
import { Button } from "reactstrap";
import UploadProductInfo from "./uploadInfo";

const AddProductButton = () => {
  const [show, setShow] = useState(false);
  const [allVideoLinks, setAllVideoLink] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(true);

  const handleModalShow = () => {
    setShow(true);
    console.log("clicked");
  };

  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <>
      <UploadProductInfo
        show={show}
        setShow={setShow}
        handleModalShow={handleModalShow}
        handleToggle={handleToggle}
      />
      <Button color="success" onClick={handleModalShow}>
        Maxsulot qo'shish
      </Button>
      {/* <MainContainer /> */}
    </>
  );
};

export default AddProductButton;
