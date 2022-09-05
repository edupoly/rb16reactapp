import React from "react";
class Carousal extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div className="betterview">
                <div id={this.props.cname} class="carousel slide w-20" data-bs-ride="carousel">
                    <div class="carousel-indicators w-20">
                        <button type="button" data-bs-target={`#${this.props.cname}`} data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target={`#${this.props.cname}`} data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target={`#${this.props.cname}`} data-bs-slide-to="2"></button>
                    </div>
                    <div class="carousel-inner w-20" style={{height:'100%'}}>
                        {
                            this.props.images && this.props.images.map((img,i)=>{
                                console.log(img)
                                return(
                                    <div className={i===0?"carousel-item active":"carousel-item"}>
                                        <img src={`${img}`}  className="d-block w-20" />
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target={`#${this.props.cname}`} data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target={`#${this.props.cname}`} data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
        )
    }
}
export default Carousal;