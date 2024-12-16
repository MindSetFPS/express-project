import * as Minio from "minio"

console.log(process.env.HOST_URL)
const minioClient = new Minio.Client({
    endPoint: process.env.BUCKET_URL || 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: process.env.MINIO_ACCESS_KEY || "",
    secretKey: process.env.MINIO_SECRET_KEY || ""
});

export default minioClient;