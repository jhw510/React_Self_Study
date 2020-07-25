import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import SidebarNavbar from "./SidebarNavbar";
import Esti from "../../move/component/Esti";
import VideoUploadPage from "../../videoUpload/VideoUploadPage";
import MovingType from "../../move/component/MovingType";
import Main from "./Main";
import {MDBBtn} from "mdbreact";
const Home: React.FC = () => {
    return (
        <>



                    <Route exact path={"/"} component={Main}/>

                    <Route path="/estimate">
                        <Esti/>
                    </Route>

                    <Route path={"/videoUpload"} component={VideoUploadPage}/>
                    <Route path={"/movingType"} component={MovingType}/>



        </>
    );
};

export default Home;