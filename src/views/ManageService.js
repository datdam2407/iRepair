import React, { useState, useEffect } from "react";
import data from "./mock_data.json";
import ReadOnlyRows from "../components/ReadOnlyRows";

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
import { Link } from "react-router-dom";

import deleteIcon from "assets/img/remove.png";
import editIcon from "assets/img/edit.png";
import ReadOnlyRows from "../components/ReadOnlyRows";

function ManageService() {
    // const [ServiceDelete, setServiceDelete] = useState(null);
    // const [modalDelete, setServiceModalDelete] = useState(false);
    // const [ServiceEdit, setServiceEdit] = useState(null);
    const [modalEdit, setServiceModalEdit] = useState(data);


    // const toggleDelete = () => setServiceModalDelete(!modalDelete);
    // const toggleEdit = () => setServiceModalEdit(!modalEdit);


    function handleServiceDetele() {
        del("api/service/" + ServiceDelete.serviceId, localStorage.getItem("token"))
            .then((res) => {
                if (res.status === 200 || res.status === 202) {
                    // var temp;
                    // temp = useList.filter((x) => x.repairmanId !== ServiceDelete.repairmanId);
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
                        <Card className="card-plain table-plain-bg">
                            <Card.Header>
                                <Card.Title as="h4">Manage Service </Card.Title>
                                <Link to="/admin/create/service">
                                    Create new Service
                                </Link>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead>
                                        <tr>
                                            <th className="border-0">ID</th>
                                            <th className="border-0">Image</th>
                                            <th className="border-0">Service Name</th>
                                            <th className="border-0">Category</th>
                                            <th className="border-0">Description</th>
                                            <th className="border-0">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {modalEdit.map((contact)=> (
                                        <ReadOnlyRows contact = {contact}/>
                                     ))}
                      
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

            {/* <Modal isOpen={modalEdit} toggle={toggleEdit}>
                <ModalHeader
                    style={{ color: "#B22222" }}
                    close={closeBtn(toggleEdit)}
                    toggle={toggleEdit}
                >
                    Are you sure?
                </ModalHeader>
                <ModalBody>Do you want to edit this service</ModalBody>
                <ModalFooter>
                    <Button
                        color="danger"
                        onClick={() => {
                            // handleServiceDetele();
                            setServiceModalEdit(false);
                        }}
                    >
                        Edit
                    </Button>{" "}
                    <Button color="secondary" onClick={toggleEdit}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal> */}

            {/* <Modal isOpen={modalDelete} toggle={toggleDelete}>
                <ModalHeader
                    style={{ color: "#B22222" }}
                    close={closeBtn(toggleDelete)}
                    toggle={toggleDelete}
                >
                    Are you sure?
                </ModalHeader>
                <ModalBody>Do you want to delete this service</ModalBody>
                <ModalFooter>
                    <Button
                        color="danger"
                        onClick={() => {
                            handleServiceDetele();
                            setServiceModalDelete(false);
                        }}
                    >
                        Delete
                    </Button>{" "}
                    <Button color="secondary" onClick={toggleDelete}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal> */}
        </>
    );
}

export default ManageService;
