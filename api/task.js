exports.addTask = ({id, description}) => new Promise(async(res,req) => {
    console.log('id', id);
    console.log('description', description);
    try {
        res({
            success: true
        });
    }
    catch(err) {
        req(err);
    }
});