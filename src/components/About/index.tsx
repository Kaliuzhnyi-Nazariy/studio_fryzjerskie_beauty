import { useTranslation } from "react-i18next";
import ComponentLayout from "../../layouts/ComponentLayout";

const About = () => {
  const { t } = useTranslation();
  return (
    <ComponentLayout
      id="about"
      title={t("about")}
      article={t("about_article")}
      bgImage="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(https://images.pexels.com/photos/39559315/pexels-photo-39559315.jpeg)] bg-center bg-cover text-white"
    ></ComponentLayout>
  );
};

export default About;
