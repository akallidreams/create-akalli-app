import { MyThemeProvider } from "@akalli/components";
import { DictProvider } from "@akalli/navigation";
import { ReactNode } from "react";
import { mainDict } from "src/features/main";
import { theme } from "./theme";

export const AkalliProvider = ({
  children,
  test,
}: {
  children: ReactNode;
  test?: boolean;
}) => {
  return test ? (
    <DictProvider dicts={{ main: mainDict }}>
      <MyThemeProvider theme={theme}>{children}</MyThemeProvider>
    </DictProvider>
  ) : (
    <MyThemeProvider theme={theme}>{children}</MyThemeProvider>
  );
};
