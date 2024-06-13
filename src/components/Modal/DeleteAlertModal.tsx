import { Button, Modal } from "react-bootstrap"


const DeleteAlertModal = ({ isModalOpen, setIsModalOpen, handleDeleteBtn }: any) => {
    const handleClose = () => {
        setIsModalOpen(false);
    };
    return (
        <Modal show={isModalOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to proceed with deletion?</Modal.Body>
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