docker build --no-cache -f SQL\Dockerfile.PostgreSql -t konec-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t konec-java/app ../../..
