"use client";

import { Icon } from "../Icon";

const VideoPlayBtn = () => {
  return (
    <button
      aria-label="Play video"
      onClick={() =>
        window.open("https://www.youtube.com/watch?v=JkCltZm1kb4", "_blank")
      }
      className="flex items-center justify-center shrink-0 w-[96px] h-[96px] rounded-full border-[1px] border-solid border-[#E8E8E8] cursor-pointer transition-all group"
    >
      <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full border-[1px] border-solid border-[#E8E8E8] group-hover:bg-[var(--secondary-text-color)]">
        <Icon
          name="icon-play"
          width={28}
          height={25}
          className="text-[var(--secondary-text-color)] group-hover:text-[var(--primary-text-color)]"
        />
      </div>
    </button>
  );
};

export default VideoPlayBtn;
