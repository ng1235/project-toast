import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (
        <Toast
          message={toast.message}
          variant={toast.variant}
          id={toast.id}
          key={index}
        />
      ))}
    </ol>
  );
}

export default ToastShelf;
