import minioClient from '../../shared/Minio';

// Here we are not following ddd
export default function createImage(originalname: string, buffer: Buffer): string {
    minioClient.putObject("app", originalname, buffer)
    return "http://192.168.1.140:9000/app/" + originalname;
}