import axios from "axios";
import React, { useState } from "react";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { Button, Col, Input, Label, Modal, ModalBody, Row } from "reactstrap";

const baseUrl = "http://localhost:8080/";

const UploadProductInfo = ({ show, handleToggle }) => {
  const [files, setFile] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [subtitle, setSubtitle] = useState();
  const handleClick = async () => {
    try {
      const form = new FormData();
      form.append("file", files[0]);
      form.append("title", title);
      form.append("description", description);
      form.append("subtitle", subtitle);
      const response = await axios.post(baseUrl + "fileUploder", form, {
        withCredentials: true,
      });
      window.console.log("response: ", response);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log("files: ", files);
  return (
    <div>
      <Modal isOpen={show} toggle={handleToggle} className="" size="lg">
        <ModalBody>
          <h1>Maxsulot ro'yxatga qo'shish</h1>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1" }}>
              <Col>
                <h5>Maxsulot surati</h5>
                <Label for="new_stream">
                  <div
                    className="label"
                    style={{
                      width: "250px",
                      height: "150px",
                      border: "1px solid #BEBEBE",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <RiUploadCloud2Fill />
                    <p style={{ fontSize: "13px" }}>
                      Maxsulot suratini yuklang
                    </p>
                  </div>
                </Label>
                <Input
                  onChange={(e) => setFile(e.target.files)}
                  type="file"
                  id="new_stream"
                  className="d-none"
                />
              </Col>
            </div>
            <div style={{ flex: "1" }}>
              <Label for="videoTitle" style={{ fontSize: "14px" }}>
                Maxsulot nomi
              </Label>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Label
                for="videoDesc"
                style={{ marginTop: "20px", fontSize: "14px" }}
              >
                kirim narxi
              </Label>
              <Input
                type="number"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Label for="cost" style={{ marginTop: "20px", fontSize: "14px" }}>
                sotuv narxi
              </Label>
              <Input
                type="number"
                // value={subtitle}
                // onChange={(e) => setSubtitle(e.target.value)}
              />
              <Label
                for="product"
                style={{ marginTop: "20px", fontSize: "14px" }}
              >
                yaroqlilik muddati
              </Label>
              <Input
                type="date"
                // value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
              <Label
                for="barcode"
                style={{ marginTop: "20px", fontSize: "14px" }}
              >
                bar code
              </Label>
              <Input
                type="number"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                <Button color="warning" onClick={handleToggle}>
                  Cancel
                </Button>
                <Button color="success" onClick={handleClick}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UploadProductInfo;
