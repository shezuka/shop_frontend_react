import React from "react";

type HomeSectionTitlePropsType = {
  children: React.ReactNode;
};

function Line() {
  return <div className="flex-1 bg-primary-600 min-h-1 rounded-2xl" />;
}

function HomeSectionTitle(props: HomeSectionTitlePropsType) {
  return (
    <div className="flex flex-row items-center mb-4">
      <Line />
      <div className="font-bold mx-4 cursor-default select-none">
        {props.children}
      </div>
      <Line />
    </div>
  );
}

export default HomeSectionTitle;
