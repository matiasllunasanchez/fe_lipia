import classNames from "classnames";
const CustomLoader = ({ extraClasses = "" }: { extraClasses?: string }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={classNames(
          "loader ease-linear rounded-full border-8 border-t-8 h-32 w-32 border-t-top-green animate-spin",
          extraClasses
        )}
      ></div>
    </div>
  );
};

export default CustomLoader;
