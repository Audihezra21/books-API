const supabase = require('../supabaseClient');

module.exports = async (req, res) => {
    const { name, author, year } = req.body;

    const { data, error } = await supabase
        .from('books')
        .insert([{ name, author, year }]);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(201).json(data);
};
