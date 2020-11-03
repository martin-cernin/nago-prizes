const API_KEY: string = '52aa58662927e6828262279bdc2b505a'
const URL: string = 'https://api.imgbb.com/1/upload'

export async function apiPostImage (image: File) {
	const expiration = 60
	const body = new FormData()
	body.append('image', image)

	const response = await fetch(`${URL}?expiration=${expiration}&key=${API_KEY}`, {
		method: 'POST',
		body,
	})
	const json = await response.json()
	return json.data.display_url
}
