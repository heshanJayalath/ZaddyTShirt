import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Customer/CustomerHomePage/logo_zaddy.svg";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "../../Styles/Customer/styles";
import ResponsiveNaveBar from "./ResponsiveNaveBar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";

const ResponsiveHeader = ({ activeHeading }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const { allProducts } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const { isGarment } = useSelector((state) => state.garment);

  // console.log("isAuthenticated : ", isAuthenticated);
  // console.log("user : ", user);
  // console.log("loading : ", loading);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);


 

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
   
    } else {
      setActive(false);
    }
  });

  return (
    <>
      {loading ? null : (
        <div className="">
          <div className={`${styles.section} `}>
            <div className="w-full flex items-center  justify-start">
              <div className="w-3/12">
                <Link to="/">
                  <img src={Logo} alt="" className="w-[60px]" />
                </Link>
              </div>

              <div className="w-8/12 relative">
                <input
                  type="text"
                  placeholder="Search Product..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="h-[40px] w-full px-2 border-[#3957bd] border-[2px] rounded-md"
                />
                <AiOutlineSearch
                  size={30}
                  className="absolute right-2 top-1.5 cursor-pointer"
                />
                {searchData && searchData.length !== 0 ? (
                  <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                    {searchData &&
                      searchData.map((i, index) => {
                        return (
                          <Link to={`/product/${i._id}`}>
                            <div className="w-full flex items-start-py-3">
                              <img
                                src={`${backend_url}/${i.images[0]}`}
                                alt=""
                                className="w-[40px] h-[40px] mr-[10px]"
                              />
                              <h1>{i.name}</h1>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="w-full">
            <ResponsiveNaveBar />
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveHeader;
