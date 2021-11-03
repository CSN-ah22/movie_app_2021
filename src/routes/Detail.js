import React from "react";

class Detail extends React.Component{
    componentDidMount(){//Detail 컴포넌트가 죽으면
        const { location, history }=this.props
        if (location.state === undefined){
            history.push('/');
        }
    }
    render() {
    return <span>hello</span>
    }
}

export default Detail;