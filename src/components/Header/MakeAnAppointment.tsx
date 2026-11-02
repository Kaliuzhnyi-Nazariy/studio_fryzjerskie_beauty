import { useTranslation } from "react-i18next";

const MakeAnAppointment = () => {
  const { t } = useTranslation();
  return (
    <a
      href="tel:+48508141412"
      className="block bg-text text-bg px-6 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-sm hover:opacity-90 active:scale-95 transition-all text-center whitespace-nowrap"
      aria-label={`${t("make_an_appointment")}. ${t(
        "appointment-aria",
      )} 508 141 412`}
    >
      {t("make_an_appointment")}
    </a>
  );
};

export default MakeAnAppointment;
