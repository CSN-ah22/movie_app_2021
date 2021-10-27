import "./App.css"
import { HashRouter , Route} from 'react-router-dom'
import About from './routes/About'
import Home from "./routes/Home"

function App(){
    return(
        <HashRouter>
            <Route path='/about' component={Home} />
            <Route path='/about' component={About} />
        </HashRouter>
    )
}

export default App; //까먹지 말기
