const API_URL = 'https://script.google.com/macros/s/AKfycbxOPQwlJ6J7nY-eevM9qe1dz27k9FfLknNzgISe3dafaa_mef9-uSKRzT2QMiq3u3Nj/exec'; 

export const saveContact = async (contactData) => {
    try {        
        const params = new URLSearchParams({
            nome: contactData.name,
            email: contactData.email,
            telefone: contactData.phone,
            mensagem: contactData.message
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