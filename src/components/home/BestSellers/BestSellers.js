import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img='https://i.pinimg.com/564x/f9/b9/36/f9b9361b0b80387274bc46e60c8b5f8f.jpg'
          productName="Black Half-sleve Shirt"
          price="35.00"
          color="Black"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img='https://i.pinimg.com/564x/fa/c8/19/fac8198d07da864087ea314d8867a518.jpg'
          productName="Green and white combo"
          price="180.00"
          color="Green"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img='https://i.pinimg.com/564x/53/a6/c9/53a6c9ed21a15b50aa1f85132e39decb.jpg'
          productName="Traditional Kurti"
          price="25.00"
          color="purple"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img='https://i.pinimg.com/564x/9b/26/ff/9b26ffed4fd47a60fc4d1b427a61c356.jpg'
          productName="White Top"
          price="220.00"
          color="White"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;
