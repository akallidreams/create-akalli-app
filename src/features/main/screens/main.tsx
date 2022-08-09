import { Center, Text } from "@akalli/components";
import { useAppDispatch } from "@config/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { authSlice } from "../../auth/helpers/redux";

export const Main = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  useEffect((): void => {
    dispatch(authSlice.actions.login());
  }, []);

  console.log(isLoggedIn);

  return (
    <Center height="100%">
      <Text>{isLoggedIn ? "Logged in" : "Not logged in"}</Text>
    </Center>
  );
};
