import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (
        <Toast
          message={toast.message}
          variant={toast.variant}
          id={toast.id}
          closeToast={setToasts}
          allToasts={toasts}
          setToasts={setToasts}
          key={index}
        />
      ))}
    </ol>
  );
}

export default ToastShelf;
