export const myPromise = new Promise((resolve, reject)=>{
    try {
        setTimeout(()=>{
            // do your stuff
            const success = true;
            if(success)
                resolve("success");
            else reject("failed");
        }, 2000);
    } catch (err) {
        console.error(err);
    } finally {
        console.log("finally called");
    }
});