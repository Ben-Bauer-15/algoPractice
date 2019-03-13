function buildOrder(proj, dep){
    var outList = {};
    var inList = {};


    for (i in dep){
        const pair = dep[i];
        if (pair[0] in outList){
            outList[pair[0]].push(pair[1]);
        } else { outList[pair[0]] = [pair[1]]; }

        if (pair[1] in inList){
            inList[pair[1]].push(pair[0]);
        } else { inList[pair[1]] = [pair[0]]; }
    }

    for (i in proj){
        if (!outList[proj[i]]){
            outList[proj[i]] = [];
        }
        if (!inList[proj[i]]){
            inList[proj[i]] = [];
        }
    }
    var counter = 0

    for (i in inList){
        console.log(i)
    }
}

var dep = [['A','D'], ['F','B'], ['B','D'],['F','A'],['D','C']]
var proj = ['A','B','C','D','E','F']

buildOrder(proj, dep)