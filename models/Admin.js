const supabase = require('../supabaseClient');

const getAdminByEmail = async (email) => {
    return await supabase
        .from('Admins')
        .select('password')
        .eq('email', email);
};

module.exports = { getAdminByEmail };