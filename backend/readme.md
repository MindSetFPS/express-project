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
```