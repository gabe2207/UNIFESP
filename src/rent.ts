import { Bike } from "./bike";
import { User } from "./user";

export class Rent{
    private constructor(
        public bike: Bike,
        public user: User,
        public dateFrom: Date,
        public dateTo: Date,
        public dateReturned?: Date
    ) {}

    static create(rent: Rent[], bike:Bike, user: User, startDate: Date, endDate: Date){
        const canCreate = Rent.canRent(rent, startDate, endDate)
        if(canCreate){
            return new Rent(bike, user, startDate,endDate)
        }
        throw new Error('Overlapping dates for this rent')
    }

    static canRent(rent: Rent[], startDate: Date, endDate: Date):
    boolean{
        return !rent.some(rent =>{
            return startDate <= rent.dateTo && endDate >= rent.dateFrom
        }) 
    }
}

const bike = new Bike('Bike1', 'mountain', 30, 100, 100.5,'my desc',5,[])
const user= new User('teste', 'teste@gmal.com','123')
const today = new Date()
const twodaysAfterTomorrow = new Date()
const twodays = new Date()
const tomorrow = new Date()
const twoDaysLater = new Date()
twoDaysLater.setDate(twoDaysLater.getDate() + 2)
tomorrow.setDate(tomorrow.getDate() + 1)
twodaysAfterTomorrow.setDate(twodaysAfterTomorrow.getDate() + 2)
const rent1 = Rent.create([], bike, user, today, twoDaysLater)
const rent2 = Rent.create([rent1], bike,user,tomorrow, twodaysAfterTomorrow)

console.log(rent1)
console.log(rent2)