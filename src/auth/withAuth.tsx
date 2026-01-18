// this is a HOC

const withAuth = (WrappedComponent: any) => {
  // returns the whole component (basic functionality of HOC's)
  return (props: any) => {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please login first</h2>; // returns if this should be rendered based on condition
    }

    // IMPORTANT LINE 👇
    return <WrappedComponent {...props} />; // returns if this should be rendered based on condition
  };
};

export default withAuth;
