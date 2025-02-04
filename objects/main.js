// objects in js.
// array of objects.
// consoling the objects throught loop.

let students = [
    {
        name : "Maxamed",
        class : "cms5a",
        address : {
            city: "Moqdishu",
            district : "Howlwadaag",
            street : "Wadada 30ka",
            houseNumber : "Gur001"
        },
        phone : "+252613666459"
    },

    {
        name : "Cabdalla",
        class : "cms5a",
        address : {
            city: "Moqdishu",
            district : "Howlwadaag",
            street : "Bakaaraha",
            houseNumber : "Gur010"
        },
        phone : "+252613225103"
    },

    {
        name : "Cabdulaahi",
        class : "cms5a",
        address : {
            city: "Moqdishu",
            district : "Howlwadaag",
            street : "Sh.Walaalaha",
            houseNumber : "Gur0105"
        },
        phone : "+252616950942"
    },
]

students.forEach(student => {
    console.log(`Name: ${student.name} \n Class: ${student.class} \n Address: ${student.address.district} \n Phone: ${student.phone}`);
});