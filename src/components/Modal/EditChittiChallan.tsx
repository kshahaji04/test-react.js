import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const EditChittiChallan = ({ show, toHide, modalData }: any) => {
  console.log('modalData', modalData);
  return (
    <>
      <Modal show={show} onHide={toHide}>
        <Modal.Header closeButton>
          <Modal.Title className="bold"></Modal.Title>
        </Modal.Header>

        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
};

export default EditChittiChallan;
