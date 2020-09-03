export const  sendEmail = (fields) => {
	fetch('https://nishla-email-sender.herokuapp.com/', {
		method: 'POST',
		body: JSON.stringify({...fields}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((result) => {
		alert('Email sent')
		return result
	}).catch((e) => {
		console.error(e)
	})
}