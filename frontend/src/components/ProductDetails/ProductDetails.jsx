import Breadcrumb from "./Breadcrumb/breadcrumb";
import Gallery from "./Gallery/Gallery.jsx";
import Info from "./Info/Info.jsx";
import "./ProductDetails.css";
import Tabs from "./Tabs/Tabs.jsx";

const ProductDetails = () => {
    return (
        <section className="single-product">
            <div className="container">
                <div className="single-product-wrapper">
                    <Breadcrumb />
                    <div className="single-content">
                        <main className="site-main">
                            <Gallery />
                            <Info />
                        </main>
                    </div>
                    <Tabs />
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;