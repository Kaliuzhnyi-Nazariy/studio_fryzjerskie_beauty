import React from "react";

const ComponentLayout = ({
  id,
  children,
  title,
  article,
  bgImage = "",
  paddings = "px-5 py-10 md:px-10 md:py-20",
}: {
  id: string;
  title?: string;
  article?: string;
  children?: React.ReactNode;
  bgImage?: string;
  paddings?: string;
}) => {
  return (
    <section
      id={id}
      className={`text-center flex flex-col  ${bgImage} ${paddings}`}
    >
      {/* {(title || article) && (
        <div className="md:w-4/5 max-w-160 text-center mx-auto">
          <h2 className="uppercase font-extrabold text-2xl">{title}</h2>
          <p className="mt-3 ">{article}</p>
        </div>
      )} */}
      {(title || article) && (
        <div className="md:w-4/5 max-w-160 text-center mx-auto">
          {title && (
            <h2 className="uppercase font-extrabold text-2xl">{title}</h2>
          )}
          {article && <p className="mt-3">{article}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default ComponentLayout;
