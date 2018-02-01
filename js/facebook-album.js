$(document).ready(function () {
  $(".fb-album-container").FacebookAlbumBrowser({
      	account: "oldenewsband",
      	accessToken: "2016452741957439|BYawI0UQYMTd3CSs0rb-ejPVuLg",
        skipAlbums: ["Profile Pictures", "Cover Photos"],
        showComments: true,
        commentsLimit:0,
        showAccountInfo: false,
        showImageCount: false,
        showImageText: false,
        shareButton: false,
        thumbnailSize: 200,
        lightbox: true,
        photosCheckbox: false,
		pluginImagesPath: "img/",
        likeButton: false,
        shareButton: false,
        photoChecked: function(photo){
            console.log("PHOTO CHECKED: " + photo.id + " - " + photo.url + " - " + photo.thumb);
            console.log("CHECKED PHOTOS COUNT: " + this.checkedPhotos.length);
        },
        photoUnchecked: function (photo) {
            console.log("PHOTO UNCHECKED: " + photo.id + " - " + photo.url + " - " + photo.thumb);
            console.log("CHECKED PHOTOS COUNT: " + this.checkedPhotos.length);
        },
        albumSelected: function (photo) {
            console.log("ALBUM CLICK: " + photo.id + " - " + photo.url + " - " + photo.thumb);
        },
        photoSelected: function (photo) {
            console.log("PHOTO CLICK: " + photo.id + " - " + photo.url + " - " + photo.thumb);
        }
    });
});
