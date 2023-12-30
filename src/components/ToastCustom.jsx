import Toast from 'react-bootstrap/Toast';

const ToastCustom = ({ showCustom, onClose, tituloToast, bodyToast, background }) => {

  return (
    <>
      <Toast bg={background} onClose={onClose} show={showCustom} delay={3000} autohide style={{ position: "fixed", top: 80, right: 20 }}>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">{tituloToast}</strong>
          <small>justo ahora</small>
        </Toast.Header>
        <Toast.Body className={background === 'secondary' && 'text-white'}>
          {bodyToast}
        </Toast.Body>
      </Toast>
    </>
  )
}

export default ToastCustom