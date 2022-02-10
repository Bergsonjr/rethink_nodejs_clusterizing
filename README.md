# Clusterização, Performance e Resiliência no Node.js

## Instalação

```
npm i
```

## Execução

### Singles Process

```
npm run start:process
```

### Modulo Cluster

```
npm run start:cluster
```

### Modulo Cluster + PM2

```
npm run start:pm2
```

## Benchmarking

### Siege <a href="https://www.npmjs.com/package/siege">(Documentação)</a>

#### Singles Process

```sh
siege 'http://localhost:3000/fatorial?n=10' -b -i -t 30s -c 100
```

#### Modulo Cluster

```sh
siege 'http://localhost:3001/fatorial?n=10' -b -i -t 30s -c 100
```

#### Modulo Cluster + PM2

```sh
siege 'http://localhost:3002/fatorial?n=10' -b -i -t 30s -c 100
```

### Autocannon <a href="https://www.npmjs.com/package/autocannon">(Documentação)</a>

#### Singles Process

```
npm run process:metrics
```

#### Modulo Cluster

```
npm run cluster:metrics
```

#### Modulo Cluster + PM2

```
npm run pm2:metrics
```
