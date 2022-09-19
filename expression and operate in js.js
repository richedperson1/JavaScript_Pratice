var arr = [2, 3, 4, 5, 6];
var dist = { Rutvik: 99, golu: 65, ashish: 96 }
for (let a in dist) {
    var len = 20 - a.length

    console.log(a, '-'.repeat(len), ">", dist[a])
}