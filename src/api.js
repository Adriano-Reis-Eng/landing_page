const API_URL = 'https://script.google.com/macros/s/AKfycbyow6fpVx6PScXzLZVJPJjfnLNJ24UmNVfwlWvh_Mqv7gOLz_jxRW4kA-7hbMt9tNxZ/exec'; 

export const saveContact = async (contactData) => {
    try {        
        const params = new URLSearchParams({
            nome: contactData.name,
            email: contactData.email,
            menssagem: contactData.message
        });

        const url = `${API_URL}?${params.toString()}`;
        
        const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });        
        return {
            success: true,
            message: 'Contato armazenado com sucesso.'
        };
    } catch (error) {
        console.error('Erro:', error);
        throw new Error('Não foi possível enviar o contato. Por favor, tente novamente mais tarde.');
    }
}; 