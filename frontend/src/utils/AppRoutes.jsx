import Books from "../components/Books";
import Home from "../components/Home";

const AppRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/allBooks",
        element: <Books />
    }
]


export default AppRoutes