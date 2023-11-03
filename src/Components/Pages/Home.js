import Layout from "../Layout/Layout";
import HomeSwiper from "./Home/HomeSwiper";
import Style from './Home.module.css'
import productsList from "../Data/Products";
import CardProduct from "./CardProduct";
function Home(props){
    return(
    <Layout>
        <HomeSwiper products={productsList}/>
        <div className={Style.products}>
            {productsList.map(item=><CardProduct key={item.id} product={item}/>)}
        </div>
    </Layout>);
}
export default Home;