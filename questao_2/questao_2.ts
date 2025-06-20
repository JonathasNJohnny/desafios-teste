function q2ContarFrequenciaPalavra(text: string): Record<string, number> {
  // Jeito mais fácil usando ES2019+:
  // const countsOrdered = Object.fromEntries(
  //   Object.entries(counts).sort((a, b) => b[1] - a[1])
  // );

  const words = text.toLowerCase().match(/\b\w+\b/g);
  if (!words) return {};

  const counts: Record<string, number> = {};
  words.forEach((word) => {
    counts[word] = (counts[word] || 0) + 1;
  });

  const sortedKeys = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  const countsOrdered: Record<string, number> = {};
  for (const key of sortedKeys) {
    countsOrdered[key] = counts[key];
  }

  return countsOrdered;
}

console.log(q2ContarFrequenciaPalavra("Hello world hello"));