const whatCentury = require ('./javascript.js')


test ('What century are we living in if we were in the year 20 CE.',  () => {
    expect(whatCentury(20)).toBe ("Century I CE")
 })

 test ("What century are we living in if we were in the year 120 CE.",  () => {
    expect(whatCentury(120)).toBe ("Century II CE")
 })

 test ('What century are we living in if we were in the year 220 CE.',  () => {
    expect(whatCentury(220)).toBe ("Century III CE")
 })

 test ("What century are we living in if we were in the year 320 CE.",  () => {
    expect(whatCentury(320)).toBe ("Century IV CE")
 })

 test ('What century are we living in if we were in the year 420 CE.',  () => {
    expect(whatCentury(420)).toBe ("Century V CE")
 })

 test ("What century are we living in if we were in the year 520 CE.",  () => {
    expect(whatCentury(520)).toBe ("Century VI CE")
 })

 test ("What century are we living in if we were in the year 620 CE.",  () => {
    expect(whatCentury(620)).toBe ("Century VII CE")
 })

 test ("What century are we living in if we were in the year 720 CE.",  () => {
    expect(whatCentury(720)).toBe ("Century VIII CE")
 })

 test ("What century are we living in if we were in the year 820 CE.",  () => {
    expect(whatCentury(820)).toBe ("Century IX CE")
 })

 test ("What century are we living in if we were in the year 920 CE.",  () => {
    expect(whatCentury(920)).toBe ("Century X CE")
 })

 test ("What century are we living in if we were in the year 1020 CE.",  () => {
    expect(whatCentury(1020)).toBe ("Century XI CE")
 })

 test ("What century are we living in if we were in the year 1120 CE.",  () => {
    expect(whatCentury(1120)).toBe ("Century XII CE")
 })

 test ("What century are we living in if we were in the year 1220 CE.",  () => {
    expect(whatCentury(1220)).toBe ("Century XIII CE")
 })

 test ("What century are we living in if we were in the year 1320 CE.",  () => {
    expect(whatCentury(1320)).toBe ("Century XIV CE")
 })

 test ("What century are we living in if we were in the year 1420 CE.",  () => {
    expect(whatCentury(1420)).toBe ("Century XV CE")
 })

 test ("What century are we living in if we were in the year 1520 CE.",  () => {
    expect(whatCentury(1520)).toBe ("Century XVI CE")
 })

 test ("What century are we living in if we were in the year 1620 CE.",  () => {
    expect(whatCentury(1620)).toBe ("Century XVII CE")
 })

 test ("What century are we living in if we were in the year 1720 CE.",  () => {
    expect(whatCentury(1720)).toBe ("Century XVIII CE")
 })

 test ("What century are we living in if we were in the year 1820 CE.",  () => {
    expect(whatCentury(1820)).toBe ("Century XIX CE")
 })

 test ("What century are we living in if we were in the year 1920 CE.",  () => {
    expect(whatCentury(1920)).toBe ("Century XX CE")
 })

 test ("What century are we living in if we were in the year 2020 CE.",  () => {
    expect(whatCentury(2020)).toBe ("Century XXI CE")
 })

 test ("What century are we living in if we were in the year 2030 CE.",  () => {
    expect(whatCentury(2030)).toBe ("The information cannot be provided")
 })