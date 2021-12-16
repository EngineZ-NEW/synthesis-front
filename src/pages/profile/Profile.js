/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";
import "./profile.css";

function Profile() {
    return (
        <>
            <div className="content">
                <div className="row">
                    <div className="col-4">
                        <div className="card-profile">
                            <div className="card-user">
                                <div className="image">
                                    <img
                                        alt="..."
                                        src={require("../../assets/images/back_photo.jpg").default}
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="author">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="avatar border-gray"
                                                src={require("../../assets/images/nazar.jpg").default}
                                            />
                                            <h5 className="title">Nazar Dzura</h5>
                                        </a>
                                        <p className="description">@nazardzura</p>
                                    </div>
                                    <p className="description text-center">
                                        "I like the way you work it <br />
                                        No diggity <br />I wanna bag it up"
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <hr />
                                    <div className="button-container">
                                        <div className="row">
                                            <div className="ml-auto col-3 col-md-6 col-lg-3">
                                                <h5>
                                                    12 <br />
                                                    <small>Files</small>
                                                </h5>
                                            </div>
                                            <div className="ml-auto col-4 col-md-6 col-lg-3">
                                                <h5>
                                                    2GB <br />
                                                    <small>Used</small>
                                                </h5>
                                            </div>
                                            <div className="ml-auto col-lg-3">
                                                <h5>
                                                    24,6$ <br />
                                                    <small>Spent</small>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-profile">
                            <div className="card-header">
                                <div className="CardTitle">
                                    <h4>Team Members</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled team-members">
                                    <li>
                                        <div className="row">
                                            <Col md="2" xs="2">
                                                <div className="avatar">
                                                    <img
                                                        alt="..."
                                                        className="img-circle img-no-padding img-responsive"
                                                        src={require("../../assets/images/teodor.jpg").default}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="7" xs="7">
                                                Teodor Hrabovenskiy <br />
                                                <span className="text-muted">
                                                    <small>Offline</small>
                                                </span>
                                            </Col>
                                            <Col className="text-right" md="3" xs="3">
                                                <Button
                                                    className="btn-round btn-icon"
                                                    color="success"
                                                    outline
                                                    size="sm"
                                                >
                                                    <i className="fa fa-envelope" />
                                                </Button>
                                            </Col>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <Col md="2" xs="2">
                                                <div className="avatar">
                                                    <img
                                                        alt="..."
                                                        className="img-circle img-no-padding img-responsive"
                                                        src={require("../../assets/images/arsen.jpg").default}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="7" xs="7">
                                                Arsen Oliinyk <br />
                                                <span className="text-success">
                                                    <small>Available</small>
                                                </span>
                                            </Col>
                                            <Col className="text-right" md="3" xs="3">
                                                <Button
                                                    className="btn-round btn-icon"
                                                    color="success"
                                                    outline
                                                    size="sm"
                                                >
                                                    <i className="fa fa-envelope" />
                                                </Button>
                                            </Col>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <Col md="2" xs="2">
                                                <div className="avatar">
                                                    <img
                                                        alt="..."
                                                        className="img-circle img-no-padding img-responsive"
                                                        src={require("../../assets/images/lesyk.jpg").default}
                                                    />
                                                </div>
                                            </Col>
                                            <Col className="col-ms-7" xs="7">
                                                Oleksandr Khomiakov <br />
                                                <span className="text-danger">
                                                    <small>Busy</small>
                                                </span>
                                            </Col>
                                            <Col className="text-right" md="3" xs="3">
                                                <Button
                                                    className="btn-round btn-icon"
                                                    color="success"
                                                    outline
                                                    size="sm"
                                                >
                                                    <i className="fa fa-envelope" />
                                                </Button>
                                            </Col>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <Col md="2" xs="2">
                                                <div className="avatar">
                                                    <img
                                                        alt="..."
                                                        className="img-circle img-no-padding img-responsive"
                                                        src={require("../../assets/images/yurii.jpg").default}
                                                    />
                                                </div>
                                            </Col>
                                            <Col className="col-ms-7" xs="7">
                                                Yurii Gryshkin <br />
                                                <span className="text-muted">
                                                    <small>Offline</small>
                                                </span>
                                            </Col>
                                            <Col className="text-right" md="3" xs="3">
                                                <Button
                                                    className="btn-round btn-icon"
                                                    color="success"
                                                    outline
                                                    size="sm"
                                                >
                                                    <i className="fa fa-envelope" />
                                                </Button>
                                            </Col>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card-profile">
                            <div className="card-user">
                                <div className="card-header">
                                    <div className="card-title">
                                        <h5>Edit Profile</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form">
                                        <div className="row">
                                            <Col className="pr-1 col-5">
                                                <div className="form-group">
                                                    <label>Company (disabled)</label>
                                                    <Input
                                                        defaultValue="EngineZ Inc."
                                                        disabled
                                                        placeholder="Company"
                                                        type="text"
                                                    />
                                                </div>
                                            </Col>
                                            <Col className="px-1 col-3">
                                                <FormGroup>
                                                    <label>Username</label>
                                                    <Input
                                                        defaultValue="nazardzura123"
                                                        placeholder="Username"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1 col-4">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">
                                                        Email address
                                                    </label>
                                                    <Input placeholder="Email" type="email" />
                                                </FormGroup>
                                            </Col>
                                        </div>
                                        <div className="row">
                                            <Col className="pr-1 col-6">
                                                <FormGroup>
                                                    <label>First Name</label>
                                                    <Input
                                                        defaultValue="Nazar"
                                                        placeholder="Company"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1 col-6">
                                                <FormGroup>
                                                    <label>Last Name</label>
                                                    <Input
                                                        defaultValue="Dzura"
                                                        placeholder="Last Name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </div>
                                        <div className="row">
                                            <Col className="col-12">
                                                <FormGroup>
                                                    <label>Address</label>
                                                    <Input
                                                        defaultValue="Zhovkva, Ukraine"
                                                        placeholder="Home Address"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </div>
                                        <div className="row">
                                            <Col className="pr-1 col-4">
                                                <FormGroup>
                                                    <label>City</label>
                                                    <Input
                                                        defaultValue="Zhovkva"
                                                        placeholder="City"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-1 col-4">
                                                <FormGroup>
                                                    <label>Country</label>
                                                    <Input
                                                        defaultValue="Ukraine"
                                                        placeholder="Country"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1 col-4">
                                                <FormGroup>
                                                    <label>Postal Code</label>
                                                    <Input placeholder="ZIP Code" type="number" />
                                                </FormGroup>
                                            </Col>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>About Me</label>
                                                    <Input
                                                        type="textarea"
                                                        defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-button ">
                                            <div className="update ml-auto mr-auto">
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Update Profile
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
