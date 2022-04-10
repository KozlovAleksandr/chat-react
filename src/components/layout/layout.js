import styles from "./layout.module.css";

export function Layout({ contactsBlock, chatBlock }) {
  return (
    <div className={styles.content}>
      <div className={styles.contactsBlock}>{contactsBlock}</div>
      <div className={styles.chatBlock}>{chatBlock}</div>
    </div>
  );
}
