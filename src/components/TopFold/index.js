import React from "react";
import Button from "../../common/styles/Button";
import "./topFold.css";

const TopFold = () => {
  return (
    <div className="topfold absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          Discover collect, & sell
          <span className="heading-gradient">Extraordinary</span> NFTs
        </div>
        <div className="tf-description">
          the leading NFT Marketplace on EthereumHome to the next generation of
          digital creators. Discover the best NFT collections.
        </div>
        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="EXPLORE" />
          <Button
            btnType="SECONDARY"
            btnText="Create"
            customClass="tf-left-secondary-btn"
          />
        </div>
        <div className="tf-left-infoStats">
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">200K+</div>
            <div className="tf-infoItem-label">Collections</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">10K+</div>
            <div className="tf-infoItem-label">Artists</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">423K+</div>
            <div className="tf-infoItem-label">Community</div>
          </div>
        </div>
      </div>
      <div className="tf-right"></div>
    </div>
  );
};

export default TopFold;
