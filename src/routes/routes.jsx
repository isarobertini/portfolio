import { Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Art } from "../pages/art";
import { Websites } from "../pages/websites";

const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/websites" element={<Websites />} />
    </>
);

export default routes;