import React from 'react';
import CustomSVGIcon from '../utils/getSVG';

type Props = {};

const SMSideElements = (props: Props) => {
  return (
    <div className="fixed w-8 lg:w-10 bottom-0 right-auto left:0 md:left:2 lg:left-10 z-10">
      <ul className="flex flex-col items-center gap-y-3 after:content-[''] after:block after:w-0.5 after:h-24 after:mx-auto after:mt-5 after:bg-light_slate text-light_slate">
        <li>
          <a
            className="w-4 h-4 fill-slate   hover:text-accent hover:scale-110 transition delay-500"
            href="https://github.com/yohanshailu"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <CustomSVGIcon className="w-4 h-4 lg:w-5 lg:h-5" name="github" />
          </a>
        </li>
        <li>
          <a
            className="text-slate w-4 h-4  fill-slate  hover:text-accent hover:scale-110 transition delay-500"
            href="https://www.linkedin.com/in/yohans-hailu/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <CustomSVGIcon className="w-4 h-4 lg:w-5 lg:h-5" name="linkedin" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SMSideElements;
