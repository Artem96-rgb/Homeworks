// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

class Employee {
    constructor(_details) {
        this.name = _details.name
        this.position = _details.position
    }
}

let workers = [new Employee({
    name: "John",
    position: "accountant"
}), new Employee({
    name: "Laura",
    position: "manager"
}), new Employee({
    name: "Vasya",
    position: "security guard"
}), new Employee({
    name: "Anna",
    position: "Boss"
}), new Employee({
    name: "Bob Ross",
    position: "Big Boss"
}), new Employee({
    name: "Tonya",
    position: "accountant"
}), new Employee({
    name: "Heisenberg",
    position: "cook"
})
]

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
class Emptable extends Employee {
    constructor(_details) {
        super(_details);
    }

    getHtml(_workers) {

        let buff = `
        <table>
        <thead>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Position</th>
            </tr>
        </thead>
            `
        for (let i = 0; i < _workers.length; i++) {
            const element = _workers[i];
            buff += `<tr> 
            <td>${i + 1}</td>
            <td>${element.name}</td>
            <td>${element.position.toLowerCase()}</td>
            </tr>`
        }

        buff += `</table>`
        document.write(`${buff}`);
    }

}

let e = new Emptable(workers)

e.getHtml(workers);




// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().