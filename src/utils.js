export const getImageUrl = (path) => {    
    let currentURL = new URL(`./assets/img/${path}`, import.meta.url).href;
    // let stateOfImg =currentURL.includes('undefined');
    
    return currentURL;
};