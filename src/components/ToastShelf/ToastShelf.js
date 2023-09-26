import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import { useEscapeKey } from "../../hooks/useEscapeKey";

function ToastShelf() {
  const { dismissAllToasts } = React.useContext(ToastContext);

  useEscapeKey(dismissAllToasts);

  const { toasts } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
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
