var obj={
MaxMeetingArr:[],
optimizedMeetingArr:[],
availableMeetings:[1,1,2,2,2,4,3,4,3,5],
totalTime:Int=8
,
maxMeeting:function () {
    //function here
    asc=this.availableMeetings.sort()
    var total
    var answerArr=[]
    for (var key in asc) {
        
            while(total<this.totalTime) {
                
                console.log(key)
                this.MaxMeetingArr.push(key)
                total+=key
            }
             
        
    }

return this.MaxMeetingArr
    
}





}

var ans=obj.maxMeeting()
console.log(ans)
