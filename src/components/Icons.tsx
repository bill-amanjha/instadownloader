export interface IconSize {
  size?: number;
}

const Menu = ({ size = 24 }: IconSize) => {
  return (
    <svg
      width={size}
      height={size}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const Download = ({ size = 16 }: IconSize) => {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      aria-label="download icon"
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
    </svg>
  );
};

const Spinner = ({ size = 20 }: IconSize) => {
  return (
    <svg
      width={size}
      height={size}
      aria-hidden="true"
      role="status"
      className="inline animate-spin text-gray-200"
      viewBox="0 0 100 101"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="#1C64F2"
      />
    </svg>
  );
};

const Moon = ({ size = 20 }: IconSize) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  );
};

const Sun = ({ size = 20 }: IconSize) => {
  return (
    <svg
      width={size}
      height={size}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const Theme = ({ size = 20 }: IconSize) => {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="ic_fluent_dark_theme_24_regular"
            fill="currentColor"
            fillRule="nonzero"
          >
            <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

const Github = ({ size = 24 }: IconSize) => {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
};

const Logo = ({ size = 20 }: IconSize) => {
  return (
    <svg width={size} height={size} viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_204_1759)">
<rect width="254" height="254" fill="#F5F9FF"/>
<ellipse cx="139.487" cy="160.031" rx="29.3486" ry="76.5737" transform="rotate(-110.709 139.487 160.031)" fill="url(#paint0_radial_204_1759)"/>
<g filter="url(#filter0_d_204_1759)">
<ellipse cx="127" cy="127" rx="29.3486" ry="76.5737" transform="rotate(-110.709 127 127)" fill="url(#paint1_radial_204_1759)"/>
</g>
<g filter="url(#filter1_d_204_1759)">
<ellipse cx="114.513" cy="93.9688" rx="29.3486" ry="76.5737" transform="rotate(-110.709 114.513 93.9688)" fill="url(#paint2_radial_204_1759)"/>
</g>
</g>
<defs>
<filter id="filter0_d_204_1759" x="7.61646" y="78.4404" width="238.767" height="171.119" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="37"/>
<feGaussianBlur stdDeviation="23.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_204_1759"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_204_1759" result="shape"/>
</filter>
<filter id="filter1_d_204_1759" x="-4.87085" y="45.4092" width="238.767" height="171.119" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="37"/>
<feGaussianBlur stdDeviation="23.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_204_1759"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_204_1759" result="shape"/>
</filter>
<radialGradient id="paint0_radial_204_1759" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(139.487 75.4836) rotate(90) scale(161.121 46.2671)">
<stop stop-color="#660A41"/>
<stop offset="0.208321" stop-color="#9E32A0"/>
<stop offset="0.416663" stop-color="#DB64EE"/>
<stop offset="0.651048" stop-color="#E292FE"/>
<stop offset="0.812513" stop-color="#F7C4FF"/>
<stop offset="1" stop-color="#F9F2FF"/>
</radialGradient>
<radialGradient id="paint1_radial_204_1759" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(127 35.956) rotate(90) scale(167.618 56.334)">
<stop stop-color="#310202"/>
<stop offset="0.208321" stop-color="#A03232"/>
<stop offset="0.416663" stop-color="#EE7D64"/>
<stop offset="0.651048" stop-color="#FED392"/>
<stop offset="0.812513" stop-color="#FFE0C4"/>
<stop offset="1" stop-color="#FCFFF2"/>
</radialGradient>
<radialGradient id="paint2_radial_204_1759" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(114.513 10.8877) rotate(90) scale(159.655 53.6577)">
<stop stop-color="#020231"/>
<stop offset="0.208321" stop-color="#3237A0"/>
<stop offset="0.416663" stop-color="#646CEE"/>
<stop offset="0.651048" stop-color="#92BCFE"/>
<stop offset="0.812513" stop-color="#C4E5FF"/>
<stop offset="1" stop-color="#F2FCFF"/>
</radialGradient>
<clipPath id="clip0_204_1759">
<rect width="254" height="254" rx="66" fill="white"/>
</clipPath>
</defs>
</svg>

  );
};

export const Icons = {
  logo: Logo,
  menu: Menu,
  download: Download,
  loading: Spinner,
  darkMode: Moon,
  lightMode: Sun,
  themeMode: Theme,
  github: Github,
};
