import Header from "components/Headers/Header";
import React from "react";
import { Container, Input, Table } from "reactstrap";

const Milky = () => {
  return (
    <div>
      <Header />
      <Container>
        <div style={{ marginTop: "20px" }}>
          <Container>
            <Input placeholder="Qidiruv..." />
          </Container>
          <Container>
            <Table>
              <tr>
                <th>ID</th>
                <th>Mahsulot nomi</th>
                <th>Narxi</th>
                <th>Sotuv narxi</th>
                <th>Yaroqlilik muddati</th>
                <th>Bar Code</th>
              </tr>
              <tr>
                <td>124</td>
                <td>Qo'y son</td>
                <td>12000</td>
                <td>14000</td>
                <td>05/12/23</td>
                <td>408430223</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Mol bo'yin</td>
                <td>11000</td>
                <td>11900</td>
                <td>05/10/23</td>
                <td>487230238</td>
              </tr>
            </Table>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Milky;
