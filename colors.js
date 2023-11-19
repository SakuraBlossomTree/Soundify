const commonColor = {

    commonWhite: '#FFFFFF',
    commonBlack: "#000000",
    activeColor: '#DE5E69',
    deactiveColor: '#DE5E6950',
    boxActiveColor: '#DE5E6940',

}

const light = {

    themeColor: "#FFFFFF",
    white: '#000000',
    sky: "#DE5E69",
    gray: 'gray',
    ...commonColor,

};

const dark = {
    
    themeColor: "#282a36",
    white: "#f8f8f2",
    sky: "#8be9fd",
    gray: '#6272a4',
    ...commonColor,

};

export default { light, dark };
