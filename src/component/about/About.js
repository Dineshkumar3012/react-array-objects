import { Component } from "react";
import '../about/About.css';
import { FaStar } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";


class About extends Component{
    render(){
        const {tdata} = this.props;
        console.log(tdata);
        const dataa = tdata.map((e)=>{
            return(
                <div className='col4 top'>
                    <div className='disht-content'>
                        <div className='dish-img'>
                            <img src={e.image2} alt='img.avif' />
                        </div>
                        <div className='dish-content'>
                            <div className='dflex'>
                                <b className='dishname'>{e.dishName}</b>
                                <b className='rating-sec'>{e.ratings} <FaStar/></b>
                            </div>

                            <div className='dflex'>
                                <b className='locationfood'>{e.dishlocation}</b>
                                <b className='price-sec'><MdCurrencyRupee/>{e.price} for one</b>
                            </div>
                            <div className='estime-sec'>
                                <b>{e.estimatedTime}</b>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div>
                 <div className='dish-container'>
            <div className='container'>
                <div className='row'>
                    {dataa}
                </div>
            </div>
        </div>
            </div>
        )
    }
}

export default About;