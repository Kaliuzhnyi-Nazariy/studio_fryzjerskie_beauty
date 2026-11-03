import { useTranslation } from "react-i18next";
import ComponentLayout from "../../layouts/ComponentLayout";
import MakeAnAppointment from "../Header/MakeAnAppointment";

const Appointment = () => {
  const { t } = useTranslation();
  return (
    <ComponentLayout
      id="appointment"
      title={t("make_an_appointment")}
      article={t("appointment_article")}
      bgImage="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(https://images.pexels.com/photos/4981475/pexels-photo-4981475.jpeg)] bg-center bg-cover text-white"
    >
      <div className="mt-5 md:mt-10" aria-label={t("time_label")}>
        <p className="font-semibold">{t("appointment_hours_article")}</p>
        <ul className="mt-3">
          <li>
            <p>{t("mon_fri")} 09:00 - 17:00</p>
          </li>
          <li>
            <p>{t("saturday")} 09:00 - 14:00</p>
          </li>
        </ul>
      </div>
      <div className="mt-5 md:mt-10 md:w-60 md:mx-auto">
        <MakeAnAppointment />
      </div>
    </ComponentLayout>
  );
};

export default Appointment;
