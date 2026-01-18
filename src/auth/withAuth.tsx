// this is a HOC

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please login first</h2>;
    }

    // IMPORTANT LINE 👇
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
