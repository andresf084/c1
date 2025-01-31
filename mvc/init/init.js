const user = require('../models/user'),
roles = require('../models/roles'),
student = require('../models/student'),
inventory = require('../models/inventory'),
docentes = require('../models/docentes')

exports.createStudent = function(){
   var newStudent = new student({
      id: "816518152",
      school_id: "894653132A",
      name: "Jose Perez",
      age: 12,
      address: "calle 2 # 4-6",
      tutor:[
          {
              priority: 1,
              name: "Maria LOpEZ",
              age: 41,
              relationship: "MOther",
              phone: 68598518,
              address: "calle 2 # 4-6",
          },
          {
              priority: 2,
              name: "JOSE Perez",
              age: 39,
              relationship: "father",
              phone: 98463198,
              address: "calle 2 # 4-6"
          }
      ],
      grade: 6,
      classroom: "6B",
      teacher: "Carolina arenas",
      //start_date: "2002-11-5",
      lunch_service: true
      //created: "2002-11-2"
   })
   newStudent.save()
}

exports.createDocentes = function(){
   var newDocentes = new docentes({
      name: "JULY",
      /*document: 1010101010,
      specialist: [
         {
            name: "ING",
            university: "UD"
         }
      ],
      status: true,
      cnt_mastery: "N/A",
      cnt_specialization: "DOMOTICA",
      age: 24,
      nacionality: "COLOMBIANA",
      experience_years: 5,
      students_quantity: 20,*/
   })
   //newDocentes.save()
   console.log(newDocentes)
}



/*exports.createUser = function(){
   var newUser = new user({
    name: "JHONSITO",
    phone: "555555",
    password: "123",
    document: 1111760853,
    //status: true,
    addres:{ 
       street: "calle 26",
       kra: "10 # 345",
       number_house: "370"
    }
   })

   newUser.save()

   var newUser = new user({
    name: "JORGE ALBERTO",
    phone: "9999",
    password: "456",
    document: 1111760854,
    status: true,
    addres:{ 
       street: "calle 30",
       kra: "20 # 367",
       number_house: "379"
    }
   })

   newUser.save()
}*/

// exports.createRole = function(){
//    var newRole = new roles({
//       role_id: 001,
//       role_name: "Administrador",
//       role_active_status: true,
//       role_modules:[ 
//         {
//             modules: "Inventory"
//         }
//       ],
      
//    })
// }

// exports.createInventory = function () {
//    let newInventory = new inventory({
//       category: {
//          mainCategory: 'ferreteria',
//          subCategory: 'pintura'
//       },
//       product: {
//          name: 'caneca pintura',
//          partNumber: 'n/a',
//          presentation: 'caneca',
//          quantity: 0.5,
//          unit: 'galones',
//          expiration: {
//             expires: true,
//             expDate: '2025-12-15'
//          }
//       },
//       location: {
//          warehouse: 'consumibles',
//          aisle: 4,
//          shelf: 5,
//          rack: 1,
//       },
//       minQuantity: 0,
//       availableQuantity: 5,
//       created: Date.now(),
//    })
//    newInventory.save()
// }