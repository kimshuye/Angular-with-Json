# Angular-with-Json

- Render Json UI
- Render Json CRUD


## Install Nodejs


```bash
# Using Mac
brew install node@15

# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_15.x | bash -
apt-get install -y nodejs

```


output:


```bash
node -v
npm -v
# v15.4.0
# 7.0.15
```

## Install Angular 8 by angular/cli@10.0.5

```bash
npm install --global @angular/cli@10.0.5

```

## Angular cli version

```bash
ng version

```

output:

```bash

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 10.0.8
Node: 15.4.0
OS: darwin x64

Angular: 10.0.14
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.1000.8
@angular-devkit/build-angular     0.1000.8
@angular-devkit/build-optimizer   0.1000.8
@angular-devkit/build-webpack     0.1000.8
@angular-devkit/core              10.0.8
@angular-devkit/schematics        10.0.8
@angular/cli                      10.0.8
@ngtools/webpack                  10.0.8
@schematics/angular               10.0.8
@schematics/update                0.1000.8
rxjs                              6.5.5
typescript                        3.9.7
webpack                           4.43.0

```

Add the following to ```~/.npmrc``` (same directory as package.json):
```
engine-strict=true
```


