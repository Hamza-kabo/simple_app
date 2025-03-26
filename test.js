const { addTask, deleteTask, tasks } = require("./script");

// ✅ Reset the task list before each test
beforeEach(() => {
    tasks.length = 0;
});

test("should add a task to the list", () => {
    addTask("Test Task");
    expect(tasks).toContain("Test Task");
});

test("should not add an empty task", () => {
    const result = addTask("");
    expect(result).toBe("Task cannot be empty");
});

test("should delete a task from the list", () => {
    addTask("Task to be deleted");
    deleteTask("Task to be deleted");
    expect(tasks).not.toContain("Task to be deleted");
});
