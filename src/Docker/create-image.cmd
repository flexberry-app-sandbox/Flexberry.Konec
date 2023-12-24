docker build --no-cache -f SQL\Dockerfile.PostgreSql -t konec/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t konec/app ../..
