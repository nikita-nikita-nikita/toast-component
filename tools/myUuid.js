// in real project we must use uuid, but in this case, i don't want to add some extra dependencies
function getUuid() {
    return String(((+new Date)*Math.random()*1e8).toString(16))
}

export default getUuid;
