const { BlobServiceClient } = require('@azure/storage-blob');
const CONNECT_STR = process.env.CONNECT_STR; //fix connection string

 async function main() {
    // Quick start code goes here
    // Create the BlobServiceClient object which will be used to create a container client
    const blobServiceClient = await BlobServiceClient.fromConnectionString(CONNECT_STR);
    
    // Create a unique name for the container
    const containerName = 'languages';
    const blobName = 'ko/translation.json';
    
    // Get a reference to a container
    const containerClient = await blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    //
    await blockBlobClient.downloadToFile("../public/locales/ko/translation.json", 0);
}
// A helper function used to read a Node.js readable stream into a string
main().then(() => console.log('Done')).catch((ex) => console.log(ex.message));
