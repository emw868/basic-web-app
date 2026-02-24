export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "emmawong";
  }

  if (query.toLowerCase().includes("square and a cube")) {
    const numbers = query.match(/\d+/g);
    if (!numbers) return "";
  
    for (let numStr of numbers) {
      const n = parseInt(numStr);
  
      const sqrt = Math.sqrt(n);
      const cbrt = Math.cbrt(n);
  
      if (Number.isInteger(sqrt) && Number.isInteger(cbrt)) {
        return n.toString();
      }
    }
  }
  return "";
}
