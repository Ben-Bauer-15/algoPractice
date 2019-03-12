function search(start, stop, list){
    if (start == stop){
        return true;
    }
    if (list[start].neighbors.length == 0){
        return false;
    }
    list[start].visited = true;
    for (i in list[start].neighbors){
        const node = list[start].neighbors[i];
        if (!list[node].visited && search(node, stop, list)){
            return true;
        }
    }
    return false;
}

var list = {
    A : {neighbors : ['B', 'C'], visited : false},
    C : {neighbors : [], visited : false},
    B : {neighbors : ['D', 'E', 'A'], visited : false},
    E : {neighbors : [], visited : false},
    D : {neighbors : ['B', 'E'], visited : false}
}

console.log(search('D', 'A', list))