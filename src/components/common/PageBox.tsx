import type { ReactNode } from "react";

const PageBox = (props: { children: ReactNode; classes?: string }) => {
  const { children, classes } = props;

  return (
    <div
      className={`relative flex flex-col justify-start items-start w-screen max-w-full p-0 m-0 mt-20 overflow-hidden transition duration-300 ease-in-out ${classes}`}
    >
      {children}
    </div>
  );
};

export default PageBox;