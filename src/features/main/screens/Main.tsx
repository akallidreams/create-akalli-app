import { Center, Truncated } from "@akalli/components";
import { useAppDispatch } from "@config/store";
import { useEffect } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { authSlice } from "../../auth/helpers/redux";

export const Main = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  useEffect((): void => {
    dispatch(authSlice.actions.login());
  }, []);

  return (
    <Center height="100%">
      <Text testID="dti-title">
        {isLoggedIn ? "Logged in" : "Not logged in"}
      </Text>
    </Center>
  );
};
