import React from "react";
import style from "./Modal.module.scss";

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? {display: 'block'} : {display: 'none'};

  return (
    <div className={style.modal} style={showHideClassName}  onClick={handleClose}>
      <section className={style.modalmain}>
          <h2>Modal</h2>

        <p>zxcv</p>
        <p className={style.footermodal}>
        <button type="button" id={style.close} onClick={handleClose}>
          Close
        </button>
        </p>

      </section>
    </div>
  );
};

export default Modal;



// text-decoration-color: red;
