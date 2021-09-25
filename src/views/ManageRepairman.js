import React, { useState, useEffect } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import {
  Media,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import deleteIcon from "assets/img/remove.png";
import editIcon from "assets/img/edit.png";
import { Link } from "react-router-dom";

function ManageCompany() {
  const [RepairmanDelete, setRepairmanDelete] = useState(null);
  const [modalDelete, setModalDelete] = useState(false);

  const toggleDelete = () => setModalDelete(!modalDelete);
  
  function handleDetele() {
    del("api/repairman/" + RepairmanDelete.repairmanId, localStorage.getItem("token"))
      .then((res) => {
        if (res.status === 200 || res.status === 202) {
          // var temp;
          // temp = useList.filter((x) => x.repairmanId !== RepairmanDelete.repairmanId);
          // setUseListShow(temp);
          // setUseListShowPage(temp.slice(numberPage * 5 - 5, numberPage * 5));
          // setTotalNumberPage(Math.ceil(temp.length / 5));
        }
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        setModalConfirm(true);
      });
  }
  const closeBtn = (x) => (
    <button
      className="btn border border-danger"
      style={{ color: "#B22222" }}
      onClick={x}
    >
      X
    </button>
  );
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Manage Repairman</Card.Title>
                <Link to="/admin/create/repairman">
                  Create new Repairman
                </Link>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td><img src={editIcon} /></td>
                      <td>
                        <Media
                          src={deleteIcon}
                          onClick={() => {
                            setRepairmanDelete();
                            setModalDelete(true);
                          }}
                        />
                      </td>                   
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td><img src={editIcon} /></td>
                      <td>
                        <Media
                          src={deleteIcon}
                          onClick={() => {
                            setRepairmanDelete();
                            setModalDelete(true);
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td><img src={editIcon} /></td>
                      <td>
                        <Media
                          src={deleteIcon}
                          onClick={() => {
                            setRepairmanDelete();
                            setModalDelete(true);
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
      <Modal isOpen={modalDelete} toggle={toggleDelete}>
        <ModalHeader
          style={{ color: "#B22222" }}
          close={closeBtn(toggleDelete)}
          toggle={toggleDelete}
        >
          Are you sure?
        </ModalHeader>
        <ModalBody>Do you want to delete this repairman</ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              handleDetele();
              setModalDelete(false);
            }}
          >
            Delete
          </Button>{" "}
          <Button color="secondary" onClick={toggleDelete}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ManageCompany;
