$(document).ready(function () {
  $(".fb-album-container").FacebookAlbumBrowser({
      	account: "oldenewsband",
      	accessToken: "498242010371745|bc7452f95cc93afcfec6846cbd985e20",
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
