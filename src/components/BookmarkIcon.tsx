import type { JSX } from "react";

type BookmarkIconProps = {
  circleStyles?: string;
  markStyles?: string;
};

const BookmarkIcon = ({
  circleStyles = "fill-[#2F2F2F] group-hover:fill-[hsla(0,0%,18%,0.7)]",
  markStyles = "fill-[#B1B1B1]",
}: BookmarkIconProps): JSX.Element => (
  <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
    <circle
      className={`${circleStyles} transition-colors duration-200`}
      cx="28"
      cy="28"
      r="28"
    />
    <path className={`${markStyles}`} d="M23 19v18l5-5.058L33 37V19z" />
  </svg>
);

export default BookmarkIcon;
