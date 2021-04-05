
const target = location.hash;
const langValue = location.search.substring(1);
const browserLang = navigator.language || navigator.userLanguage;
const langCode5 = browserLang.substr(0, 5);
const langCode3 = browserLang.substr(0, 3);
const langCode2 = browserLang.substr(0, 2);

if (langValue === "lang=en") {

} else if (langCode3 === "fil") {
    window.location.replace('fil/' + target)
} else if (['nb', 'no', 'nn'].indexOf(langCode2) >= 0) {
    window.location.replace('nb/' + target)
} else if (['hr', 'sr', 'bs'].indexOf(langCode2) >= 0) {
    window.location.replace('hr/' + target)
} else if (['cs', 'sk'].indexOf(langCode2) >= 0) {
    window.location.replace('cs/' + target)
} else if (['af', 'da', 'de', 'es', 'fr', 'id', 'it', 'sw', 'hu', 'ms', 'nl', 'pl', 'pt',
    'ro', 'sq', 'sl', 'fi', 'sv', 'vi', 'tr', 'ru', 'bg', 'el', 'hi', 'th', 'ja', 'ko', 'zh', 'ar', 'fa'].indexOf(langCode2) >= 0) {
    window.location.replace(langCode2 + '/' + target)
} else {
    fetch('https://ipinfo.io/json?token=d0930e5241b7f2')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let country = data.country;
            if (country === "US") {
                window.location.replace('en-us/' + target)
            } else if (country === "GB") {
                window.location.replace('en-gb/' + target)
            } else if (country === "CA") {
                window.location.replace('en-ca/' + target)
            } else if (country === "AU") {
                window.location.replace('en-au/' + target)
            } else if (country === "NZ") {
                window.location.replace('en-nz/' + target)
            } else if (country === "BR") {
                window.location.replace('pt-br/' + target)
            } else if (country === "IN") {
                window.location.replace('en-in/' + target)
            } else if (country === "NG") {
                window.location.replace('en-ng/' + target)
            } else if (['KE', 'TZ', 'CD', 'RW', 'UG'].indexOf(data.country) >= 0) {
                window.location.replace('sw/' + target)
            } else if (country === "VN") {
                window.location.replace('vi/' + target)
            } else if (country === "MY") {
                window.location.replace('ms/' + target)
            } else if (data.country === "ID") {
                window.location.replace('id/' + target)
            }
        })
        .catch(() => {
            if (langCode5 === "en-US") {
                window.location.replace('en-us/' + target)
            } else if (langCode5 === "en-GB") {
                window.location.replace('en-gb/' + target)
            } else if (langCode5 === "en-CA") {
                window.location.replace('en-ca/' + target)
            } else if (langCode5 === "en-AU") {
                window.location.replace('en-au/' + target)
            } else if (langCode5 === "en-NZ") {
                window.location.replace('en-nz/' + target)
            } else if (langCode5 === "pt-BR") {
                window.location.replace('pt-br/' + target)
            } else if (langcode5 === "en-IN") {
                window.location.replace('en-in/' + target)
            } else if (langcode5 === "en-NG") {
                window.location.replace('en-ng/' + target)
            }
        })
}
