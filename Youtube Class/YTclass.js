console.log("Demonstration of youtube video class");
console.log("------------------------------------");
// Class for youtube video page
var YoutubeVideo = /** @class */ (function () {
    // Constructor for YoutubeVideo class
    function YoutubeVideo(title, views, likes, dislikes, channelName, publishDate, subscribeInfo, description, channelCategory, licence, comments, relatedVideos) {
        var _this = this;
        // Methods created under YoutubeVideo class
        this.getTitle = function () {
            return _this.title;
        };
        this.getNumberOfViews = function () {
            return _this.views;
        };
        this.getNumberOfLikes = function () {
            return _this.likes;
        };
        this.getNumberOfDislikes = function () {
            return _this.dislikes;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getPublishDate = function () {
            return _this.publishDate;
        };
        this.getSubscribeInfo = function () {
            return _this.subscribeInfo;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getChannelCategory = function () {
            return _this.channelCategory;
        };
        this.getLicence = function () {
            return _this.licence;
        };
        this.getAllComments = function () {
            return _this.comments;
        };
        this.getRelatedVideos = function () {
            return _this.relatedVideos;
        };
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.channelName = channelName;
        this.publishDate = publishDate;
        this.subscribeInfo = subscribeInfo;
        this.description = description;
        this.channelCategory = channelCategory;
        this.licence = licence;
        this.comments = comments;
        this.relatedVideos = relatedVideos;
    } // end of constructor
    return YoutubeVideo;
}()); // end of YoutubeVideo class
// An instance of the YoutubeVideo class 
var myVideo = new YoutubeVideo("Rise and fall of Andalus", "150,288 views", 98477, 178, "Funbay", "11-Jan-2018", "1.5K", "This is a short documentary of how the power of islamic Al Andalus rose and fallen in history", "Films", "Standard YouTube Licence", ["Awesome documentary",
    "Nice one",
    "Would like to see more such historic films",
    "Not very interesting"], "There are no related videos present yet");
// Fetching data by using methods of YoutubeVideo class
console.log("Title: " + myVideo.getTitle());
console.log("Number of views: " + myVideo.getNumberOfViews());
console.log("Likes: " + myVideo.getNumberOfLikes());
console.log("Dislikes: " + myVideo.getNumberOfDislikes());
console.log("Channel: " + myVideo.getChannelName());
console.log("Published on: " + myVideo.getPublishDate());
console.log("Subscribe: " + myVideo.getSubscribeInfo());
console.log("Description: " + myVideo.getDescription());
console.log("Category: " + myVideo.getChannelCategory());
console.log("Licence: " + myVideo.getLicence());
console.log("Comments:");
console.log(myVideo.getAllComments());
console.log("Related videos: " + myVideo.getRelatedVideos());
