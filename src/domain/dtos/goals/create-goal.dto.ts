

export class CreateGoalDto {
    constructor(
        public readonly title: string,
        public readonly description: string,

    ) { }

    static create(props: { [key: string]: any }): [string?, CreateGoalDto?] {

        const { title, description } = props

        if (!title) return ['Title property is required', undefined]
        if (!description) return ['Description property is required', undefined]

        return [undefined, new CreateGoalDto(title, description)]

    }
}