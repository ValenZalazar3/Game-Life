

export class CreateGoalDto {
    constructor(
        public readonly text: string
    ) { }

    static create(props: { [key: string]: any }): [string?, CreateGoalDto?] {

        const { text } = props

        if (!text) return ['Text property is required', undefined]

        return [undefined, new CreateGoalDto(text)]

    }
}