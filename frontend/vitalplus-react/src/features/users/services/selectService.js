export async function getDocumentTypes () {
    const response = await fetch ("@data/selects/documentTypes.jscon");

    return response.jason();
    
}