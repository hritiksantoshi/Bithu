import React from "react";
import "./styles/Main.css";

export const Main = () => {
  return (
    <>
      <section id="home" className="sc-hKMtZM dobIUw">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="bithu_v1_baner_left">
                <h2>Crazy Meta 🎯 NFT collections</h2>
                <h3>
                  <span className="count">
                    <span>0</span>
                  </span>{" "}
                  / 9999 Minted
                </h3>
                <div className="banner_buttons">
                  <button type="submit" className="sc-bczRLJ klYCCI bithu-btn">
                    {" "}
                    Mint now
                    <img
                      src="https://bithu-sol-landing.vercel.app/static/media/hov_shape_s.ab94770525c55314d81a2a8fbe129601.svg"
                      className="hover-shape shape-left shape-white"
                      alt="bithu nft button hover shape"
                    />
                    <img
                      src="https://bithu-sol-landing.vercel.app/static/media/hov_shape_s.ab94770525c55314d81a2a8fbe129601.svg"
                      className="hover-shape shape-right shape-white"
                      alt="bithu nft button hover shape"
                    />
                    <img
                      src="https://bithu-sol-landing.vercel.app/static/media/button-hover-shape.f2ab9dd7826838eb77a01cbe82c988f2.svg"
                      className="hover-shape shape-left shape-black"
                      alt="bithu nft button hover shape"
                    />
                    <img
                      src="https://bithu-sol-landing.vercel.app/static/media/button-hover-shape.f2ab9dd7826838eb77a01cbe82c988f2.svg"
                      className="hover-shape shape-right shape-black"
                      alt="bithu nft button hover shape"
                    />
                  </button>
                  <button type="submit" className="sc-bczRLJ bjjqBU bithu-btn">
                    Wishlist now
                    <img
                      src="https://bithu-sol-landing.vercel.app/static/media/hov_shape_s.ab94770525c55314d81a2a8fbe129601.svg"
                      className="hover-shape shape-left shape-white"
                      alt="bithu nft button hover shape"
                    />
                    <img
                      src="https://bithu-sol-landing.vercel.app/static/media/hov_shape_s.ab94770525c55314d81a2a8fbe129601.svg"
                      className="hover-shape shape-right shape-white"
                      alt="bithu nft button hover shape"
                    />
                    <img
                      src="https://bithu-sol-landing.vercel.app/static/media/button-hover-shape.f2ab9dd7826838eb77a01cbe82c988f2.svg"
                      className="hover-shape shape-left shape-black"
                      alt="bithu nft button hover shape"
                    />
                    <img
                      src="https://bithu-sol-landing.vercel.app/static/media/button-hover-shape.f2ab9dd7826838eb77a01cbe82c988f2.svg"
                      className="hover-shape shape-right shape-black"
                      alt="bithu nft button hover shape"
                    />
                  </button>
                </div>
                <div className="coin-info">
                  <span>Max 2 NFTs per wallet . Price 0.09 ETH + gas</span>
                  <span>
                    MINT IS LIVE{" "}
                    <span className="highlighted">UNTIL 25 APR 04:00H</span>
                  </span>
                  <span>Presale : SOLDOUT</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bithu_v1_baner_right">
                <div className="bithu_v1_baner_right_img_sect">
                  <div className="mint_live_circle_sect">
                    <div className="mint_live_circle">
                      <span>
                        <img
                          src="https://bithu-sol-landing.vercel.app/static/media/mint_live_down_arrow.d249dd54578cd6b1c5dc59f8febc8ccb.svg"
                          alt=""
                        />
                      </span>
                      <span className="mint_live_text rotated-style">
                        <img
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <div className="bithu_v1_baner_right_img_bg">
                    <img
                      src="https://bithu-sol-landing.vercel.app/static/media/home_img_bg.36e999b68f930349ac66.png"
                      alt=""
                    />
                  </div>
                  <div className="bithu_v1_baner_right_img">
                    <img
                      src="https://bithu-sol-landing.vercel.app/static/media/Character1.9173ce2b2ae8da4180fa.png"
                      alt="avater"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sc-eCYdqJ juviFN">
        <div className="container">
          <ul>
            <li>
              <h3>
                <span>5555</span>
              </h3>
              <h4>Total Items</h4>
            </li>
            <li>
              <h3>
                <span>896</span>
              </h3>
              <h4>Total Owners</h4>
            </li>
            <li>
              <h3>
                <span>0.55</span>
              </h3>
              <h4>Floor Price (ETH)</h4>
            </li>
            <li>
              <h3>
                <span>25.50k</span>
              </h3>
              <h4>Volume Traded (ETH)</h4>
            </li>
          </ul>
        </div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgB7duhDYBAAATBf4JE0X+NKCQJhBrWvJgpYXP25n6c71jYc19zLGwbJAJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkZLfzB+q/9YLDASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIw+gD4fAXA1eLW3wAAAABJRU5ErkJggg=="
          className="bg-shape shape-left shape-top"
          alt="bithu bg shape"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADQSURBVHgB7duhDcRAEATBu9dDI+cfo5GhJTuIJguqQmgNnb2G+x/nuwb7LRIBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwGjPf2H8dzXXoNZYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGD0Ae80BcB1Y6o2AAAAAElFTkSuQmCC"
          className="bg-shape shape-left shape-bottom"
          alt="bithu bg shape"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgB7duhDYBAAATBf4JE0X+NKCQJhBrWvJgpYXP25n6c71jYc19zLGwbJAJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkZLfzB+q/9YLDASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIw+gD4fAXA1eLW3wAAAABJRU5ErkJggg=="
          className="bg-shape shape-right shape-top"
          alt="bithu bg shape"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADQSURBVHgB7duhDcRAEATBu9dDI+cfo5GhJTuIJguqQmgNnb2G+x/nuwb7LRIBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwGjPf2H8dzXXoNZYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGD0Ae80BcB1Y6o2AAAAAElFTkSuQmCC"
          className="bg-shape shape-right shape-bottom"
          alt="bithu bg shape"
        />
      </section>
     
    </>
  );
};
