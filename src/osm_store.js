import {
  Store
} from 'svelte/store.js'
class OSMStore extends Store {
  activateMission(missionId) {
    var missionArray=[]
    for (const iterator of this.get().missions) {
      if(iterator.status=="current"){
       iterator.status="active"
      }
      if(iterator.id==missionId){
        iterator.status="current"
      }
      missionArray.push(iterator)
    }
    this.set('missions',missionArray)
  }
  


}
export default OSMStore