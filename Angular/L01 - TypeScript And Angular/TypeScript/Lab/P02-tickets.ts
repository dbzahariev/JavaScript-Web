class myTicket {
    destination: string;
    price: number;
    status: string;
    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

class myTickets {

    allTickets: [myTicket]

    constructor(destinations: string[], sortingCriteria: string) {
        for(let destination of destinations){
            let arr = destination.split('|')
            let newTicket = new myTicket(arr[0], Number(arr[1]), arr[2])
            this.allTickets.push(newTicket)
        }
        this.allTickets.sort(this.dynamicSort(sortingCriteria))
    }

    dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
}

let myNewTickets = new myTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')