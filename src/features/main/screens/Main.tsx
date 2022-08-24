import {
  Bold,
  Button,
  Center,
  Italic,
  Show,
  Text,
  useMyStyle,
} from "@akalli/components";
import { useDict } from "@akalli/navigation";

export const Main = () => {
  const { dict, setLang, lang } = useDict("main");
  const changeLangButtonStyle = useMyStyle(styles.changeLangButton(lang), [
    lang,
  ]);

  const handleLanguageChange = () => {
    if (lang === "en") {
      setLang("pt");
    } else {
      setLang("en");
    }
  };

  return (
    <Center _style="height: 100%;">
      <Bold>{dict.WELCOME}</Bold>
      <Italic>Edit me at './features/main/screens/Main.tsx'</Italic>
      <Text _style={styles.descriptionText}>
        Find more about create-akalli-app on our docs or channel.
      </Text>
      <Button _style={changeLangButtonStyle} onPress={handleLanguageChange}>
        <Text _style={styles.changeLangButtonText}>{dict.CHANGE_LANGUAGE}</Text>
      </Button>
      <Show
        _condition={lang === "en"}
        _fallback={() => <Text>Eu estou aqui porque estamos em português</Text>}
      >
        <Text testID="dti-conditional-text">
          I am shown because we are speaking in english.
        </Text>
      </Show>
    </Center>
  );
};

const styles = {
  descriptionText: `
    margin : 30px;
  `,
  changeLangButton: (lang: string) => `
    margin-bottom : 30px;
    background-color: ${lang === "en" ? "orange" : "purple"};
  `,
  changeLangButtonText: `
    color : white;
  `,
};
