console.log("Demonstration of Facebook About class")
console.log("-------------------------------------")

// Class for Facebook About page
class FaceBookAbout {

    // Defining fields or properties of FaceBookAbout class
    private name : string
    private nickName : string
    private about : string
    private socialLink : string
    private birthday : string
    private age : number
    private gender : string
    private languages : string[]
    private course : string
    private college : string
    private place : string
    private relationshipStatus : string
    private friends : string[]

    // Constructor for FaceBookAbout class
    constructor (name:string, nickName:string, about:string, socialLink:string, birthday:string, age:number, gender:string, languages:string[], course:string, college:string, place:string, relationshipStatus:string, friends:string[]) {
        this.name = name
        this.nickName = nickName
        this.about = about
        this.socialLink = socialLink
        this.birthday = birthday
        this.age = age
        this.gender = gender
        this.languages = languages
        this.course = course
        this.college = college
        this.place = place
        this.relationshipStatus = relationshipStatus
        this.friends = friends
    } // end of constructor

    // Methods created under FaceBookAbout class
    getName = () => {
        return this.name
    }
    getNickName = () => {
        return this.nickName
    }
    getAbout = () => {
        return this.about
    }
    getSocialLink = () => {
        return this.socialLink
    }
    getBirthday = () => {
        return this.birthday
    }
    getAge = () => {
        return this.age
    }
    getGender = () => {
        return this.gender
    }
    getLanguages = () => {
        return this.languages
    }
    getCourse = () => {
        return this.course
    }
    getCollege = () => {
        return this.college
    }
    getPlace = () => {
        return this.place
    }
    getRelationshipStatus = () => {
        return this.relationshipStatus
    }
    getFriends = () => {
        return this.friends
    }
    // end of all methods

} // end of FaceBookAbout class

// An instance of the FaceBookAbout class
let myFaceBookProfile = new FaceBookAbout("Imtiyaz Ahmed",
                                          "imti",
                                          "Cool, nice and amicable person",
                                          "#greenVellore",
                                          "6-Sep-1985",
                                          32,
                                          "Male",
                                          ["English", "Hindi", "Malay", "Tamil", "Urdu"],
                                          "Bachelor of Engineering (EEE)",
                                          "Anna University",
                                          "Chennai",
                                          "Married",
                                          ["Sid", "Aadi", "Samir", "Fayaz", "Karthick", "Athiya", "Divya"]
                                        )

// Fetching data by using methods of FaceBookAbout class
console.log("Name: " + myFaceBookProfile.getName())
console.log("Nick name: " + myFaceBookProfile.getNickName())
console.log("About: " + myFaceBookProfile.getAbout())
console.log("Social Link: " + myFaceBookProfile.getSocialLink())
console.log("Birthday: " + myFaceBookProfile.getBirthday())
console.log("Age: " + myFaceBookProfile.getAge())
console.log("Gender: " + myFaceBookProfile.getGender())
console.log("Langauge(s): " + myFaceBookProfile.getLanguages())
console.log("Course: " + myFaceBookProfile.getCourse())
console.log("College: " + myFaceBookProfile.getCollege())
console.log("Place(s): " + myFaceBookProfile.getPlace())
console.log("Relationship status: " + myFaceBookProfile.getRelationshipStatus())
console.log("Friends:")
console.log(myFaceBookProfile.getFriends())
