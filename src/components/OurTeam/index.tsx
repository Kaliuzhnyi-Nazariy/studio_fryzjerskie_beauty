import { useTranslation } from "react-i18next";
import ComponentLayout from "../../layouts/ComponentLayout";
import Workers from "./Carousel";

const OurTeam = () => {
  const { t } = useTranslation();
  return (
    <ComponentLayout
      id="our_team"
      title={t("our_team")}
      article={t("our_team_article")}
    >
      <Workers />
    </ComponentLayout>
  );
};

export default OurTeam;
