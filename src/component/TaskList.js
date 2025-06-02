const TaskList = () => {
  return (
    <div>
      <div class="container">
        <h2 class="mb-4">Task List</h2>
        <div class="table-responsive shadow-sm rounded">
          <table class="table table-hover align-middle">
            <thead class="table-light">
              <tr>
                <th>Owner</th>
                <th>Team</th>
                <th>Tags</th>
                <th>Project Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="status-badge">Outstanding</span>
                </td>
                <td>AC Accounting</td>
                <td>Sept 12, 2018</td>
                <td>UI Design</td>
                <td>10 hrs</td>
              </tr>
              <tr>
                <td>
                  <span class="status-badge">Outstanding</span>
                </td>
                <td>AC Accounting</td>
                <td>Sept 12, 2018</td>
                <td>UI Design</td>
                <td>10 hrs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TaskList;
