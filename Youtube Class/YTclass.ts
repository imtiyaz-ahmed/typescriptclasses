console.log("Demonstration of youtube video class")
console.log("------------------------------------")

// Class for youtube video page
class YoutubeVideo {

    // Defining fields or properties of YoutubeVideo class
    private title : string
    private views : string
    private likes : number
    private dislikes : number
    private channelName : string
    private publishDate : string
    private subscribeInfo : string
    private description : string
    private channelCategory : string
    private licence : string
    private comments : string[]
    private relatedVideos : string

    // Constructor for YoutubeVideo class
    constructor (title:string, views:string, likes:number, dislikes:number, channelName:string, publishDate:string, subscribeInfo:string, description:string, channelCategory:string, licence:string, comments:string[], relatedVideos:string) {
        this.title = title
        this.views = views
        this.likes = likes
        this.dislikes = dislikes
        this.channelName = channelName
        this.publishDate =  publishDate
        this.subscribeInfo = subscribeInfo
        this.description = description
        this.channelCategory = channelCategory
        this.licence = licence
        this.comments = comments
        this.relatedVideos = relatedVideos
    } // end of constructor

    // Methods created under YoutubeVideo class
    getTitle = () => {
        return this.title
    }
    getNumberOfViews = () => {
        return this.views
    }
    getNumberOfLikes = () => {
        return this.likes
    }
    getNumberOfDislikes = () => {
        return this.dislikes
    }
    getChannelName = () => {
        return this.channelName
    }
    getPublishDate = () => {
        return this.publishDate
    }
    getSubscribeInfo = () => {
        return this.subscribeInfo
    }
    getDescription = () => {
        return this.description
    }
    getChannelCategory = () => {
        return this.channelCategory
    }
    getLicence = () => {
        return this.licence
    }
    getAllComments = () => {
        return this.comments
    }
    getRelatedVideos = () => {
        return this.relatedVideos
    }
    // end of all methods

} // end of YoutubeVideo class

// An instance of the YoutubeVideo class 
let myVideo = new YoutubeVideo("Rise and fall of Andalus",
                                "150,288 views",
                                98477,
                                178,
                                "Funbay",
                                "11-Jan-2018",
                                "1.5K",
                                "This is a short documentary of how the power of islamic Al Andalus rose and fallen in history",
                                "Films",
                                "Standard YouTube Licence",
                                ["Awesome documentary",
                                "Nice one",
                                "Would like to see more such historic films",
                                "Not very interesting"],
                                "There are no related videos present yet"
                            )

// Fetching data by using methods of YoutubeVideo class
console.log("Title: " + myVideo.getTitle())
console.log("Number of views: " + myVideo.getNumberOfViews())
console.log("Likes: " + myVideo.getNumberOfLikes())
console.log("Dislikes: " + myVideo.getNumberOfDislikes())
console.log("Channel: " + myVideo.getChannelName())
console.log("Published on: " + myVideo.getPublishDate())
console.log("Subscribe: " + myVideo.getSubscribeInfo())
console.log("Description: " + myVideo.getDescription())
console.log("Category: " + myVideo.getChannelCategory())
console.log("Licence: " + myVideo.getLicence())
console.log("Comments:")
console.log(myVideo.getAllComments())
console.log("Related videos: "+ myVideo.getRelatedVideos())
