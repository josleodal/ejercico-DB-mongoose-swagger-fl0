module.exports = {
    components: {
        schemas: {
            Task: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        format: 'uuid',
                        description: 'Task identification number',
                        example: '6201064b0028de7866e2b2c4',
                    },
                    title: {
                        type: 'string',
                        description: 'Title of the task',
                        example: 'Complete documentation',
                    },
                    completed: {
                        type: 'boolean',
                        description: 'Status of task completion',
                        example: false,
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Date and time of task creation',
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Date and time of task last update',
                    },
                },
            },
        },
    },
};