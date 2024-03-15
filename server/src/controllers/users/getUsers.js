const getUsers = async (req, res, next) => {
    try {
        res.send("No saved user were detected!");
    }
    catch (error) {
        next(error);
    }
}


module.exports = getUsers;