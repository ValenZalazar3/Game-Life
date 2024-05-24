


export class UpdateGoalDto {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly createdAt?: Date,
    ) { }

    get values() {
        const returnObj: { [key: string]: any } = {}
        if (this.description) returnObj.description = this.description;
        if (this.title) returnObj.title = this.title;
        if (this.createdAt) returnObj.createdAt = this.createdAt;

        return returnObj
    }



    static create(props: { [key: string]: any }): [string?, UpdateGoalDto?] {

        const { id, title, description, createdAt } = props
        let newCreatedAt = createdAt;

        if (!description) return ['Description property is required', undefined]
        if (!title) return ['Title property is required', undefined]

        if (!id) return ['Id property is required', undefined]


        if (createdAt) {
            newCreatedAt = new Date(createdAt);
            if (newCreatedAt.toString() === 'Invalid Date') {
                return ['createdAt must be a valid date']
            };
        };

        return [undefined, new UpdateGoalDto(id, title, description, newCreatedAt)]

    }
}