import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { userName, setUserName } = useContext(UserContext);
  return (
    <>
      <p>Profile Works!</p>
      <p>
        Hello <b>{userName}</b>
      </p>
      <button onClick={() => setUserName("Atul")}>Change name</button>
    </>
  );
};

export default Profile;
