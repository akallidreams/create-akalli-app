import { Bold, Center, Italic, Show, Text } from "@akalli/components";
import { AkIcons } from "@akalli/icons";
import { useAppDispatch } from "@config/store";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { authSlice } from "../../auth/helpers/redux";

export const Main = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  useEffect((): void => {
    dispatch(authSlice.actions.login());
  }, []);

  return (
    <Center _style="height: 100%;">
      <Bold>Welcome to Create akalli app</Bold>
      <Italic>Edit me at './features/main/screens/Main.tsx'</Italic>
      <Text _style={styles.descriptionText}>
        Find more about create-akalli-app on our docs or channel.
      </Text>
      <Show _condition={isLoggedIn}>
        <Text>I am shown because isLoggedIn is true</Text>
      </Show>
    </Center>
  );
};

const styles = {
  descriptionText: `
    margin : 30px;
  `,
};
