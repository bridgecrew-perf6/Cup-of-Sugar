// card of product displayed on results list and owner list
// card of product displayed on results list and owner list
import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import API from "../../utils/API"


class ProductCard extends Component {
    constructor(props) {
        super(props);
    
        this.state = { items: [] };
      }
    
      // Component did mount gets called after the render() method, so the map method starts as undefined.
      componentDidMount() {
        // console.log("Component did mount... Sending Axios Request...");
        API.getItems().then((res) => {
        //   console.log("response: ", res);
          const items = res;
        //   console.log("response data: ", items);
          this.setState({
            items: items,
          });
        });
      }
      
render() {
    return(
    
        <div className="container mx-auto lg:grid grid-cols-3 gap-4">
            {this.state.items.map((item) => (
            <div className="p-4 flex space-x-4 rounded-md ">
                <div className="flex-2 rounded-md p-6 bg-gray-100">
                    <div>
                        <img alt={item.name} src={process.env.PUBLIC_URL + item.image} className="bg-blue bg-cover py-1 px-10" />
                    </div>
                     <hr />
                    <div className="py-1 px-10">
                        <div className="text-2xl font-bold mb-3 underline">{item.itemName}</div>
                        <div className="text-lg mb-3">{item.itemDescription}</div>
                        <div className="text-lg mb-3 font-bold underline">Daily Fee:</div>
                         <div className="text-lg mb-3">${item.rentalFee}.00</div>
                    </div>
                    <div>
                         <Link to={`/productpage/${item.id}`}
                         className="bg-blue-500 text-white p-2 flex justify-center w-full"
                         >
                         Check it out!
                        </Link>
                    </div> 
                </div>
            </div>
            ))}
        </div>
        
        
    )

    


}
}
export default ProductCard;

