const postmodel = require('../modules/posts.model');
const usermodel = require('../modules/user.model');

module.exports.createpostcontroller = async (req, res) => {
    try {
        const { media, caption } = req.body;
        console.log(req.user._id);

        if (!media) return res.status(400).send({ message: "Media is required" });
        if (!caption) return res.status(400).send({ message: "Caption is required" });

        // ✅ Create the new post
        const newPost = await postmodel.create({ media, caption });

        // ✅ Update the user and ensure the updated user is returned
        const updatedUser = await usermodel.findByIdAndUpdate(
            req.user._id,
            { $push: { posts: newPost._id } },
            { new: true }
        );

        // ✅ Fetch the updated user with populated posts
        const populatedUser = await usermodel.findById(updatedUser._id).populate("posts");

        console.log(populatedUser);

        res.status(200).send({ message: "Post created", post: newPost, user: populatedUser });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
