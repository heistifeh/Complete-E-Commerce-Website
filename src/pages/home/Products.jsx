import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Cards from '../../components/Cards';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/products.json');
                if (!response.ok) throw new Error("Network response was not ok");


                const data = await response.json();
                setProducts(data);
                setFilteredItems(data);

            } catch (error) {
                console.log("Error fetchingv data: ", error);
            }
        }
        fetchData();
    }, [])

    // filtering Functions
    const filterItems = (category) => {
        const filtered = category === 'all' ? (products) : products.filter((item) => item.category === category)

        setFilteredItems(filtered)
        setSelectedCategory(category);
    };

    // show all products
    const showAll = () => {
        setFilteredItems(products);
        setSelectedCategory('all');
    }

    // sorting functionality

    const handleSortChange = (option) => {
        setSortOption(option);
        // logic for sorting
        let sortedItems = [...filteredItems];

        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "low-to-high":
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setFilteredItems(sortedItems)
    }

    return (
        <div className='max-w-screen-2xl mx-auto xl:px-28 lg:px-20 mb-12'>
            <h2 className='title'>Or subscribe to the newsletter</h2>

            {/* product cards */}
            <div>
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3'>
                    {/* All buttons */}
                    <div className='flex flex-row justify-start md:items-center md:gap-6 gap-4 flex-wrap'>
                        <button onClick={showAll}>All Products</button>
                        <button onClick={() => filterItems("Dress")}>Clothing</button>
                        <button onClick={() => filterItems("Hoodies")}>Hoodies</button>
                        <button onClick={() => filterItems("Bag")} >Bag</button>
                    </div>

                    {/* Sorting Product options */}
                    <div className='flex justify-end mb-4 rounded-sm'>
                        <div className='bg-black'>
                            <FaFilter className='text-white h-4 w-4' />
                        </div>
                        <select
                        id='sort'
                        onChange={(e) => handleSortChange(e.target.value)}
                        className='bg-black text-white px-2 py-1 rounded-sm'>
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="low-to-high">low to high</option>
                            <option value="high-to-low">High to Low</option>
                        </select>
                    </div>
                </div>

                <Cards filteredItems={filteredItems} />

            </div>
        </div>
    )
}

export default Products