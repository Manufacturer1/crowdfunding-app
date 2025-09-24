import type { JSX } from "react";

const BookmarkIcon = (): JSX.Element => (
  <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
    <circle
      className="fill-[#2F2F2F] group-hover:fill-[hsla(0,0%,18%,0.7)] transition-colors duration-200"
      cx="28"
      cy="28"
      r="28"
    />
    <path className="fill-[#B1B1B1]" d="M23 19v18l5-5.058L33 37V19z" />
  </svg>
);

export default BookmarkIcon;
