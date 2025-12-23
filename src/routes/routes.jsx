import { Route } from "react-router-dom";
import { Home } from "../pages/home";
import { WorkDetail } from "../reusableComponents/WorkDetail";
import { Websites } from "../pages/websites";
import { Info } from "../pages/info";
import { Diploma } from "../pages/diploma";
import { CriticalMoments } from "../pages/criticalMoments";
import { SiteSpecifics } from "../pages/siteSpecifics";

const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/work/:workId" element={<WorkDetail />} />
        <Route path="/info" element={<Info />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/siteSpecifics" element={<SiteSpecifics />} />
        <Route path="/diploma" element={<Diploma />} />
        <Route path="/criticalMoments" element={<CriticalMoments />} />
    </>
);

export default routes;
