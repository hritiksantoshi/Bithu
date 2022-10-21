import React from "react";
import "./styles/Header.css"
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
 export const Header = () => {
  return (
    <>
      <nav className="sc-gsnTZi iGHsRa bithu_header sticky" id="navbar">
        <div className="container">
          <div className="bithu_menu_sect">
            <div className="bithu_menu_left_sect">
              <div className="logo">
                <a href="/">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAnCAYAAAAGoAoxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOOSURBVHgB7ZzhdZswEMf/7sv3eoOSCepMUDJB0gH6QiZoMkGdCdJOUPI6gL1ByAT1BlUmqDdw7x6yQxwkBJaoQfd77578kEAyHKeTTmKCLmx+bdCWyZcJhCh4B0HwjCiV4B1RKsE7JzgiNpvNJSUXOJxnna5IislksnY5ierPKPlpKXJK11IIgK77kyF7TfXeYiAclVIRM5IMnqEHllNyF0ohPJGSXBnyFIko1ZGRkaSkXOchFIuuyy/DzJC9dLWUYyEWpWISkgXJGfyTkXw15CmSAhERm6M+I6uSwj8fIeyIcfR3Bf/MIOwYWveX42VkV0eCcgSVWMqkpgzyfXJdhzNk+aaUTCHsGJpSPdCDL2wFdPf2iMBo55yVqclKcZe7f4ynCFZoX2ei6+N6+feHmmI8KHii6y8brpOY8h3u8bYNdaxH56jzDaE/rWC3Vju0EjqVxeuR3MLxvPuaYznJNdxJqJ1/4W4Rb/Q9+GxQ3jns0xensGP77/lJhMHh/eF9Bnc/q6g5vy/adrEJyaOeRmltFQ8hRkf9GfHAiniPnhmdUjX5C8QScZEGmkYxMjSf6qrhBr2HPcyz1CO82GDHukBPDE2pMnSH/Yo2znETP1B2LzwCyyzlcrztctv6OGtdn6pIlYzkm+X8Xqc8YgnT8EqFc0Nejpe3OIWj007X+86ptpyZpWjjNIgDPAUxt+TPqR02peqVWJSK/Yo/lL4JKFcfuJ5PCjHjHhUxjf4Skt964k4ISGxTCuxbLHRoRQjE2GJ/DCsMrx5NDPl8/AblrLIQgNHF/hiyRHNK2IcyWST2m+YQgjDK7k/H5x4sRRLpAsMxZp+qKUaXQAjCSafg8DCC0NMD84WOjNJS6a6taatXX6sNhqa8B7d3bLE/huN/l2ju3hT64YLa7Lz3sCdsbZlSe3nvY9UnTbTwWvwUDYoXU+yvivL4kJuuk7HUrP5krv9TgNupzehIrNveC/hDYXgoBCRGpeK39A6e0BavwLDgNWXBuuMYleo2wC5lXlJzTD6TFf0idH2xGl+imJSqIDkL4cNoJeWlNQoDQS/daaNYW0XkTRHW7zocm6NewD8K5Xoq5VCWF8/ZbrTRGvHmAt5kgDKuuN17OK2ct977rfBaCZcwK6WLFbS1u6g7yGu09MdL5ihHdrO9OhXKe/KEyk4ivVPHVN+q24SkfJ5RsCAfPRO8I0oleEeUSvDOP8pQF35CzRoCAAAAAElFTkSuQmCC"
                    className="hover-shape shape-right shape-black"
                    alt="bithu nft button hover shape"
                  ></img>
                </a>
              </div>
            </div>
            <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
              <div className="bithu_menu_list">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#roadmap">Roadmap</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li className="submenu">
                    <a href="# ">Pages +</a>
                    <div className="sub_menu_sect">
                      <ul className="sub_menu_list">
                        <li>
                          <a href="/">Home One</a>
                        </li>
                        <li>
                          <a href="/home-two">Home Two</a>
                        </li>
                        <li>
                          <a href="/home-three">Home Three</a>
                        </li>
                        <li>
                          <a href="/home-four">Home Four</a>
                        </li>
                        <li>
                          <a href="/home-five">Home Five</a>
                        </li>
                        <li>
                          <a href="/mint-1">Minting Page 1</a>
                        </li>
                        <li>
                          <a href="/mint-2">Minting Page 2</a>
                        </li>
                        <li>
                          <a href="/about">About Us </a>
                        </li>
                        <li>
                          <a href="/collections">Collections</a>
                        </li>
                        <li>
                          <a href="/roadmap">Roadmap</a>
                        </li>
                        <li>
                          <a href="/faq"> FAQs </a>
                        </li>
                        <li>
                          <a href="/coming-soon">Coming Soon</a>
                        </li>
                        <li>
                          <a href="/blogs">Latest Blog</a>
                        </li>
                        <li>
                          <a href="/post">Blog Details</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bithu_menu_btns">
                <button className="menu_btn">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"></path>
                  </svg>
                </button>
                <button type="submit" className="sc-bczRLJ SpXCk join_btn">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                  </svg>{" "}
                  Join
                  <img
                    src="https://bithu-sol-landing.vercel.app/static/media/hov_shape_s.ab94770525c55314d81a2a8fbe129601.svg"
                    className="hover-shape shape-left shape-white"
                    alt="bithu nft button hover shape"
                  ></img>
                   <img
                    src="https://bithu-sol-landing.vercel.app/static/media/hov_shape_s.ab94770525c55314d81a2a8fbe129601.svg"
                    className="hover-shape shape-right shape-white"
                    alt="bithu nft button hover shape"
                  ></img>
                  <img
                    src="https://bithu-sol-landing.vercel.app/static/media/button-hover-shape.f2ab9dd7826838eb77a01cbe82c988f2.svg"
                    className="hover-shape shape-left shape-black"
                    alt="bithu nft button hover shape"
                  ></img>
                  <img
                    src="https://bithu-sol-landing.vercel.app/static/media/button-hover-shape.f2ab9dd7826838eb77a01cbe82c988f2.svg"
                    className="hover-shape shape-right shape-black"
                    alt="bithu nft button hover shape"
                  ></img>
                </button>

                <button type="submit" className="sc-bczRLJ eCEEzh connect_btn">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                  </svg>
                  Connect
                  <img
                    src="https://bithu-sol-landing.vercel.app/static/media/hov_shape_s.ab94770525c55314d81a2a8fbe129601.svg"
                    className="hover-shape shape-left shape-white"
                    alt="bithu nft button hover shape"
                  ></img>
                  <img
                    src="https://bithu-sol-landing.vercel.app/static/media/hov_shape_s.ab94770525c55314d81a2a8fbe129601.svg"
                    className="hover-shape shape-right shape-white"
                    alt="bithu nft button hover shape"
                  ></img>
                  <img
                    src="https://bithu-sol-landing.vercel.app/static/media/button-hover-shape.f2ab9dd7826838eb77a01cbe82c988f2.svg"
                    className="hover-shape shape-left shape-black"
                    alt="bithu nft button hover shape"
                  ></img>
                  <img
                    src="https://bithu-sol-landing.vercel.app/static/media/button-hover-shape.f2ab9dd7826838eb77a01cbe82c988f2.svg"
                    className="hover-shape shape-right shape-black"
                    alt="bithu nft button hover shape"
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
