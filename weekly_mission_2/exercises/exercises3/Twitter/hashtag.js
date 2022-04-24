// Convirtiendo objeto hashtag a definición de clase Hashtag

export default class Hashtag{
    constructor (word, phrase, numTweetsLastHour){
    this.word = word
    this.phrase = phrase
    this.numTweetsLastHour = numTweetsLastHour
    }

    getGeneralInfo(){
        return `This # ${this.word} have ${this.numTweetsLastHour} of tweets in the last hour`
    }
    getPhrase(){
        return this.phrase
    }
}