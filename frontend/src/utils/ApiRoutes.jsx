const ApiRoutes = {
    CREATE_BOOK: {
        path: "/createBook",
        authenticate: false
    },
    ALL_BOOKS: {
        path: "/allBooks",
        authenticate: false
    },
    BOOK_BY_ID: {
        path: "/book/:id",
        authenticate: false
    }

}
export default ApiRoutes