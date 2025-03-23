/**
 * Given a running CAP service, the unit test should be able to get passed.
 *
 * @param {Function} GET - The `axios` function to send a GET request
 * @param {Function} POST - The `` function to send a POST request
 * @param {Function} PATCH - The `axios` function to send a PATCH request
 * @param {Function} DELETE - The `axios` function to send a DELETE request
 * @param {Function} expect - The `chai` function to assert the response
 */
module.exports = async function(GET, POST, PATCH, DELETE, expect) {
  // Test creating a TodoList with status "ACTIVE"
  try {
    // Step 1: Create a new draft TodoList
    const createDraftResponse = await POST('/service/todoList/Todo', {
      title: 'My First TodoList',
      status: 'ACTIVE',
 createdDate: '2023-10-01'
    });
    expect(createDraftResponse.status).to.be.oneOf([200, 201]);

    const { ID } = createDraftResponse.data;

    // Step 2: Activate the draft TodoList
    const activateDraftResponse = await POST(`/service/todoList/TodoLists(ID=${ID}, IsActiveEntity=false)/todoListSrv.draftActivate`);
    expect(activateDraftResponse.status).to.be.oneOf([200, 201]);

  } catch (error) {
    // If any error occurs, fail the test
    expect.fail(`Test failed with error: ${error.message}`);
  }

  // Test creating a TodoList with status other than "ACTIVE"
  try {
    // Attempt to create a new draft TodoList with invalid status
    await POST('/service/todoList/TodoLists', {
      title: 'Invalid TodoList',
      status: 'INACTIVE',
      createdDate: '2023-10-01'
    });
    // If no error is thrown, fail the test
    expect.fail('Expected error was not thrown');
 } catch (error) {
    // Verify the error response message
    expect(error.status).to.equal(400);
    expect(error.response.data.error.message).to.equal('The status must be "ACTIVE" to create a TodoList.');
  }
};