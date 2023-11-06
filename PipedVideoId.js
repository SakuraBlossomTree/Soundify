function getYouTubeVideoIdByUrl(url) {
    const reg = /^(https?:)?(\/\/)?((www\.|m\.)?piped(-nocookie)?\.video\/((watch)?\?(feature=\w*&)?v?=|embed\/|v?\/|e\/)|piped.video\/)([\w\-]{10,20})/i
    const match = url.match(reg);
    if (match) {
        return match[9];
    } else {
        return null;
    }
}


// URL by https://gist.github.com/rodrigoborgesdeoliveira/987683cfbfcc8d800192da1e73adc486
const testUrls = `
https://piped.video/watch?v=8Kw5HUVh_lY&listen=1
https://piped.video/watch?v=OmuW_v5LoIU&listen=1
`


function test() {
    const urls = testUrls.split('\n').map(e => e.trim()).filter(e => e);

    for (const url of urls) {
        console.log(`${url}  ===>  ${getYouTubeVideoIdByUrl(url)}`);
    }
}

test();

