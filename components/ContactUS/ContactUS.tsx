import React from 'react';
import CustomSVGIcon from '../../utils/getSVG';

type Props = {};

const ContactUS = (props: Props) => {
  return (
    <section
      id="contact"
      className="w-11/12 lg:w-2/3 px-5 my-10 py-5"
      data-sr-id="15"
      style={{
        visibility: 'visible',
        opacity: 1,
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
        transition:
          'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
      }}
    >
      <div className="flex flex-col items-center gap-y-2">
        <h2 className="numbered-heading font-mono text-sm text-accent">
          What&apos;s Next?
        </h2>
        <h2 className="title text-4xl font-bold text-lightest_slate my-5">
          Get In Touch
        </h2>
        <p className="text-center">
          Got a question or proposal, or just want to say hello? <br />{' '}
          <span className="text-xl text-light_slate font-semibold">
            Go ahead.{' '}
          </span>
        </p>
        <div className="flex gap-x-5 flex-col sm:flex-row gap-y-5 my-5 md:my-10 items-center text-center justify-center">
          <a
            className="email-link h-full text-xs lg:text-sm font-mono text-accent bg-transparent flex items-center gap-x-4 border border-accent rounded-sm  px-4 sm:px-6  hover:scale-110 transition duration-500 ease-in-out  py-2 lg:py-4 leading-4 cursor-pointer hover:bg-accent/5"
            href="mailto:yohanshailu@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <CustomSVGIcon
                className="!w-4 !h-4 lg:!w-6 lg:!h-6"
                name="email"
              />
            </span>
            <span>yohanshailu@gmail.com</span>
          </a>
          <a
            className="email-link h-full font-mono text-xs lg:text-sm text-accent bg-transparent flex items-center gap-x-4 border border-accent rounded-sm px-4 sm:px-6 hover:scale-110 transition duration-500 ease-in-out py-2 lg:py-4 leading-4 cursor-pointer hover:bg-accent/5"
            href="tel:+251929260704"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <CustomSVGIcon
                className="!w-4 !h-4 lg:!w-6 lg:!h-6"
                name="phone"
              />
            </span>
            <span>+251 929 250 704</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
