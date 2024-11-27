## Structure

```
    backend/
        entity/
            domain/ -- imports from itself -- rarely change
                entities/
                value-objects/
            app/  -- imports from domain -- sometimes changes
                use-case-implementations/
                integrations/
            infra/ -- imports from application -- constantly change
                persistance/
```

#### Dotenv

Crea un archivo en la raíz del proyecto llamado `.env` llena el archivo con la siguiente información:

```bash
MYSQL_HOST=127.0.0.1
MYSQL_USER=root
MYSQL_PORT=3306
MYSQL_PASSWORD=password
MYSQL_DATABASE=app
ENV=env                     # makes server accept cors

BUCKET_URL=http://172.17.0.3:9000
BUCKET_NAME=app

NGROK_AUTHTOKEN=string

MINIO_ROOT_USER=user
MINIO_ROOT_PASSWORD=password
MINIO_ACCESS_KEY=access_key
MINIO_SECRET_KEY=secret_key

```