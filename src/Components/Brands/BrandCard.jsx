import { Card, CardHeader } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BrandCard = ({image}) => {
    return (
        <>
        <Link to ="/brands/:id" >
            <Card className="w-full max-w-[15rem] max-h-[15rem] p-8">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 mb-2 rounded-true h-80"
                >
                    <img
                        src={image}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
            </Card></Link>
        </>
    );
};

export default BrandCard;
