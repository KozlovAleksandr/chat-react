import styles from "./layout.module.css";

export function Layout({ chatBlock, contsctsBlock }) {
  return (
    <div className={styles.content}>
      <div className={styles.contactsBlock}>{contsctsBlock}</div>
      <div className={styles.chatBlock}>{chatBlock}</div>
    </div>
  );
}
