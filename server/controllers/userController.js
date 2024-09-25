const User = require('../models/user');

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save(user);
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    };
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(400).json({ message: 'Something went wrong' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    };
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(400).json({ message: 'Something went wrong' })
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        if (!deletedUser) {
            return res.status(400).json({ message: 'Something went wrong' });
        }
        res.status(200).json({ message: 'User deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
};