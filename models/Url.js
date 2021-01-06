const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
	'original_url': {
		type: String,
		required: true
	},
	'shortened_url': {
		type: String,
		required: true
	},
	'created_at': {
		type:Date,
		default:Date.now()
	}
});


module.exports = mongoose.model('Url', UrlSchema);