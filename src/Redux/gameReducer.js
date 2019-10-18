export const deleteFromArr = (index) => {
    return { type: 'DELETE-FROM-ARR', index }
}
export const startGame = () => {
    return { type: 'START-GAME'}
}
export const addToArr = () => {
    return { type: 'ADD-TO-ARR'}
}
export const resetPointArr = () => {
    return { type: 'RESET-POINT-ARR'}
}

export let getRandomIntInclusive=(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomColor=()=>{
      return("rgb("+getRandomIntInclusive(0,255)+","+ getRandomIntInclusive(0,255)+","+getRandomIntInclusive(0,255)+")")
  }

let initialState = {
    gameArr:[],
    gameCount:0,
    pointArr:[],
    gameEnd:false
}
export let gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE-FROM-ARR': {
            let stateCopy = { ...state };
            stateCopy.gameArr = [...state.gameArr]
            let arr = stateCopy.gameArr
            stateCopy.pointArr = [...state.pointArr]
            let point=stateCopy.pointArr
            arr.splice(action.index, 1,)
            point.push("info")
            return stateCopy
        }
        case 'START-GAME':{
            let stateCopy = { ...state };
            stateCopy.gameArr = [...state.gameArr]
            let arr = stateCopy.gameArr
            for(let i=0;i<1;i++){
                arr.push({x:Math.random(),
                    height : getRandomIntInclusive(20,80),
                    width: getRandomIntInclusive(20,80),
                    color:randomColor(),
                    time:getRandomIntInclusive(6000,15000)
                })

            }
            return stateCopy
        }
        case 'ADD-TO-ARR': {
            if (state.gameArr.length < 50
                &&state.gameEnd===false
                ) {
                let stateCopy = { ...state };
                stateCopy.gameArr = [...state.gameArr]
                let arr = stateCopy.gameArr
                arr.push({x:Math.random(),
                    height : getRandomIntInclusive(20,80),
                    width: getRandomIntInclusive(20,80),
                    color:randomColor(),
                    time:getRandomIntInclusive(6000,15000)
                
                })
                return stateCopy
            }
        }
        case 'RESET-POINT-ARR': {
            let stateCopy = { ...state };
            stateCopy.pointArr=[]
            stateCopy.gameArr=[]
            stateCopy.gameEnd=true
            return stateCopy


        }
        default: return state
    }
}