# BaseAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## RUNNIG

(1) Run internal backend app

```
yarn dev
```

(2) Run frontend app

```
ng serve
```

## DEVELOPMENT

(1) If dev using 2 machines to verify, using command following:

```
ng serve --host 0.0.0.0
```

(2) Generar un componente:

```
ng g c shared/components/header -m=app --skip-tests
```

(3) Generar una página con submódulos:

```
ng g m pages/products -m=app --route products
```

(4) Generar un servicio:

```
ng g s pages/products/services/products --skip-tests
```
