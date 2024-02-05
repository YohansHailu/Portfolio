import clsx from 'clsx';
type Props = {
  className: string;
  name: string;
};

const CustomSVGIcon = (props: Props) => {
  switch (props.name) {
    case 'github': {
      return (
        <svg
          className={clsx(
            'feather feather-github w-6 h-6 hover:text-accent hover:scale-105 transition-all duration-200',
            props.className
          )}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>GitHub</title>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    }
    case 'linkedin': {
      return (
        <svg
          className={clsx(
            'feather feather-linkedin w-6 h-6 hover:text-accent hover:scale-105 transition-all duration-200',

            props.className
          )}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>LinkedIn</title>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    }
    case 'twitter': {
      return (
        <svg
          className={clsx(
            'feather feather-twitter w-6 h-6 hover:text-accent hover:scale-105 transition-all duration-200',

            props.className
          )}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>Twitter</title>
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      );
    }
    case 'instagram': {
      return (
        <svg
          className={clsx(
            'feather feather-instagram w-6 h-6 hover:text-accent hover:scale-105 transition-all duration-200',

            props.className
          )}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>Instagram</title>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    }
    case 'medium': {
      return (
        <svg
          className={clsx(
            'feather feather-medium w-6 h-6 hover:text-accent hover:scale-105 transition-all duration-200',
            props.className
          )}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <path
                d="m288.796 256c0 80.296-64.649 145.389-144.398 145.389s-144.398-65.093-144.398-145.389 64.649-145.389 144.398-145.389c79.748 0 144.398 65.093 144.398 145.389"
                fill="currentColor"
                className=""
              ></path>
              <path
                d="m447.204 256c0 75.585-32.325 136.858-72.199 136.858s-72.199-61.273-72.199-136.858 32.325-136.858 72.199-136.858c39.875 0 72.199 61.273 72.199 136.858"
                fill="currentColor"
                className=""
              ></path>
              <path
                d="m512 256c0 67.721-11.369 122.619-25.393 122.619-14.025 0-25.392-54.898-25.392-122.619s11.367-122.619 25.392-122.619c14.024 0 25.393 54.898 25.393 122.619"
                fill="currentColor"
                className=""
              ></path>
            </g>
          </g>
        </svg>
      );
    }
    case 'external-link': {
      return (
        <svg
          className={clsx(
            'feather feather-external-link w-6 h-6 hover:text-accent hover:scale-105 transition-all duration-200',
            props.className
          )}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>External Link</title>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      );
    }
    case 'folder': {
      return (
        <svg
          className={clsx(
            'feather feather-folder w-6 h-6 hover:text-accent hover:scale-105 transition-all duration-200',
            props.className
          )}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>Folder</title>
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
      );
    }
    case 'phone': {
      return (
        <svg
          className={clsx(
            'feather feather-folder w-6 h-6 hover:text-accent hover:scale-105 transition-all duration-200',
            props.className
          )}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 512.001 512.001"
        >
          <g>
            <path
              d="m497.197 386.254-78.129-69.785c-16.168-14.439-40.205-15.116-57.157-1.608-8.411 6.702-19.015 15.169-31.789 25.403-9.649 7.729-22.607 8.411-33.013 1.734-28.762-18.454-52.056-36.737-71.212-55.894-19.158-19.158-37.441-42.452-55.893-71.212-6.677-10.406-5.996-23.364 1.735-33.014 10.233-12.774 18.7-23.379 25.402-31.789 13.506-16.952 12.831-40.99-1.607-57.156l-69.786-78.131c-8.42-9.429-19.552-14.544-32.191-14.792-12.629-.273-23.964 4.425-32.75 13.512l-38.612 39.944v.001c-29.327 30.338-29.606 79.487-.808 142.132 24.624 53.563 69.037 113.916 125.06 169.94 56.024 56.026 116.379 100.443 169.945 125.07 31.034 14.268 58.753 21.398 82.518 21.398 24.209 0 44.313-7.402 59.624-22.202l39.943-38.612c9.09-8.785 13.762-20.109 13.513-32.748-.248-12.639-5.364-23.771-14.793-32.191zm-9.839 53.435-39.944 38.612c-31.832 30.769-85.186 15.77-124.338-2.229-51.888-23.854-110.598-67.128-165.315-121.847-54.716-54.716-97.984-113.425-121.836-165.31-17.998-39.149-32.993-92.499-2.226-124.328l38.612-39.943c5.695-5.893 12.733-8.768 20.93-8.637 8.193.161 15.114 3.342 20.573 9.454l69.786 78.131c9.227 10.331 9.659 25.693 1.027 36.527-6.694 8.402-15.153 18.995-25.375 31.756-12.096 15.098-13.162 35.375-2.715 51.658 19.079 29.737 38.066 53.905 58.046 73.886 19.978 19.977 44.146 38.964 73.886 58.046 16.283 10.445 36.56 9.382 51.657-2.715 12.761-10.223 23.354-18.682 31.756-25.376 10.833-8.632 26.197-8.201 36.528 1.028l78.129 69.785c6.112 5.458 9.293 12.38 9.454 20.573.162 8.193-2.743 15.234-8.635 20.929zm-413.255-254.682c2.003 3.938.435 8.754-3.503 10.757-1.162.592-2.401.872-3.621.872-2.915 0-5.725-1.599-7.137-4.375-13.51-26.556-33.837-75.49-18.188-104.853 1.716-3.22 3.895-6.205 6.475-8.874 3.071-3.176 8.135-3.263 11.312-.19 3.177 3.07 3.262 8.136.191 11.312-1.567 1.62-2.829 3.347-3.858 5.278-13.052 24.49 10.729 75.134 18.329 90.073z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      );
    }
    case 'email': {
      return (
        <svg
          className={clsx(
            'feather feather-folder w-6 h-6 hover:text-accent hover:scale-105 transition-all duration-200',
            props.className
          )}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 682.66669 682.66669"
        >
          <g>
            <defs id="defs3220">
              <clipPath clipPathUnits="userSpaceOnUse" id="clipPath3230">
                <path
                  d="M 0,512 H 512 V 0 H 0 Z"
                  id="path3228"
                  fill="currentColor"
                  data-original="currentColor"
                ></path>
              </clipPath>
            </defs>
            <g
              id="g3222"
              transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"
            >
              <g id="g3224">
                <g id="g3226" clipPath="url(#clipPath3230)">
                  <g id="g3232" transform="translate(340.1367,431.7891)">
                    <path
                      d="m 0,0 -67.575,66.323 c -9.399,8.517 -23.724,8.517 -33.123,0 L -168.273,0"
                      style={{
                        strokeWidth: 15,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 10,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                      }}
                      id="path3234"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                  </g>
                  <g id="g3236" transform="translate(468.4268,305.875)">
                    <path
                      d="M 0,0 -31.724,-31.668"
                      style={{
                        strokeWidth: 15,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 10,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                      }}
                      id="path3238"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                  </g>
                  <g id="g3240" transform="translate(294.2412,131.998)">
                    <path
                      d="M 0,0 181.674,-99.835"
                      style={{
                        strokeWidth: 15,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 10,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                      }}
                      id="path3242"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                  </g>
                  <g id="g3244" transform="translate(75.2969,274.207)">
                    <path
                      d="M 0,0 -31.724,31.668"
                      style={{
                        strokeWidth: 15,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 10,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                      }}
                      id="path3246"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                  </g>
                  <g id="g3248" transform="translate(217.7583,131.998)">
                    <path
                      d="M 0,0 -181.673,-99.835"
                      style={{
                        strokeWidth: 15,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 10,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                      }}
                      id="path3250"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                  </g>
                  <g id="g3252" transform="translate(370.3311,7.5)">
                    <path
                      d="m 0,0 h 80.921 c 13.621,0 24.663,11.042 24.663,24.663 v 255.87 c 0,6.711 -2.698,13.141 -7.488,17.842 l -31.724,31.136"
                      style={{
                        strokeWidth: 15,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 10,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                      }}
                      id="path3254"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                  </g>
                  <g id="g3256" transform="translate(36.085,169.7607)">
                    <path
                      d="m 0,0 v -137.598 c 0,-13.621 11.042,-24.663 24.663,-24.663 H 301.56"
                      style={{
                        strokeWidth: 15,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 10,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                      }}
                      id="path3258"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                  </g>
                  <g id="g3260" transform="translate(75.2969,337.0107)">
                    <path
                      d="m 0,0 -31.724,-31.136 c -4.789,-4.701 -7.488,-11.131 -7.488,-17.842 v -85.585"
                      style={{
                        strokeWidth: 15,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 10,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                      }}
                      id="path3262"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                  </g>
                  <g id="g3264" transform="translate(436.7031,389)">
                    <path
                      d="m 0,0 v 17.789 c 0,13.807 -11.193,25 -25,25 h -311.406 c -13.807,0 -25,-11.193 -25,-25 v -132.582 l 142.461,-142.209 26.364,14.487 c 7.397,4.066 16.359,4.066 23.756,0 l 26.363,-14.487 L 0,-114.793 v 82.868"
                      style={{
                        strokeWidth: 15,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 10,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                      }}
                      id="path3266"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                  </g>
                  <g id="g3268" transform="translate(279.6074,306.7764)">
                    <path
                      d="m 0,0 c 0,-20.053 -12.307,-35.069 -27.04,-35.069 -14.733,0 -27.763,14.808 -27.763,34.86 0,20.053 13.753,33.413 28.487,33.413 C -11.583,33.204 0,20.052 0,0 Z"
                      style={{
                        strokeWidth: 15,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 10,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                      }}
                      id="path3270"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                  </g>
                  <g id="g3272" transform="translate(254.5786,237.7646)">
                    <path
                      d="m 0,0 c -29.305,0.811 -56.025,20.645 -63.96,50.813 -9.158,34.822 10.872,71.192 45.181,82.113 36.287,11.552 74.878,-8.863 85.842,-45.191 3.88,-14.535 1.615,-27.18 -3.525,-40.107 -2.039,-5.125 -8.762,-17.124 -23.716,-17.124 -8.164,0 -14.97,7.824 -14.925,16.836 l 0.295,59.719"
                      style={{
                        strokeWidth: 15,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 10,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                      }}
                      id="path3274"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                  </g>
                  <g id="g3276" transform="translate(321.6416,325.5)">
                    <path
                      d="M 0,0 C 3.88,-14.535 1.615,-27.181 -3.525,-40.107"
                      style={{
                        strokeWidth: 15,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 10,
                        strokeDasharray: 'none',
                        strokeOpacity: 1,
                      }}
                      id="path3278"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    }
    case 'star': {
      return (
        <svg
          className={clsx(
            'feather feather-star w-6 h-6 hover:text-accent hover:scale-105 transition-all duration-200',
            props.className
          )}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>Star</title>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      );
    }
    default: {
      return (
        <svg
          className={clsx(
            'feather feather-github  w-6 h-6 hover:text-accent hover:scale-105 transition-all duration-200',
            props.className
          )}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>GitHub</title>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    }
  }
};

export default CustomSVGIcon;
