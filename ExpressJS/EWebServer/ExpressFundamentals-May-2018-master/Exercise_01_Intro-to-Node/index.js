const storage = require('./storage')

function putMyGDPRSensitiveInfo() {
    storage.put('name', 'Alex');
    storage.put('familyName', 'Chobanov');
    storage.put('age', 24);
    storage.put('hobbies', {
        games: [
            "Warcraft III",
            "Starcraft II", 
            "Dishonored",
            "World of Warcraft",
            "Heroes of the Storm",
            "DnD 5 edition",
            "Vampires the Masquerade"
        ],
        movies:  [
            "Inception", 
            "Presige", 
            "The Dark Knight",
            "Warcraft"
        ],
        sports: [
            "Calisthenics",
            "Riding a byke",
            "Hiking"
        ],
    })
}

function getMyGDPRSensitiveInfo() {
    let name = storage.get('name');
    let familyName = storage.get('familyName');
    let age = storage.get('age');
    let hobbies = storage.get('hobbies');
    
    console.log(
        "Alex's private, super-secret, mega dooper sensitive GDPR information. Rejoice\n",
        "-----------------------------------------------------------------------------\n",
        `Full name: ${name} ${familyName}\n`,
        'Telephone: no information, ha-ha\n',
        `Age: ${age}\n`,
        `Hobbies: `);
    for (let hobby in hobbies) {
        console.log(`-- ${hobby}: ${hobbies[hobby].join(', ')}`);
    }
}


// Write your storage calls here.