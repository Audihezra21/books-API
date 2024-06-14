const supabase = require('../supabaseClient');

module.exports = async (req, res) => {
    const { id } = req.query;

    const { data, error } = await supabase
        .from('books')
        .delete()
        .eq('id', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
};
