export function withAuth(Component) {
  return function WithAuth(props) {
    const isLogin = false;

    if (!isLogin) {
      return <div>Anda Belum Login</div>;
    }

    return <Component {...props} />;
  };
}
