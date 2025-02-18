import { AppWindow } from "lucide-react";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="flex flex-col min-h-[70vh] w-full; justify-center items-center gap-12">
        <AppWindow className="h-24 w-24"/>
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-3xl font-semibold text-primary">
          Nothing to see here
        </p>
        <p className="text-base font-normal text-secondary">
          So here is a random image generated by
          <span className="text-vivid">Creative AI</span>
        </p>
      </div>
    </div>
  );
};
export default NotFound;
