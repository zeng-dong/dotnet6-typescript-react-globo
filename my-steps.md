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

# debug

in vs code, debug -> Run and Debug to create a launch file
pick Chrome to attach to
before debugging, npm start
hit the debug button

## we can also do this to the api project

we get two launch configurations: ".NET Core Launch (web)", ".NET Core Attach"

# add sqllite to api

under api project
dotnet add package Microsoft.EntityFrameworkCore.Sqllit --version 6.\*
create a folder 'Data' and add HouseEntity.cs

# add external folder to repo

git --work-tree=/ add ../Api/Data

-   if I do this: git --work-tree=/ add ../Api, then /bin, /object, etc all get added, and I don't know how to ignore them
