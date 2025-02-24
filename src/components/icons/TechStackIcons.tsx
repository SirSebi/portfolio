import { SVGProps } from 'react'

interface TechIconProps extends SVGProps<SVGSVGElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

interface TechStackIconProps extends TechIconProps {
  name: string;
}

const iconInnerSizes = {
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-7 h-7',
  xl: 'w-10 h-10',
}

const iconColors = {
  react: '#61DAFB',
  typescript: '#3178C6',
  nextjs: '#FFFFFF',
  angular: '#DD0031',
  tailwindcss: '#38BDF8',
  git: '#F34F29',
  vercel: '#FFFFFF',
  docker: '#099CEC',
}

interface IconWrapperProps {
  children: React.ReactNode;
  color: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, color, size = 'md' }) => (
  <div className="relative flex items-center justify-center w-16 h-16 rounded-lg" style={{ backgroundColor: color + '15' }}>
    <div className={iconInnerSizes[size]}>
      {children}
    </div>
  </div>
)

const icons: { [key: string]: React.FC<TechIconProps> } = {
  react: ({ size, ...props }) => (
    <IconWrapper color={iconColors.react} size={size}>
      <svg viewBox="0 0 48 48" {...props}>
        <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
      </svg>
    </IconWrapper>
  ),
  typescript: ({ size, ...props }) => (
    <IconWrapper color={iconColors.typescript} size={size}>
      <svg viewBox="0 0 48 48" {...props}>
        <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
      </svg>
    </IconWrapper>
  ),
  nextjs: ({ size, ...props }) => (
    <IconWrapper color={iconColors.nextjs} size={size}>
      <svg viewBox="0,0,256,256" {...props}>
        <defs><linearGradient x1="24" y1="43.734" x2="24" y2="4.266" gradientUnits="userSpaceOnUse" id="color-1_MWiBjkuHeMVq_gr1"><stop offset="0" stopColor="#ffffff"></stop><stop offset="0.465" stopColor="#ffffff"></stop><stop offset="1" stopColor="#ffffff"></stop></linearGradient><linearGradient x1="30.512" y1="33.021" x2="30.512" y2="18.431" gradientUnits="userSpaceOnUse" id="color-2_MWiBjkuHeMVq_gr2"><stop offset="0.377" stopColor="#000000" stopOpacity="0"></stop><stop offset="0.666" stopColor="#000000" stopOpacity="0.30196"></stop><stop offset="0.988" stopColor="#000000"></stop></linearGradient><linearGradient x1="22.102" y1="21.443" x2="36.661" y2="40.529" gradientUnits="userSpaceOnUse" id="color-3_MWiBjkuHeMVq_gr3"><stop offset="0.296" stopColor="#000000"></stop><stop offset="0.521" stopColor="#ffffff" stopOpacity="0.50196"></stop><stop offset="0.838" stopColor="#000000" stopOpacity="0"></stop></linearGradient></defs><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.33333,5.33333)"><circle cx="24" cy="24" r="19.734" fill="url(#color-1_MWiBjkuHeMVq_gr1)"></circle><rect x="15.992" y="16.027" width="3.023" height="15.996" fill="#000000"></rect><rect x="29.035" y="15.957" width="2.953" height="14.59" fill="url(#color-2_MWiBjkuHeMVq_gr2)"></rect><path d="M36.781,38.094l-2.613,0.996l-18.176,-23.063h3.516z" fill="url(#color-3_MWiBjkuHeMVq_gr3)"></path></g></g>
      </svg>
    </IconWrapper>
  ),
  angular: ({ size, ...props }) => (
    <IconWrapper color={iconColors.angular} size={size}>
      <svg viewBox="0 0 48 48" {...props}>
        <linearGradient id="QzbsZZGqvt5vTzXzFrTWxa_j9DnICNnlhGk_gr1" x1="19.369" x2="32.915" y1="6.256" y2="43.472" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#dfe9f2"></stop><stop offset=".391" stopColor="#d6e0e9"></stop><stop offset="1" stopColor="#bfc8d1"></stop></linearGradient><path fill="url(#QzbsZZGqvt5vTzXzFrTWxa_j9DnICNnlhGk_gr1)" d="M22.959,2.339L5.285,8.49c-1.333,0.464-2.163,1.795-1.992,3.197l2.828,23.187	c0.117,0.963,0.693,1.809,1.545,2.273l14.85,8.072c0.897,0.487,1.98,0.485,2.875-0.005l14.952-8.195	c0.847-0.464,1.419-1.309,1.536-2.268l2.826-23.174c0.172-1.41-0.668-2.747-2.013-3.204L24.91,2.332	C24.277,2.117,23.59,2.119,22.959,2.339z"></path><linearGradient id="QzbsZZGqvt5vTzXzFrTWxb_j9DnICNnlhGk_gr2" x1="24" x2="24" y1="2.152" y2="39.957" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f44f5a"></stop><stop offset=".443" stopColor="#ee3d4a"></stop><stop offset="1" stopColor="#e52030"></stop></linearGradient><path fill="url(#QzbsZZGqvt5vTzXzFrTWxb_j9DnICNnlhGk_gr2)" d="M42.62,12.14L39.96,34	c-0.08,0.64-0.46,1.2-1.03,1.51L24.94,43c-0.3,0.16-0.62,0.23-0.94,0.23c-0.05,0-0.09-0.01-0.14-0.01c-0.27-0.01-0.54-0.08-0.8-0.22	L9.07,35.64c-0.56-0.31-0.95-0.88-1.03-1.52L5.38,12.24c-0.12-0.93,0.44-1.82,1.32-2.13l16.62-5.87c0.18-0.06,0.36-0.1,0.54-0.1	c0.05-0.01,0.09-0.01,0.14-0.01c0.22,0,0.44,0.04,0.66,0.11c1.58,0.57,6.2,2.23,16.62,5.76C42.17,10.31,42.74,11.2,42.62,12.14z"></path><path fill="#fff" d="M11.013,34h4.409L24,15.504V5.996L11.013,34z"></path><path fill="#fff" d="M18,24h6v4h-6V24z"></path><path fill="#b31523" d="M42.62,12.14L39.96,34c-0.08,0.64-0.46,1.2-1.03,1.51L24.94,43c-0.3,0.16-0.62,0.23-0.94,0.23V4.13	c0.22,0,0.44,0.04,0.66,0.11c1.58,0.57,6.2,2.23,16.62,5.76C42.17,10.31,42.74,11.2,42.62,12.14z"></path><path fill="#bfc8d1" d="M24,6v9.508l8.578,18.496h4.409L24,6z"></path><path fill="#bfc8d1" d="M24,24.004h6v4h-6V24.004z"></path><path d="M24,5.996V6l12.987,28.004h-4.409l-2.783-6H24V28h-5.795l-2.783,6h-4.409L24,5.996 M20.06,24H24v0.004h3.94L24,15.508 v-0.004L20.06,24 M25,1.467l-1.907,4.108L10.106,33.579L9.447,35h1.566h4.409h0.639l0.269-0.579L18.843,29H23l1,0.004h5.157 l2.514,5.421l0.269,0.579h0.639h4.409h1.566l-0.659-1.421L25,5.779V1.467L25,1.467z M21.626,23l2.373-5.117l2.375,5.121H25L24,23 H21.626L21.626,23z" opacity=".05"></path><path d="M24,5.996V6l12.987,28.004h-4.409l-2.783-6H24V28h-5.795l-2.783,6h-4.409L24,5.996 M20.06,24H24v0.004h3.94L24,15.508 v-0.004L20.06,24 M24.5,3.733l-0.954,2.052L10.559,33.79L10.23,34.5h0.783h4.409h0.319l0.134-0.29l2.648-5.71H23.5l0.5,0.004 h5.476l2.648,5.71l0.134,0.29h0.319h4.409h0.783l-0.329-0.71L24.5,5.89V3.733L24.5,3.733z M20.843,23.5l3.156-6.806l3.158,6.81 H24.5L24,23.5H20.843L20.843,23.5z" opacity=".07"></path>
      </svg>
    </IconWrapper>
  ),
  tailwindcss: ({ size, ...props }) => (
    <IconWrapper color={iconColors.tailwindcss} size={size}>
      <svg viewBox="0 0 48 48" {...props}>
        <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
      </svg>
    </IconWrapper>
  ),
  git: ({ size, ...props }) => (
    <IconWrapper color={iconColors.git} size={size}>
      <svg viewBox="0 0 48 48" {...props}>
        <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
      </svg>
    </IconWrapper>
  ),
  vercel: ({ size, ...props }) => (
    <IconWrapper color={iconColors.vercel} size={size}>
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="40" cy="40" r="38" fill="black"/>
        <path d="M40 25L58 50H22L40 25Z" fill="white" />
      </svg>
    </IconWrapper>
  ),
  docker: ({ size, ...props }) => (
    <IconWrapper color={iconColors.docker} size={size}>
      <svg viewBox="0 0 48 48" {...props}>
        <path fill="#03A9F4" d="M40,20c0.391-1.735-0.092-3.78-2.5-6c-3.914,3.543-2.795,7.227-1.5,9c0,0-0.166,1-4,1S2,24,2,24S0.167,40,18,40c15.593,0,19.973-12.003,20.828-15.076C39.182,24.972,39.579,25.003,40,25c2.147-0.017,4.93-1.171,6-5.484C43.162,18.533,41.339,18.978,40,20z"></path><path fill="#0288D1" d="M2.165,28C2.9,32.739,5.983,40,18,40c12.185,0,17.523-7.33,19.682-12H2.165z"></path><path fill="#81D4FA" d="M19.812,39.938C18.892,39.616,14.74,38.848,14,33c-4.209,1.863-7.938,1.375-9.579,1.008C6.583,37.237,10.591,40,18,40C18.623,40,19.224,39.976,19.812,39.938z"></path><path fill="#FFF" d="M18 30A2 2 0 1 0 18 34A2 2 0 1 0 18 30Z"></path><path fill="#37474F" d="M14.914,33.597c0.224,0.505,0.02,1.162-0.51,1.318c-3.301,0.973-6.146,1.102-8.297,1.102c-0.644-0.619-1.194-1.279-1.656-1.963c2.585,0,6.71-0.12,9.144-0.966C14.117,32.906,14.69,33.09,14.914,33.597z M2,27c0,0,1.875,0.125,3-1c1.875,1.688,5.94,1.088,7,0c1.063,1.688,6.938,1.375,8,0c1.25,1.438,6.625,1.75,8,0c0.479,1.461,6.819,1.874,8,0c1.061,1.088,5.063,1.938,7.311,0C43.875,27.188,46,27,46,27v1H2 M17,32c0,0.552,0.448,1,1,1s1-0.448,1-1s-0.448-1-1-1S17,31.448,17,32z"></path><path fill="#01579B" d="M11,24H6v-5h5V24z M21,19h-5v5h5V19z M31,19h-5v5h5V19z M16,14h-5v5h5V14z M26,14h-5v5h5V14z"></path><path fill="#0288D1" d="M16,24h-5v-5h5V24z M26,19h-5v5h5V19z M26,9h-5v5h5V9z M21,14h-5v5h5V14z"></path>
      </svg>
    </IconWrapper>
  )
}

export const TechStackIcon: React.FC<TechStackIconProps> = ({ name, size = 'md', ...props }) => {
  const Icon = icons[name.toLowerCase()]
  if (!Icon) return null
  return <Icon size={size} {...props} />
} 