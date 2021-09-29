import React from "react" //필수

class App extends React.Component{ 
    //생성자
    constructor(props){
        //super는 부모 클래스의 생성자를 참조하는것
        super(props)//this를 사용하려면 super가 필수
        console.log('constructor')
    }

    
    componentDidMount(){ //render이 일어나고 누적 카운트가 필요할때 사용되는 함수 = 저장?
        console.log('componentDidMount')
    }

    componentDidUpdate(){//화면중에 뭔가가 Update되면 실행되는 함수
        console.log('componentDidUpdate...Good bye')
    }
    
    //index.js의 component 가 필요없음
    state = {
        count: 0
    }


    add = () =>{
        //this.state.count = 1
        this.setState({count: this.state.count+1})
    }

    minus = () =>{
        this.setState({count: this.state.count-1})
    }

    //render 함수를 이용해서 브라우저에 출력한다
    render(){ 
        console.log('render');
        // !react 출력은 하나의 태그에 뭉쳐줘야 한다
        //this는 현재의 클래스를 말함
        return (
            <div> 
            <h1>Rhe number is: {this.state.count}</h1> 
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App


/*
두번째 방법
import React, {Component} from "react" //필수

class App extends Component{ //index.js의 component 가 필요없음
    //render 함수를 이용해서 브라우저에 출력한다
    render(){ 
        return (
            <h1>'Hello'</h1>
        )
    }
}

export default App */

/*
세번째 방법
import {Component} from "react" //필수

class App extends Component{ //index.js의 component 가 필요없음
    //render 함수를 이용해서 브라우저에 출력한다
    render(){ 
        return (
            <h1>'Hello'</h1>
        )
    }
}

export default App */