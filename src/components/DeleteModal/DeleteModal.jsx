import { useState } from "react" ; 
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import '../DeleteModal/DeleteModal.css';


//Bootstrap modal
function DeleteModal( props ) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <DeleteIcon variant="primary" onClick={handleShow}>
        </DeleteIcon>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this image?</Modal.Body>
          <Modal.Footer>
            <Button className="dontDelete" onClick={handleClose}>
              No
            </Button>
            <Button className="deleteConfirm" onClick={props.deleteImageFunction}>
              Delete Image
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default DeleteModal;