import React, { Component, useState } from "react";

function SideBar(props) {
  const [value, setValue] = useState(" ");
  const sortHighLow = () => {
    return props.onSort(props);
  };
  const sortLowHigh = () => {
    return props.onSortLow(props);
  };
  const SortAZ = () => {
    return props.onSortAZ(props);
  };
  const sortZA = () => {
    return props.onSortZa(props);
  };
  const handleOnChangeValueSearch = (e) => {
    setValue(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
    return props.onSearch(value);
  };
  return (
    <div className="col-xl-3 col-lg-4 sidebar">
      <div className="sidebar-shop">
        <div className="shop-widget">
          <h3 className="shop-title">Search by</h3>
          <form action="#" onSubmit={onSearch} className="shop-search">
            <input
              type="text"
              placeholder="Your keyword...."
              onChange={handleOnChangeValueSearch}
            />
            <button>
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
        {/* <div className="shop-widget">
          <h3 className="shop-title">Filter selection</h3>
  <div className="price-filter">
    <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '15%', width: '45%'}} /><span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '15%'}} /><span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '60%'}} /></div>
    <input type="text" id="amount" />
  </div>
        </div> */}

        <div className="shop-widget">
          <h3 className="shop-title">SHOP BY</h3>
          <ul className="shop-link">
            <li>
              <p onClick={SortAZ}>Name: A-Z</p>
            </li>
            <li>
              <p onClick={sortZA}>Name: Z-A</p>
            </li>
            <li>
              <p href="#" onClick={sortHighLow}>
                Price: High to Low
              </p>
            </li>
            <li>
              <p href="#" onClick={sortLowHigh}>
                Price: Low to High
              </p>
            </li>
            <li>
              <p href="#">Product: Top Sales</p>
            </li>
          </ul>
        </div>
        <div className="shop-widget">
          <h3 className="shop-title">Recent Product</h3>
          <ul className="shop-sidebar-product">
            <li>
              <div className="side-pro-img">
                <a href="#">
                  <img src="./assets/shop-rsp3.jpg" alt />
                </a>
              </div>
              <div className="side-pro-content">
                <div className="side-pro-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <a href="#">Raglan Baseball-Style</a>
                </h5>
                <div className="side-pro-price">
                  <span>$119.00 USD</span>
                </div>
              </div>
            </li>
            <li>
              <div className="side-pro-img">
                <a href="#">
                  <img src="./assets/shop-rsp2.jpg" alt />
                </a>
              </div>
              <div className="side-pro-content">
                <div className="side-pro-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <a href="#">Raglan Baseball-Style</a>
                </h5>
                <div className="side-pro-price">
                  <span>$119.00 USD</span>
                </div>
              </div>
            </li>
            <li>
              <div className="side-pro-img">
                <a href="#">
                  <img src="./assets/shop-rsp4.jpg" alt />
                </a>
              </div>
              <div className="side-pro-content">
                <div className="side-pro-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5>
                  <a href="#">Raglan Baseball-Style</a>
                </h5>
                <div className="side-pro-price">
                  <span>$119.00 USD</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="shop-widget">
          <div className="shop-sidebar-banner">
            <a href="#">
              <img src="./assets/shop-banner.jpg" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
