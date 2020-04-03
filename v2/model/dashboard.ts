import { User } from "./user"

export class Dashboard {
    id: number
    label: string
    price: number
    owner: User

    constructor(data: any) {
        if (data) {
            this.id = data.id
            this.label = data.label
            this.price = data.price
            this.owner = data.owner
        }
    }
}