import { Route } from "react-router-dom";
import { Home } from "../pages/home";
import { WorkDetail } from "../reusableComponents/WorkDetail";
import { Websites } from "../pages/websites";
import { Info } from "../pages/info";

const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/work/:workId" element={<WorkDetail />} />
        <Route path="/info" element={<Info />} />
        <Route path="/websites" element={<Websites />} />
    </>
);

export default routes;