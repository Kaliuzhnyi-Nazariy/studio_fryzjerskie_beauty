import { useKeenSlider } from "keen-slider/react";
import workers from "../../../studio/workers.json";
import Card from "../Card";
import { useTranslation } from "react-i18next";

const Workers = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
    },
    slides: { perView: 1, spacing: 16 },
  });

  return (
    <div ref={ref} className="keen-slider mt-5 max-w-220 md:w-4/5! md:mx-auto">
      {workers.map((w) => {
        return (
          <Card
            key={w.id}
            className="keen-slider__slide flex flex-col  gap-3 overflow-hidden min-w-0 h-full p-6 text-center items-center"
          >
            <h3 className="text-lg font-bold">{w.name}</h3>
            <h4 className="font-semibold mt-1">
              {w.role[language as keyof typeof w.role]}
            </h4>

            <ul className="flex flex-col gap-2 w-full my-2 items-center">
              {w.specialties[language as keyof typeof w.specialties].map(
                (s) => {
                  return (
                    <li
                      key={s}
                      className="px-2 py-1 rounded-full bg-white/30 text-xs shrink-0"
                    >
                      {s}
                    </li>
                  );
                },
              )}
            </ul>
            <p className="text-xs mt-2">
              {w.availability[language as keyof typeof w.availability]}
            </p>
          </Card>
        );
      })}
    </div>
  );
};

export default Workers;
