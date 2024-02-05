import { format } from 'date-fns';
import React from 'react';
import CustomSVGIcon from '../../utils/getSVG';

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center min-h-[70px] mt-10 text-sm font-mono">
      <div className="flex w-full flex-col md:flex-row items-center -tracking-widest text-xs justify-center px-5">
        <a
          className="flex items-center gap-x-3"
          href="https://github.com/natnaelawel/my-portfolio"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            Designed &amp; Built by Nathaniel Hussein ©️{' '}
            {format(new Date(), 'yyyy')}
          </div>
          <div className="github-stats flex items-center gap-x-2 ">
            <span>
              <CustomSVGIcon name="star" className="!w-4 !h-4" />
            </span>
            {/* <span>5,701</span> */}
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
