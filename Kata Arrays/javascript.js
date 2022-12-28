const oldEmployees = ["Sofia", "Joaquin", "Garcia", "Federico", "Ana", "Sol", "Luna", "Pepe"]
const newEmployees = ["Sofia", "Joaquin", "Garcia", "Federico", "Raul", "Jaime", "Sombra", "Vin"]
const updatedEmployees = oldEmployees.concat(newEmployees);




const result = updatedEmployees.reduce((acc,item)=>{
    if(!acc.includes(item)){
      acc.push(item);
    }
    return acc;
  },[])

  console.log(result);
					
  module.exports = result

  
// function updatedEmployeesList() {
//     const result = updatedEmployees.reduce((acc, item) => {
//         if (!acc.includes(item)) {
//             acc.push(item);
//         }
//         return acc;
//     }, [])
//     return result
// }

// updatedEmployeesList()




