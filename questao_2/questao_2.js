function q2ContarFrequenciaPalavra(text) {
    // Jeito mais fácil usando ES2019+:
    // const countsOrdered = Object.fromEntries(
    //   Object.entries(counts).sort((a, b) => b[1] - a[1])
    // );
    var words = text.toLowerCase().match(/\b\w+\b/g);
    if (!words)
        return {};
    var counts = {};
    words.forEach(function (word) {
        counts[word] = (counts[word] || 0) + 1;
    });
    var sortedKeys = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });
    var countsOrdered = {};
    for (var _i = 0, sortedKeys_1 = sortedKeys; _i < sortedKeys_1.length; _i++) {
        var key = sortedKeys_1[_i];
        countsOrdered[key] = counts[key];
    }
    return countsOrdered;
}
console.log(q2ContarFrequenciaPalavra("Hello world hello"));
