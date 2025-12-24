import home from "./pages-data/home";
import gpon from "./pages-data/gpon";
import digitalWeek from "./pages-data/digitalWeek";
import vzor from "./pages-data/vzor";
import advent from "./pages-data/advent.js";

const pagesConfig = {
    ...home,
    ...gpon,
    ...digitalWeek,
    ...vzor,
    ...advent
};

export default pagesConfig;
