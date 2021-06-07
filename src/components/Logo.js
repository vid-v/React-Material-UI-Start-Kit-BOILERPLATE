/* eslint linebreak-style: ["error", "windows"] */

// .brand-name {
//     color: #0619fa;
// }
const Logo = (props) => (
  <>
    <img
      alt="Logo"
      src="/static/brand-name.png"
      {...props}
    />
    <span className="brand-name">Paycruiser</span>
  </>
);

export default Logo;
