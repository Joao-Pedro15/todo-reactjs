function generateID(){
    return Math.random().toString(36).substr(2, 9)
}


class Item{
    
    constructor(text){
        this.id = generateID()
        this.text = text
    }
}

export default Item