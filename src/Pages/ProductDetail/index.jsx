import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Layout from "../../components/layout";
import LoadingWaitGetData from "../LoadingWaitGetData";

import { productDetailAction } from "./ProductDetail.action";
import { FacebookShareButton, FacebookIcon } from "react-share";
function ProductDetail(props) {
  const [quantity, setQuantity] = useState(0);
  const reduceQuantity = () => {
    setQuantity({ quantity: quantity - 1 });
  };
  const increaseQuantity = () => {
    setQuantity({ quantity: quantity + 1 });
  };
  // dung useParams
  const params = useParams();
  console.log(params);
  const id = params.id;
  useEffect(() => {
    props.getProducDetail(id);
  }, []);
  console.log(props.productDetail);
  const product = props.productDetail;
  if (!product) {
    return (
      <>
        <LoadingWaitGetData />
      </>
    );
  }
  console.log(props.list);

  const data = props.list.find((item) => item.id === id);
  console.log("data", data);

  const relativeProducts = props.list.filter(
    (item) =>
      item.shopInfo.shop_name === props.productDetail.shopInfo.shop_name &&
      item.id !== data.id
  );
  console.log("relativeprodudct", relativeProducts);

  return (
    <Layout productsInCart={[]}>
      <main>
        <section
          className="breadcrumb-area"
          style={{ backgroundImage: 'url("/assets/page-title.png")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <LoadingWaitGetData />

                  <h1>Our Shop</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <span>shop details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="shop-details-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-4">
                <div className="product-details-img mb-10">
                  <div className="tab-content" id="myTabContentpro">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                    >
                      <div className="product-large-img img-fluid">
                        <img src={product.image} alt />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel">
                      <div className="product-large-img">
                        <img src={product.image} alt />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile1"
                      role="tabpanel"
                    >
                      <div className="product-large-img">
                        <img src={product.image} alt />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop-thumb-tab mb-30">
                  <ul className="nav" id="myTab2" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-selected="true"
                      >
                        <img src={product.image} alt />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-selected="false"
                      >
                        <img src={product.image} alt />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab2"
                        data-toggle="tab"
                        href="#profile1"
                        role="tab"
                        aria-selected="false"
                      >
                        <img src={product.image} alt />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8">
                <div className="product-details mb-30 pl-30">
                  <div className="details-cat mb-20">
                    <a href="#">{props.type}</a>
                    <a href="#">furniture</a>
                  </div>
                  <h2 className="pro-details-title mb-15">{product.name}</h2>
                  <div className="details-price mb-20">
                    <span>{product.price.toLocaleString()}</span>
                    <span className="old-price">
                      {product.priceMax.toLocaleString()}
                    </span>
                  </div>
                  <div className="product-variant">
                    <div className="product-desc variant-item">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </div>
                    <div className="product-info-list variant-item">
                      <ul>
                        <li>
                          <span>Brands:</span>
                        </li>
                        <li>
                          <span>Product Code:</span> d12
                        </li>
                        <li>
                          <span>Reward Points:</span> 100
                        </li>
                        <li>
                          <span>Stock:</span>{" "}
                          <span className="in-stock">In Stock</span>
                        </li>
                      </ul>
                    </div>
                    <div className="product-action-details variant-item">
                      <div className="product-details-action">
                        <form action="#">
                          <div className="plus-minus">
                            <div className="cart-plus-minus">
                              <input type="text" defaultValue={quantity} />
                              <div
                                className="dec qtybutton"
                                onClick={reduceQuantity}
                              >
                                -
                              </div>
                              <div
                                className="inc qtybutton"
                                onClick={increaseQuantity}
                              >
                                +
                              </div>
                            </div>
                          </div>
                          <FacebookShareButton
                            url={`https://quang-reactjs-t-05-20.netlify.app/product-detail/${product.id}`}
                          />
                          <button className="details-action-icon">
                            <i className="fas fa-heart" />
                          </button>
                          <div className="details-cart mt-40">
                            <button className="btn theme-btn">
                              purchase now
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-xl-8 col-lg-8">
                <div className="product-review">
                  <ul
                    className="nav review-tab"
                    id="myTabproduct"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab6"
                        data-toggle="tab"
                        href="#home6"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Description{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab6"
                        data-toggle="tab"
                        href="#profile6"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Reviews (2)
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent2">
                    <div
                      className="tab-pane fade show active"
                      id="home6"
                      role="tabpanel"
                      aria-labelledby="home-tab6"
                    >
                      <div className="desc-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum. Sed ut
                          perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet, consectetur, adipisci velit, sed
                          quia non numquam eius modi tempora incidunt ut labore
                          et dolore magnam aliquam quaerat voluptatem.
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile6"
                      role="tabpanel"
                      aria-labelledby="profile-tab6"
                    >
                      <div className="desc-text review-text">
                        <div className="product-commnets">
                          <div className="product-commnets-list mb-25 pb-15">
                            <div className="pro-comments-img">
                              <img src="img/product/comments/01.png" alt />
                            </div>
                            <div className="pro-commnets-text">
                              <h4>
                                Roger West -<span>June 5, 2018</span>
                              </h4>
                              <div className="pro-rating">
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                              </p>
                            </div>
                          </div>
                          <div className="product-commnets-list mb-25 pb-15">
                            <div className="pro-comments-img">
                              <img src="img/product/comments/02.png" alt />
                            </div>
                            <div className="pro-commnets-text">
                              <h4>
                                Roger West -<span>June 5, 2018</span>
                              </h4>
                              <div className="pro-rating">
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="review-box mt-50">
                          <h4>Add a Review</h4>
                          <div className="your-rating mb-40">
                            <span>Your Rating:</span>
                            <div className="rating-list">
                              <a href="#">
                                <i className="far fa-star" />
                              </a>
                              <a href="#">
                                <i className="far fa-star" />
                              </a>
                              <a href="#">
                                <i className="far fa-star" />
                              </a>
                              <a href="#">
                                <i className="far fa-star" />
                              </a>
                              <a href="#">
                                <i className="far fa-star" />
                              </a>
                            </div>
                          </div>
                          <form className="review-form" action="#">
                            <div className="row">
                              <div className="col-xl-12">
                                <label htmlFor="message">YOUR REVIEW</label>
                                <textarea
                                  name="message"
                                  id="message"
                                  cols={30}
                                  rows={10}
                                  defaultValue={""}
                                />
                              </div>
                              <div className="col-xl-6">
                                <label htmlFor="r-name">Name</label>
                                <input type="text" id="r-name" />
                              </div>
                              <div className="col-xl-6">
                                <label htmlFor="r-email">Email</label>
                                <input type="email" id="r-email" />
                              </div>
                              <div className="col-xl-12">
                                <button className="btn theme-btn">
                                  Add your Review
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="pro-details-banner">
                  <a href="shop.html">
                    <img src="img/banner/pro-details.jpg" alt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* shop-area end */}
        {/* product-area start */}
        <section className="product-area pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="area-title text-center mb-50">
                  <h2>Related Products</h2>
                  <p>Browse the huge variety of our products</p>
                </div>
              </div>
            </div>
            <div className="product-slider-2 owl-carousel">
              {relativeProducts.map((item) => (
                <div className="pro-item">
                  <div className="product-wrapper">
                    <div className="product-img mb-25">
                      <Link to={`/product-detail/${props.id}`}>
                        <img
                          width={50}
                          height={50}
                          className="product-img__relative"
                          src={item.imgUrl}
                        />
                      </Link>

                      <div className="sale-tag">
                        <span className="new">new</span>
                        <span className="sale">sale</span>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="pro-cat mb-10">
                        <a href="shop.html">decor, </a>
                        <a href="shop.html">furniture</a>
                      </div>
                      <h4>
                        <a href="product-details.html">{item.name}</a>
                      </h4>
                      <div className="product-meta">
                        <div className="pro-price">
                          <span>{item.price}</span>
                          <span className="old-price">{item.priceMax}</span>
                        </div>
                      </div>
                      <div className="product-wishlist">
                        <a href="#">
                          <i className="far fa-heart" title="Wishlist" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
const mapStateToProps = (state) => {
  return {
    productDetail: state.productDetailReducer.data,
    list: state.productsReducer.products,
  };
};
const mapDispatchToProps = {
  getProducDetail: productDetailAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
