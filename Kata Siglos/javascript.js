function whatCentury(year) {
    let result
    switch (true) {
        case (year > 1 && year <= 100):
            result = "Century I CE"
            break;
        case (year > 100 && year <= 200):
            result = "Century II CE"
            break;
        case (year > 200 && year <= 300):
            result = "Century III CE"
            break;
        case (year > 300 && year <= 400):
            result = "Century IV CE"
            break;
        case (year > 400 && year <= 500):
            result = "Century V CE"
            break;
        case (year > 500 && year <= 600):
            result = "Century VI CE"
            break;
        case (year > 600 && year <= 700):
            result = "Century VII CE"
            break;
        case (year > 700 && year <= 800):
            result = "Century VIII CE"
            break;
        case (year > 800 && year <= 900):
            result = "Century IX CE"
            break;
        case (year > 900 && year <= 1000):
            result = "Century X CE"
            break;
        case (year > 1000 && year <= 1100):
            result = "Century XI CE"
            break;
        case (year > 1100 && year <= 1200):
            result = "Century XII CE"
            break;
        case (year > 1200 && year <= 1300):
            result = "Century XIII CE"
            break;
        case (year > 1300 && year <= 1400):
            result = "Century XIV CE"
            break;
        case (year > 1400 && year <= 1500):
            result = "Century XV CE"
            break;
        case (year > 1500 && year <= 1600):
            result = "Century XVI CE"
            break;
        case (year > 1600 && year <= 1700):
            result = "Century XVII CE"
            break;
        case (year > 1700 && year <= 1800):
            result = "Century XVIII CE"
            break;
        case (year > 1800 && year <= 1900):
            result = "Century XIX CE"
            break;
        case (year > 1900 && year <= 2000):
            result = "Century XX CE"
            break;
        case (year > 2000 && year <= 2022):
            result = "Century XXI CE"
            break;
        default:
            result = "The information cannot be provided"
    }
    return result
}


module.exports = whatCentury 