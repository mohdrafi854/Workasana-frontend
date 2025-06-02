const TaskForm = () => {
  return (
    <div>
      <div class="container mt-4">
        <form>
          <div class="mb-3">
            <label for="taskName" class="form-label">
              Task Name
            </label>
            <input
              type="text"
              class="form-control"
              id="taskName"
              placeholder="Enter task name"
            />
          </div>

          <div class="mb-3">
            <label for="projectName" class="form-label">
              Project Name
            </label>
            <select class="form-select" id="projectName">
              <option selected disabled>
                Select a project
              </option>
              <option value="alpha">Project Alpha</option>
              <option value="beta">Project Beta</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="owner" class="form-label">
              Owner
            </label>
            <select class="form-select" id="owner" multiple>
              <option value="alice">Alice</option>
              <option value="bob">Bob</option>
              <option value="charlie">Charlie</option>
            </select>
            <small class="form-text text-muted">
              Hold Ctrl (Windows) or Command (Mac) to select multiple owners.
            </small>
          </div>

          <div class="mb-3">
            <label for="team" class="form-label">
              Team
            </label>
            <select class="form-select" id="team">
              <option selected disabled>
                Select a team
              </option>
              <option value="team1">Team Red</option>
              <option value="team2">Team Blue</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="tags" class="form-label">
              Tags
            </label>
            <select class="form-select" id="tags" multiple>
              <option value="urgent">Urgent</option>
              <option value="feature">Feature</option>
              <option value="bug">Bug</option>
              <option value="research">Research</option>
            </select>
            <small class="form-text text-muted">
              Hold Ctrl (Windows) or Command (Mac) to select multiple tags.
            </small>
          </div>

          <div class="mb-3">
            <label for="timeToComplete" class="form-label">
              Time to Complete (days)
            </label>
            <input
              type="number"
              class="form-control"
              id="timeToComplete"
              min="1"
              placeholder="Enter number of days"
            />
          </div>

          <div class="mb-3">
            <label for="status" class="form-label">
              Status
            </label>
            <select class="form-select" id="status">
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
