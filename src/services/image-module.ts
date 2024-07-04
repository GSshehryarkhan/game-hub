import placeholder_image from "../assets/27002.jpg";

const getCroppedUrl = (url: string) => {
    if (!url) return placeholder_image;
    const target = "media/";
    const index = url.indexOf("media/") + "media/".length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedUrl;
