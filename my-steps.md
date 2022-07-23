# setup

create folder globo
cd into it
npx create-react-app@5 reactweb --template typescript

create github repo: dotnet6-typescript-react-globo
git remote add origin https://github.com/zeng-dong/dotnet6-typescript-react-globo.git
git branch -M "main"
git push -u origin "main"

npm install bootstrap@5

# maybe needed

dotnet dev-certs https --trust
dotnet tool install --global dotnet-ef

# setup API

under root dir 'globo', mkdir Api
cd Api
dotnet new webapi -minimal
