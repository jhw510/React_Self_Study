import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import SidebarNavbar from "./SidebarNavbar";
import Estimate from "../../move/component/Estimate";
import VideoUploadPage from "../../videoUpload/VideoUploadPage";
import Main from "./Main";
const Home: React.FC = () => {
    return (
        <>
            <SidebarNavbar/>
           <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={Main}/>
                    <Route path={"/estimate"} component={Estimate}/>
                    <Route path={"/videoUpload"} component={VideoUploadPage}/>
                </Switch>
           </BrowserRouter>

        </>
    );
};

export default Home;