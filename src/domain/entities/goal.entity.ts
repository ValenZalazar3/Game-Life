


export class GoalEntity {
    constructor(
        public id: number,
        public text: string,
        public completedAt?: Date | null
    ) { }

    get isCompletedAt() {
        return !!this.completedAt
    }

    public static fromObject(object: { [key: string]: any }) {
        const { id, text, completedAt } = object;

        if (!id) throw 'Id is required';
        if (!text) throw 'Text is required';

        let newCompletedAt;
        if (completedAt) {
            newCompletedAt = new Date(completedAt);
            if (isNaN(newCompletedAt.getTime())) {
                throw 'CompletedAt is not a valid date'
            }
        } // Forma de validar si es una fecha o no, sin tener que usar paquetes de terceros
        return new GoalEntity(id, text, completedAt)
    }
}
