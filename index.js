// Start connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/studymongo', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Conectado ao mongodb !");
});


//Create Schema

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    work: String
});

// Create model (the "Pessoa" represents collecton)

const Person = mongoose.model("Pessoa", personSchema);

const davi = new Person({
    name: "Davi",
    age: 20,
    work: "FullStack developer"
});

const joao = new Person({
    name: "João",
    age: 20,
    work: "Front-end developer"
});

// Insert datas

// davi.save(function(err){
//     if(err) {
//         console.log(err)
//     }
// });

// joao.save()

// Find persons

// Person.findOne({ name: "Davi" }, function(err, person){
//     console.log(person)
// });

// Insert Manydatas

// Person.insertMany([
//     {name: "Pedro", age: 34, work: "Nada"},
//     {name: "Luisa", age: 44, work: "Nada"},
//     {name: "Laura", age: 89, work: "Adm"}
// ]);

// Get all persons

async function getPersons() {
    const persons = await Person.find({}).exec();
    console.log(persons)
}

// Delete persons

async function getPerson(name) {
    const person = await Person.find({name: name}).exec();
    if(person.length === 0) {
        console.log("Esta pessoa não existe")
    } else{
        console.log(person)
    }
}

// getPerson("Pedro")

// Person.deleteOne({ name: "Pedro" }).exec();

// getPerson("Pedro")

// Update datas

// getPerson("Luisa")
// Person.updateOne({ name: "Luisa"}, {work: "Fazendo adm"}).exec()
// getPerson("Luisa")

