# IBP-CSS
Repo for SquaredLabs custom CSS for [techpark.uconn.edu](https://techpark.uconn.edu)

** Recommended [pre-commit](https://githooks.com/) script **
```
npm run build
if git status | grep modified out.css; then
 exit 1
else
 git add ./out.css
 exit 0
fi
```

## Install dependencies

`npm install`

## Build into `out.css`

`npm run build`
