docker build --no-cache -f SQL\Dockerfile.PostgreSql -t fotokiosk1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t fotokiosk1-java/app ../../..
