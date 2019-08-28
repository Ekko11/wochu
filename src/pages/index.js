import Loadable  from  "react-loadable"
import Loading from "@common/loading"

const Home=Loadable({
    loader:()=>import("./home"),
    loading:Loading
})
const Find=Loadable({
    loader:()=>import("./find"),
    loading:Loading
})
const Order=Loadable({
    loader:()=>import("./order"),
    loading:Loading
})
const Mine=Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})
const Login=Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
const Classify=Loadable({
    loader:()=>import("./classify"),
    loading:Loading
})
const Search=Loadable({
    loader:()=>import("./search"),
    loading:Loading
})
const Details=Loadable({
    loader:()=>import("./details"),
    loading:Loading
})
const Garden=Loadable({
    loader:()=>import("./garden"),
    loading:Loading
})

export{
    Home,
    Find,
    Order,
    Mine,
    Login,
    Classify,
    Search,
    Details,
    Garden
}