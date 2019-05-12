import Home from "./pages/home/home";
import Contato from "./pages/contato/contato";

const routesConfig = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/Contato",
        component: Contato,
        exact: true
    }
];

export default routesConfig;