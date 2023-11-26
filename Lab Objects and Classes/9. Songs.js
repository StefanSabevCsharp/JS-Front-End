function songs(array){

    class Song{
        constructor(typeList,name,duration){
            this.typeList = typeList;
            this.name = name;
            this.duration = duration;
        }
        printName(){
            console.log(this.name)
        }
    }
    let songsArray = [];

    for (let index = 1; index <= array.length - 2; index++) {
        const line = array[index];
        let [typeList,name,duration] = line.split("_");
        let newSong = new Song(typeList,name,duration);
        songsArray.push(newSong);
    }
    let lastCommand = array.splice(array.length - 1,);
    
    songsArray.forEach(song => {

        if(lastCommand[0] == "all"){
            song.printName();
        }else if(lastCommand[0] === song.typeList){
            song.printName()
        }
    })
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    )