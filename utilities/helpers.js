function StrRandom() {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

async function findUniqueString(model, url) {
	const record = await model.find({ shortened_url: url });
	
	return record
}

module.exports = {
  StrRandom: StrRandom,
  findUniqueString:findUniqueString

};


