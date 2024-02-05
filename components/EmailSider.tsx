import React from 'react';


const EmailSideElements = () => {
  return (
    <div className="fixed w-5 lg:w-10 bottom-0 left-auto right-0 lg:right-10 z-10 text-gray-600">
      <div className="flex flex-col items-center gap-y-1 after:content-[''] after:block after:w-0.5 after:h-24 after:mx-auto after:mt-5 after:bg-light_slate text-light_slate">
        <a
          style={{
            writingMode: 'vertical-lr',
          }}
          className=" hover:text-accent hover:scale-105 cursor-pointer text-sm lg:text-base"
          href="mailto:yohanshailukasaw@gmail.com"
        >
          yohanshailukasaw@gmail.com
        </a>
      </div>
    </div>
  );
};

export default EmailSideElements;
