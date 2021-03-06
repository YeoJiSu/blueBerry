import React from "react";

interface CircularProgressProps {
  className: string;
}
const CircularProgress = ({
  className,
}: CircularProgressProps): JSX.Element => (
  <div className={`loader ${className}`}>
    <img src="/assets/loader.svg" alt="loader" style={{ height: 60 }} />
  </div>
);
export default CircularProgress;
CircularProgress.defaultProps = {
  className: "",
};
