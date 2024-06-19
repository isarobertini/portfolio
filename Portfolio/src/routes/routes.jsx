import { Route } from "react-router-dom";
import { Home } from "../pages/home";
import { WorkOne } from "../pages/sculptures/title1";
import { WorkTwo } from "../pages/sculptures/title2";
import { WorkThree } from "../pages/sculptures/title3";
import { WorkFour } from "../pages/sculptures/title4";
import { WorkFive } from "../pages/sculptures/title5";
import { WorkSix } from "../pages/sculptures/title6";
import { WorkSeven } from "../pages/sculptures/title7";
import { WorkEigth } from "../pages/sculptures/title8";
import { WorkNine } from "../pages/sculptures/title9";
import { WorkTen } from "../pages/sculptures/title10";

import { TextOne } from "../pages/texts/text1";

const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/title1" element={<WorkOne />} />
        <Route path="/title2" element={<WorkTwo />} />
        <Route path="/title3" element={<WorkThree />} />
        <Route path="/title4" element={<WorkFour />} />
        <Route path="/title5" element={<WorkFive />} />
        <Route path="/title6" element={<WorkSix />} />
        <Route path="/title7" element={<WorkSeven />} />
        <Route path="/title8" element={<WorkEigth />} />
        <Route path="/title9" element={<WorkNine />} />
        <Route path="/title10" element={<WorkTen />} />

        <Route path="/text1" element={<TextOne />} />
    </>
);

export default routes;