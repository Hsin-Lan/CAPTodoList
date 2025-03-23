/**
 * 
 * @Before(event = { "CREATE" }, entity = "todoListSrv.TodoLists")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    const { status } = request.data;

    if (status !== 'ACTIVE') {
        request.reject(400, 'The status must be "ACTIVE" to create a TodoList.');
    }
}