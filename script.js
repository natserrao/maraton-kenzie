function positions(firstPlace, secondPlace, lastPlace) {

    let competidores = [firstPlace, secondPlace, lastPlace]

    if (competidores[0] == "Daniel") {
        return [firstPlace, secondPlace, lastPlace]
    }
    else if (competidores[1] == "Daniel") {
        return [secondPlace, firstPlace, lastPlace]
    }
    else if (competidores[2] == "Daniel") {
        return [secondPlace, lastPlace, firstPlace]
    }
}

let primeiroPodio = positions("Daniel", "Rafael", "Manoel")
console.log(`1º Colocado: ${primeiroPodio[0]} ` +
    ` 2º Colocado: ${primeiroPodio[1]} ` +
    ` 3º Colocado: ${primeiroPodio[2]} `)

let segundoPodio = positions("Manoel", "Daniel", "Rafael")
console.log(`1º Colocado: ${segundoPodio[0]} ` +
    ` 2º Colocado: ${segundoPodio[1]} ` +
    ` 3º Colocado: ${segundoPodio[2]} `)

let terceiroPodio = positions("Rafael", "Manoel", "Daniel")
console.log(`1º Colocado: ${terceiroPodio[0]} ` +
    ` 2º Colocado: ${terceiroPodio[1]} ` +
    ` 3º Colocado: ${terceiroPodio[2]} `)