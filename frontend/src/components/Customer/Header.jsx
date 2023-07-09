import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Customer/CustomerHomePage/Logo.jpg'
import { categoriesData, productData } from '../../Static/Customer/data';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { BiMenuAltLeft } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import styles from '../../Styles/Customer/styles';
import DropDown from './DropDown';
import Navbar from './Navbar';

const Header = ({ activeHeading }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchData, setSearchData] = useState(null);
    const [active, setActive] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts = productData && productData.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
        );
        setSearchData(filteredProducts);
    };

    window.addEventListener('scroll', () => {
        if (window.scrollY > 70) {
            setActive(true);
        } else {
            setActive(false);
        }
    });

    return (
        <>
            <div className={`${styles.section}`}>
                <div className='800px:h-[50px] 800px:my-[20px] 800px flex items-center justify-between'>
                    <div>
                        <Link to="/">
                            <img src={Logo} alt='' className='w-[200px]' />
                        </Link>
                    </div>
                    <div className='w-[50%] relative'>
                        <input
                            type='text'
                            placeholder='Search Product...'
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className='h-[40px] w-full px-2 border-[#3957bd] border-[2px] rounded-md'
                        />
                        <AiOutlineSearch size={30} className='absolute right-2 top-1.5 cursor-pointer' />
                        {
                            searchData && searchData.length !== 0 ? (
                                <div className='absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4'>
                                    {searchData && searchData.map((i, index) => {
                                        const d = i.name;

                                        const Product_name = d.replace(/\s+/, "-");
                                        return (
                                            <Link to={`/product/${Product_name}`}>
                                                <div className='w-full flex items-start-py-3'>
                                                    <img src={i.image_Url[0].url} alt=''
                                                        className='w-[40px] h-[40px] mr-[10px]'
                                                    />
                                                    <h1>{i.name}</h1>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div className={`${styles.button}`}>
                        <Link to="../Garment">
                            <h1 className='text-[#fff] flex items-center'>
                                Become a seller <IoIosArrowForward className="ml-1" />
                            </h1>
                        </Link>

                    </div>
                </div>
            </div>
            <div className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null} transition 800px flex items-center justify-between w-full bg-[#3321cb] h-[70px]`}>
                {/* categories */}
                <div>
                    <div onClick={() => setDropDown(!dropDown)} className='relative h-[60px] bottom-0 left-5 mt-[10px] w-[270px]  1000px:block'>
                        <BiMenuAltLeft size={30} className='absolute top-4 left-2 ' />
                        <button className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}>
                            All Categories
                        </button>
                        <IoIosArrowDown
                            size={20}
                            className='absolute right-2 top-6 cursor-pointer'
                            
                        />
                        {
                            dropDown ? (

                                <DropDown
                                    categoriesData={categoriesData}
                                    setDropDown={setDropDown}
                                />
                            ) : null
                        }

                    </div>

                </div>
                {/* navitems */}
                <div className={`${styles.noramlFlex}`}>
                    <Navbar active={activeHeading} />
                </div>
                <div className='flex'>
                    <div className={`${styles.noramlFlex}`}>
                        <div className='relative cursor-pointer mr-[15px]'>
                            <AiOutlineHeart
                                size={30}
                                className=' rgb(255 2555 255 / 83%)'
                            />
                            <span className='absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center'>
                                0
                            </span>
                        </div>
                    </div>
                    <div className={`${styles.noramlFlex}`}>
                        <div className='relative cursor-pointer mr-[15px]'>
                            <AiOutlineShoppingCart
                                size={30}
                                className=' rgb(255 2555 255 / 83%)'
                            />
                            <span className='absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center'>
                                1
                            </span>
                        </div>
                    </div>
                    <div className={`${styles.noramlFlex}`}>
                        <div className='relative cursor-pointer mr-[15px]'>
                            <Link to="/login">
                                <CgProfile
                                    size={30}
                                    className=' rgb(255 2555 255 / 83%)'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;