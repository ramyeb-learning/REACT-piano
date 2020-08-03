// var airports = [
//   "BGI",
//   "CDG",
//   "DEL",
//   "DOH",
//   "DSM",
//   "EWR",
//   "EYW",
//   "HND",
//   "ICN",
//   "JFK",
//   "LGA",
//   "LHR",
//   "ORD",
//   "SAN",
//   "SFO",
//   "SIN",
//   "TLV",
//   "BUD"
// ]

// var routes = [
// ["DSM","ORD"],
// ["ORD","BGI"],
// ["BGI","LGA"],
// ["SIN","CDG"],
// ["CDG","SIN"],
// ["CDG","BUD"],
// ["DEL","DOH"],
// ["DEL","CDG"],
// ["TLV","DEL"],
// ["EWR","HND"],
// ["HND","ICN"],
// ["HND","JFK"],
// ["ICN","JFK"],
// ["JFK","LGA"],
// ["EYW","LHR"],
// ["LHR","SFO"],
// ["SFO","SAN"],
// ["SFO","DSM"],
// ["SAN","EYW"],
// ]

// var startingAirport = "LGA"

// var shortest_route = (airports, startingAirport, routes) => {

//   //Init
//   let depart = startingAirport
//   let poids_depart = 0
//   let visited = []
//   let poubelle = []
//   for (i=0;i<airports.length;i++){
//     if (!(airports[i]==depart)){
//       visited[i] = [airports[i],null]
//     }else{
//       visited[i] = [airports[i],poids_depart]
//     }
//   }


//   //heart
//   while(poubelle.length!=airports.length){
//     for (i=0;i<routes.length;i++){
//       if (routes[i][0]==depart){
//         for(j=0;j<visited.length;j++){
//           if (routes[i][1]==visited[j][0] && (visited[j][1]>poids_depart+1 || visited[j][1]==null)){
//             visited[j][1]=poids_depart+1
//           }
//         }
//       }
//     }
//     poubelle.push(depart)
//     let stack = null
//     let poids_stack = null

//     //Attribution nouveau point départ
//     for(i=0;i<visited.length;i++){
//       if(!(poubelle.includes(visited[i][0]) || visited[i][1]==null)){
//         if(stack==null || poids_stack>visited[i][1]){
//           stack=visited[i][0]
//           poids_stack=visited[i][1]
//         }
//       }
//     }
//     depart=stack
//     poids_depart=poids_stack
//     }
//     return visited
// }

// console.log(shortest_route(airports, startingAirport, routes))

// let manger = '15:00'
// let manger2 = '14:58'
// let [heure, minute] = manger.split(':')
// let [heure2, minute2] = manger2.split(':')

// console.log(heure*60+minute)
// console.log(heure2*60+minute2)





// class Adresse {
// 	constructor(array){
// 		this.maison = array
// 	}

//   get = (key) => {
// 	return this.maison[key]
//   }
//   add = (key,person) => {
//   this.maison[key] = person
//   }
//   delete = (key) => {
// 	  this.maison[key] = ""
//   }
// }

// let person = new Adresse(['maison','dodo'])

// console.log(person.get(0))





// var findMaxAverage = function(nums, k) {
//   var maxMoyenne = 0
//   console.log(k)
//   for (var j = k-1; j<nums.length; j++){
//       let somme = 0
//       for (let i = j - k + 1; i<=j; i++){
//           somme += nums[i]
//       }
//       if (maxMoyenne == null || somme/4>maxMoyenne)
//           maxMoyenne = somme/4
//   }
//   return maxMoyenne
// };

// console.log(findMaxAverage([1,12,-5,-6,50,3], 4))





var contains = (list, x) => {
//Cas ou liste est vide 
if (list.length==0)
    return false
//Cas ou il n’y a que un élément
else if (list.length==1){
if(x==list[0])
    return true
   else
    return false
}
   //La recherche 
else{
    let min = 0
    let max = list.length-1
    let pointer = max/2 //ERREUR
    pointer = Math.floor(pointer)
    let result = false
    console.log("pointer :" + list[pointer])
    console.log("min :" + min)
    console.log("max :" + max)
    console.log("")
    while( !result && min!=max) { //ERREUR COMPARAISON
    if(x==list[pointer]){
      console.log("oui")
      result=true
     }
    if(x>list[pointer])
       min = pointer+1
    else if (x<list[pointer])
      max = pointer-1
   pointer = (max+min)/2
   pointer = Math.floor(pointer)
   console.log("pointer :" + list[pointer])
   console.log("min :" + min)
   console.log("max :" + max)
   console.log("")




}
return result
}
}


var l = [-5,-2,0,1,10,150]
x=12
console.log(l)
console.log(contains(l, 1))