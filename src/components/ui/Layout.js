import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header/>
        <main>
          <Row className="h-100">
            <Col sm={2} className="o_tbdr">
              <Aside/>
            </Col>
            <Col sm={10} className="o_tbdr">
              <Outlet />
            </Col>
          </Row>
        </main>
        <Footer/>
      </>
    );
  }
}
