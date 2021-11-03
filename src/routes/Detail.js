import React from "react";

class Detail extends React.Component{
    componentDidMount(){//Detail 컴포넌트가 죽으면
        const { location, history }=this.props
        if (location.state === undefined){
            history.push('/');
        }
    }
    render() {
    const {location} = this.props
    if (location.state){
        return(
            <span>{location.state.title}</span>  
        ) 
    }else{
        return null
    }
    }
}

export default Detail;