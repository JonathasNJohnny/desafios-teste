function padStart2(str) {
    var s = String(str);
    return s.length >= 2 ? s : "0" + s;
}
function q3TratarDatas(data) {
    var monthMap = {
        janeiro: "01",
        jan: "01",
        fevereiro: "02",
        fev: "02",
        março: "03",
        mar: "03",
        abril: "04",
        abr: "04",
        maio: "05",
        junho: "06",
        jun: "06",
        julho: "07",
        jul: "07",
        agosto: "08",
        ago: "08",
        setembro: "09",
        set: "09",
        outubro: "10",
        out: "10",
        novembro: "11",
        nov: "11",
        dezembro: "12",
        dez: "12",
    };
    if (!data)
        return null;
    var formatDate = function (dateObj) {
        var year = dateObj.getFullYear();
        var month = padStart2(dateObj.getMonth() + 1);
        var day = padStart2(dateObj.getDate());
        return "".concat(year, "-").concat(month, "-").concat(day);
    };
    if (data instanceof Date && !isNaN(data.getTime())) {
        return formatDate(data);
    }
    if (typeof data === "string") {
        var normalized = data.replace(/-/g, "/");
        var partes = normalized.split("/");
        if (partes.length === 3) {
            var day = partes[0], month = partes[1], year = partes[2];
            if (year.length === 4 &&
                !isNaN(Number(day)) &&
                !isNaN(Number(month)) &&
                !isNaN(Number(year))) {
                return "".concat(year, "-").concat(padStart2(month), "-").concat(padStart2(day));
            }
        }
        var regex = /(\d{1,2})\s+(?:de\s+)?([a-zçãéê]+)\s+(?:de\s+)?(\d{4})/i;
        var dataFiltrada = data.toLowerCase();
        var match = dataFiltrada.match(regex);
        if (match) {
            var day = padStart2(match[1]);
            var monthNome = match[2].trim().toLowerCase();
            var year = match[3];
            var month = monthMap[monthNome];
            if (month) {
                return "".concat(year, "-").concat(month, "-").concat(day);
            }
        }
    }
    return null;
}
var datasParaTratar = [
    "30/11/2022",
    "01 dez 2022",
    "25/12/2022",
    "31 de dezembro de 2022",
];
datasParaTratar.forEach(function (data) {
    console.log(q3TratarDatas(data));
});
