import { useTranslation } from "react-i18next";
import ComponentLayout from "../../layouts/ComponentLayout";
import services from "../../../studio/services.json";
import { Trimmer } from "../../svg/Trimmer";
import { Scissors } from "../../svg/Scissors";
import { Coloring } from "../../svg/Coloring";
import { WashingHead } from "../../svg/WashingHead";
import Card from "../Card";

const Services = () => {
  const { t } = useTranslation();

  const iconStyles = "size-full fill-current mb-4";

  const listStyles =
    "grid gap-5 mt-5 md:grid-cols-3 lg:grid-cols-[repeat(3,260px)] lg:gap-10 mx-auto grid-flow-row lg:justify-self-center ";

  const titleStyles = "mt-5 md:mt-10 font-bold text-xl";

  const customIcon: Record<
    string,
    React.ComponentType<{ className: string }>
  > = {
    simple_haircut: Trimmer,
    standard_haircut: Scissors,
    hair_coloring: Coloring,
    hair_wash: WashingHead,
  };

  return (
    <ComponentLayout
      id="services"
      title={t("services")}
      article={t("service_article")}
    >
      <div className="xl:w-4/5 mx-auto">
        <h3 className={titleStyles}>{t("main_services")}</h3>
        <ul className={listStyles}>
          {services.main.map((s) => {
            const IconComponent = customIcon[s.id];
            return (
              <li key={s.id}>
                <Card>
                  {IconComponent && <IconComponent className={iconStyles} />}
                  <h4 className="font-bold text-lg">{t(s.name_key)}</h4>
                  <p>
                    {t("price")}: {s.price}
                    {s.currency}
                  </p>
                </Card>
              </li>
            );
          })}
        </ul>
        <h3 className={titleStyles}>{t("extra_services")}</h3>
        <ul className={listStyles}>
          {services.extra.map((s) => {
            const IconComponent = customIcon[s.id];
            return (
              <li
                key={s.id}
                className="w-full max-w-65 p-6 rounded-lg bg-bg text-text border border-text/30 shadow-[3px_3px_0px_0px_theme(colors.text/30%)] text-center flex flex-col justify-center transition-all"
              >
                <div className="size-39.5 mx-auto mb-4">
                  {IconComponent && <IconComponent className={iconStyles} />}
                </div>
                <h4 className="font-bold text-lg">{t(s.name_key)}</h4>
                <p>
                  {t("price")}: {s.price}
                  {s.currency}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </ComponentLayout>
  );
};

export default Services;
