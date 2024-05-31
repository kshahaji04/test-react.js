import { Button, Modal } from "react-bootstrap"


const DeleteAlertModal = ({ isModalOpen, setIsModalOpen, handleDeleteBtn }: any) => {

    const handleClose = () => {
        setIsModalOpen(false);
    };
    return (
        <Modal show={isModalOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Receipt</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to Delete this receipt?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleDeleteBtn}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteAlertModal