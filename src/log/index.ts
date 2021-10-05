export default function log(message: string): void {
  const date = new Date();
  console.log(`${date.toLocaleString('pt-BR')} -- ${message} `);
}
