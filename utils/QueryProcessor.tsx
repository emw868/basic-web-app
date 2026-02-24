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

  if (query.toLowerCase().includes("multiplied by")) {
    const nums = query.match(/\d+/g);
    if (!nums || nums.length < 2) return "";
  
    return (parseInt(nums[0]) * parseInt(nums[1])).toString();
  }
  return "";
}
