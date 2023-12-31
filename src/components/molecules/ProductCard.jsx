import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductCard = ({ product }) => {
    return (
        <Card to={staticServerUrl + `/product/${product.id}`}>
            <Photo className="card" src={staticServerUrl + "/img" + product.image} alt={product.productName} />
            <div className="my-3 text-sm">
                {product.productName}
            </div>
            <div className="text-lg font-bold">
                {comma(product.price)}원
            </div>
        </Card>
    );
}

export default ProductCard;