console.log("Demonstration of Facebook About class");
console.log("-------------------------------------");
// Class for Facebook About page
var FaceBookAbout = /** @class */ (function () {
    // Constructor for FaceBookAbout class
    function FaceBookAbout(name, nickName, about, socialLink, birthday, age, gender, languages, course, college, place, relationshipStatus, friends) {
        var _this = this;
        // Methods created under FaceBookAbout class
        this.getName = function () {
            return _this.name;
        };
        this.getNickName = function () {
            return _this.nickName;
        };
        this.getAbout = function () {
            return _this.about;
        };
        this.getSocialLink = function () {
            return _this.socialLink;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getLanguages = function () {
            return _this.languages;
        };
        this.getCourse = function () {
            return _this.course;
        };
        this.getCollege = function () {
            return _this.college;
        };
        this.getPlace = function () {
            return _this.place;
        };
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getFriends = function () {
            return _this.friends;
        };
        this.name = name;
        this.nickName = nickName;
        this.about = about;
        this.socialLink = socialLink;
        this.birthday = birthday;
        this.age = age;
        this.gender = gender;
        this.languages = languages;
        this.course = course;
        this.college = college;
        this.place = place;
        this.relationshipStatus = relationshipStatus;
        this.friends = friends;
    } // end of constructor
    return FaceBookAbout;
}()); // end of FaceBookAbout class
// An instance of the FaceBookAbout class
var myFaceBookProfile = new FaceBookAbout("Imtiyaz Ahmed", "imti", "Cool, nice and amicable person", "#greenVellore", "6-Sep-1985", 32, "Male", ["English", "Hindi", "Malay", "Tamil", "Urdu"], "Bachelor of Engineering (EEE)", "Anna University", "Chennai", "Married", ["Sid", "Aadi", "Samir", "Fayaz", "Karthick", "Athiya", "Divya"]);
// Fetching data by using methods of FaceBookAbout class
console.log("Name: " + myFaceBookProfile.getName());
console.log("Nick name: " + myFaceBookProfile.getNickName());
console.log("About: " + myFaceBookProfile.getAbout());
console.log("Social Link: " + myFaceBookProfile.getSocialLink());
console.log("Birthday: " + myFaceBookProfile.getBirthday());
console.log("Age: " + myFaceBookProfile.getAge());
console.log("Gender: " + myFaceBookProfile.getGender());
console.log("Langauge(s): " + myFaceBookProfile.getLanguages());
console.log("Course: " + myFaceBookProfile.getCourse());
console.log("College: " + myFaceBookProfile.getCollege());
console.log("Place(s): " + myFaceBookProfile.getPlace());
console.log("Relationship status: " + myFaceBookProfile.getRelationshipStatus());
console.log("Friends:");
console.log(myFaceBookProfile.getFriends());
