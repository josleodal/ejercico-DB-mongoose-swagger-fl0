module.exports = {
    paths: {
        "/create": {
            post: {
                tags: ["Tasks"],
                summary: "Create a task",
                operationId: "createTask",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            },
                            example: {
                                title: "New Task",
                                completed: false,
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Task created successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            }
        },
        "/": {
            get: {
                tags: ["Tasks"],
                summary: "Get all tasks",
                operationId: "getTasks",
                responses: {
                    200: {
                        description: "List of tasks",
                        content: {
                            "application/json": {
                                example: [
                                    {
                                        _id: "6201064b0028de7866e2b2c4",
                                        title: "Sample Task 1",
                                        completed: false,
                                       
                                    },
                                    {
                                        _id: "6201064b0028de7866e2b2c5",
                                        title: "Sample Task 2",
                                        completed: true,
                                      
                                    },
                                ],
                            },
                        },
                    },
                    500: {
                        description: "Server error",
                    },
                },
            },
        },
        "/id/{_id}": {
            get: {
                tags: ["Tasks"],
                summary: "Get a task by ID",
                operationId: "getTaskById",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        description: "ID of the task",
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Task details",
                        content: {
                            "application/json": {
                                example: {
                                    _id: "6201064b0028de7866e2b2c4",
                                    title: "Sample Task",
                                    completed: true,
                               
                                },
                            },
                        },
                    },
                    500: {
                        description: "Server error",
                    },
                },
            },
            put: {
                tags: ["Tasks"],
                description: "Update Task",
                operationId: "updateTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        description: "Id of Task to be updated",
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task" },
                            example: {
                                title: "Updated Task Title",
                                completed: true,
                            },
                        },
                    },
                },
                responses: {
                    200: { description: "Task updated successfully" },
                    500: { description: "Server error" },
                },
            },
            delete: {
                tags: ["Tasks"],
                summary: "Delete a task",
                operationId: "deleteTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        description: "ID of the task",
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Task deleted",
                        content: {
                            "application/json": {
                                example: {
                                    message: "Task successfully deleted",
                                },
                            },
                        },
                    },
                    500: { description: "Server error" },
                },
            },
        },
        "/markAsCompleted/{_id}": {
            put: {
                tags: ["Tasks"],
                summary: "Mark a task as completed",
                operationId: "markTaskAsCompleted",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        description: "ID of the task",
                        schema: {
                            type: "string",
                        },
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task" },
                            example: {
                                completed: true,
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Task successfully marked as completed",
                    },
                    500: { description: "Server error" },
                },
            },
        },
    },
};
