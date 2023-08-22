//  rumus: massa / (tinggi * tinggi) (massa dalam kg dan tinggi dalam meter).

// massa dan tinggi udin data 1
var udin = {
  massa: 95,
  tinggi: 1.88,
};

// massa dan tinggi nanang data 1
var nanang = {
  massa: 85,
  tinggi: 1.76,
};

// rumus BMI

var bmi_udin = udin.massa / (udin.tinggi * udin.tinggi);
var bmi_nanang = nanang.massa / (nanang.tinggi * nanang.tinggi);

var udin = bmi_udin.toFixed();
var nanang = bmi_nanang.toFixed();

//Buat variabel dengan output Boolean yang berisi informasi apakah udin memiliki BMI yang lebih tinggi daripada nanang / sebaliknya

var kondisi;
if (udin > nanang) {
  kondisi = true;
} else if (udin < nanang) {
  kondisi = false;
} else {
  console.log(
    "BMI udin (",
    udin,
    ") sama besar dengan BMI nanang (",
    nanang,
    ") "
  );
  return;
}

if ((kondisi = true)) {
  console.log(
    "BMI udin (",
    udin,
    ") lebih besar daripada BMI nanang (",
    nanang,
    ") "
  );
} else {
  console.log(
    "BMI udin (",
    udin,
    ") lebih kecil daripada BMI nanang (",
    nanang,
    ") "
  );
}
