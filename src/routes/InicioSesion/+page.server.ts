import { redirect } from "@sveltejs/kit"

export const actions = {
    inicioSesionn: async ({request}) => {
        const formData = await request.formData();
		const data = Object.fromEntries(formData);
		console.log(data);
        redirect(303,'/Libros')
    }

}