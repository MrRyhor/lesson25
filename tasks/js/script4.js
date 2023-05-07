const apiEndpoints = {
    allPlayersList: 'https://www.balldontlie.io/api/v1/players',
    getPlayerByID:(id) => {
        const str = 'https://www.balldontlie.io/api/v1/players/'
        const resStr = str + id
        return resStr
    }
}

async function loadAllPlayersList() {
    const url = apiEndpoints.allPlayersList
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => data.data)
            .then(arr => resolve(arr.map(el => el.id)))            
            .catch((err) => reject(err))
    })
}

function getRandomPlayer(list) {
    const randomIndex = Math.floor(Math.random() * list.length)
    console.log(list[randomIndex])
    return list[randomIndex]
}

async function loadPlayerById(id) {
    const url = apiEndpoints.getPlayerByID(id)    
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => resolve (`Name: ${data.first_name + ' ' + data.last_name}\n City: ${data.team.city}\n Team: ${data.team.full_name}`))
        .catch((err) => reject(err))
    })
}
function createDiv(player) {
    const div = document.createElement('div')
    div.innerText = player
    return div
}

async function result() {
    let playersList = await loadAllPlayersList()
    console.log(playersList)
    const randomPlayer = getRandomPlayer(playersList)
    console.log(randomPlayer)
    let player = await loadPlayerById(randomPlayer)
    res1.append(createDiv(player))
}

result()


