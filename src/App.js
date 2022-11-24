import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Posts from "./pages/posts";
import Registration from "./pages/registration";
import Post from "./pages/post";
import Authorization from "./pages/authorization";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Posts/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/authorization" element={<Authorization/>}/>
                <Route path="/post/:id" element={<Post/>}/>
            </Routes>
        </>
    );
}

export default App;
