docker pull microsoft/mssql-server-linux
docker stop MyServer
docker rm MyServer
docker run -d --name MyServer -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=myPassw0rd' -p 1433:1433 microsoft/mssql-server-linux
# xp_readerrorlog 
#mssql -u sa -p myPassw0rd
#pwsh
 