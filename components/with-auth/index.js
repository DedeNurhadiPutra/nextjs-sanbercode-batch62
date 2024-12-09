import styles from '../header/styles.module.css';

export function withAuth(Component) {
  return function WithAuth(props) {
    const isLogin = true;

    if (!isLogin) {
      return <div className={styles.header}>Anda Belum Login</div>;
    }

    return <Component {...props} />;
  };
}
