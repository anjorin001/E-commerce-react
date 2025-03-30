import { useEffect } from "react";
import { debounce } from "lodash";
import axios from "axios";
import { useCategory } from "./useCategory";
const Category = ({ GetProduct, setFilteredProduct }) => {
  // const[categoryProduct, setCategoryProduct] = useState([]);
  const {categoryParams,setSearchParams, setCategoryProduct, setCatgLoading, setCatgError } = useCategory();

  const GetCategory = async (categoryValue) => {
    if (!categoryValue) return;
    setCatgLoading(true);
    setTimeout(async () => {
      try {
        let url = `https://dummyjson.com/products/category/${categoryValue}`;
        if (categoryValue === "AllProduct") {
          setFilteredProduct([])
          GetProduct();
          return;
        }
        let catg = await axios.get(url);
        setCategoryProduct(catg.data?.products);
      } catch (err) {
        setCatgError(`Error: ${err.message}`);
      } finally {
        setCatgLoading(false);
      }
    }, 1000);
  };
  const handleChange = (event) => {
    setFilteredProduct([])
    const selectedCategory = event.target.value;
    setSearchParams({ category: selectedCategory });
  };

  useEffect(() => {
    const debouncedCategory = debounce((value) => {
      GetCategory(value);
    }, 300);
    if (categoryParams) {
      debouncedCategory(categoryParams);
    }

    return () => debouncedCategory.cancel();
  }, [categoryParams]);

  return (
    <div>
      <div className="Category">
        <label>
          <span style={{color:'black'}}>Category</span>
          <select value={categoryParams} onChange={handleChange}>
            <option value="AllProduct">All Product</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home Decoration</option>
            <option value="kitchen-accessories">Kitchen Accessories</option>
            <option value="laptops">Laptops</option>
            <option value="mens-shirts">Men's Shirts</option>
            <option value="mens-shoes">Men's Shoes</option>
            <option value="mens-watches">Men's Watches</option>
            <option value="mobile-accessories">Mobile Accessories</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="skin-care">Skin Care</option>
            <option value="smartphones">Smartphones</option>
            <option value="sports-accessories">Sports Accessories</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="tablets">Tablets</option>
            <option value="tops">Tops</option>
            <option value="vehicle">Vehicle</option>
            <option value="womens-bags">Women's Bags</option>
            <option value="womens-dresses">Women's Dresses</option>
            <option value="womens-jewellery">Women's Jewellery</option>
            <option value="womens-shoes">Women's Shoes</option>
            <option value="womens-watches">Women's Watches</option>
          </select>
        </label>
      </div>
      {/* <Product categoryParams={categoryParams}/> */}
    </div>
  );
};

export default Category;
