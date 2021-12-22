import React, { useState, useEffect } from "react";
import { Modal, Image } from "react-bootstrap";
import "./ModalPage.css";

const ModalPage = (props) => {
  let numbers = Array.from(Array(15).keys());

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.data.strDrink}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            key={props.data.idDrink}
            src={`${props.data.strDrinkThumb}/preview`}
            fluid
          />
          <table className="table">
            <thead>
              <tr>
                <th>No. </th>
                <th className="ms-3">Ingredient</th>
              </tr>
            </thead>
            <tbody>
              {numbers.map((number) =>
                `${props.data["strIngredient" + String(number + 1)]}` !==
                null ? (
                  <tr key={number + 1}>
                    <td>{number + 1}</td>
                    <td className="ms-3">{`${
                      props.data["strIngredient" + String(number + 1)]
                    }`}</td>
                  </tr>
                ) : (
                  ""
                )
              )}
            </tbody>
          </table>
          <p className="pt-3">{props.data.strInstructions}</p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPage;
