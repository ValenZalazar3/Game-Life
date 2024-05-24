


export class GoalEntity {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public createdAt?: Date | null
    ) { }

    get isCreatedAt() {
        return !!this.createdAt
    }

    public static fromObject(object: { [key: string]: any }) {
        const { id, title, description, createdAt } = object;

        if (!id) throw 'Id is required';
        if (!title) throw 'Title is required';
        if (!description) throw 'description is required';

        let newCreatedAt;
        if (createdAt) {
            newCreatedAt = new Date(createdAt);
            if (isNaN(newCreatedAt.getTime())) {
                throw 'createdAt is not a valid date'
            }
        }
        return new GoalEntity(id, title, description, createdAt)
    }
}

