function calcAver(variable1) {
    var totalSum = 0;
    for (a = 0; a < variable1.length; a++) {
        var totalSum = variable1[a] + totalSum 
    };
     totalSum = totalSum / variable1.length
    return totalSum
};
function bmiCalc(weight,height,) {
    let totalcalc = 0;
    height = height / 100;
    height = height * height
    totalcalc = weight / height;
    totalcalc = totalcalc;
    return totalcalc 
};
function gbfCalcNAvy(neck,abs,height) {
    let sidEqu1 = 0;
    let logar101 = abs/2.54;
    logar101 = logar101 - (neck/2.54)
    logar101 = Math.log10(logar101);
    let logar102 = height/2.54
    logar102 = Math.log10(logar102);
    sidEqu1 =  86.01 * logar101 - 70.041 * logar102 + 36.76
    return sidEqu1;
};
function gbfCalcNormal(bmi, age) {
    let totalCalc = 0;
    totalCalc = 1.2*bmi+0.23*age-10.8-5.4
    return totalCalc
};
function totalFatPorcentage(fatOne,fatTwo) {
    let solveEq = fatOne + fatTwo
    solveEq = solveEq / 2
    return solveEq
};
function bassalMet(weight, height, age) {
    var secQ = 0;
    secQ = 13.397*weight
    secQ = 88.362 + secQ + (4.799*height) - (5.677*age)
    return secQ
};

function healthRep(bmi,bfi){
    function fatRages(userBfi){
        if (userBfi <= 5) {
            return "and an unhealthy fat range in your body, please consult a professional."
        }
        else if (userBfi <= 13) {
            return "and an athlete fat percentage."
        }
        else if (userBfi <= 17) {
            return "and a fitness fat index range."
        }
        else if (userBfi <= 25) {
            return "and a healthy fat index range."
        }
        else if (userBfi <= 26) {
            return "and an over-range body fat index, plese consult a professional."
        }
        else {
            return ""
        }
    };
    if (bmi <= 10 ) {
        return "Maybe the information gethered above is incorrect please try to fill it up again."
    }
    else if (bmi <= 18.5) {
        return "Take care, you have an underwight body mass range " +fatRages(bfi);
    }
    else if (bmi <= 24.9) {
        return "You have a healthy body mass index " +fatRages(bfi);
    }
    else if (bmi <= 29.9) {
        return "You have an overweight body mass index " +fatRages(bfi);
    }
    else if (bmi >= 30) {
        return "You have an obese body mass index " +fatRages(bfi);
    }
    else {
        return "Maybe the information gethered above is incorrect please try to fill it up again."
    }
};
function waterIntake(weight) {
    var holderEq = 0;
    holderEq = weight * 2.20462* 0.67* 0.0295735
    return holderEq;
};

function caloriesAct (bassalMeta,userActivity){
    if (userActivity == "sedentary") {
        return bassalMeta *1.375;
    }
    else if (userActivity == "active") {
        return bassalMeta *1.5;
    }
    else if (userActivity == "fitness") {
        return bassalMeta *1.7;
    }
    else {
        return bassalMeta *1.9;
    }
};
function proteineAct(userActivity,bassalMeta,weight) {
    if (userActivity == "sedentary") {
        bassalMeta = bassalMeta *0.3;
        bassalMeta = bassalMeta / 4;
        weight =weight * 0.8;
        return (weight + bassalMeta) / 2
    }
    else if (userActivity == "active") {
        bassalMeta = bassalMeta *0.31666;
        bassalMeta = bassalMeta / 4;
        weight =weight * 1;
        return (weight + bassalMeta) / 2
    }
    else if (userActivity == "fitness") {
        bassalMeta = bassalMeta *0.332666;
        bassalMeta = bassalMeta / 4;
        weight =weight * 1.2;
        return (weight + bassalMeta) / 2
    }
    else {
        bassalMeta = bassalMeta *0.35;
        bassalMeta = bassalMeta / 4;
        weight =weight * 1.4;
        return (weight + bassalMeta) / 2
    }
}
function carbsAct(bassalMeta) {
    return bassalMeta = (bassalMeta/2)/4
}
function fatsAct(bassalMeta) {
    return bassalMeta = (bassalMeta*0.1)/9
}
function calcEvery() {

    document.getElementById('container2').style.display = "block";

    var ageUser = document.getElementById('age').value;

    var heightAver = [parseFloat(document.getElementById('height1').value),
    parseFloat(document.getElementById('height2').value),
    parseFloat(document.getElementById('height3').value)];

    var weightAver = [parseFloat(document.getElementById('weight1').value),
    parseFloat(document.getElementById('weight2').value),
    parseFloat(document.getElementById('weight3').value)];

    var neckAver = [parseFloat(document.getElementById('neck1').value),
    parseFloat(document.getElementById('neck2').value),
    parseFloat(document.getElementById('neck3').value)];

    var absAver = [parseFloat(document.getElementById('abs1').value),
    parseFloat(document.getElementById('abs2').value),
    parseFloat(document.getElementById('abs3').value)];

    var exerciseMin = parseFloat(document.getElementById('exer').value)

    document.getElementById('AverageHeight').innerHTML = 
    "Having in mind your measures provided above the following will be the average measures to realize the intake calculations :";
   
    document.getElementById('averheightul').style.display='block';
    document.getElementById('averweightul').style.display='block';
    document.getElementById('averneckul').style.display='block';
    document.getElementById('averabsul').style.display='block';

    document.getElementById('averheightul').innerHTML = "- Average Height: "+calcAver(heightAver).toFixed(2)+" cm";
    document.getElementById('averweightul').innerHTML = "- Average Weight: "+calcAver(weightAver).toFixed(2)+" kg";
    document.getElementById('averneckul').innerHTML = "- Average Neck Diameter: "+calcAver(neckAver).toFixed(2)+" cm";
    document.getElementById('averabsul').innerHTML = "- Average Abdomen Diameter: "+calcAver(absAver).toFixed(2)+" cm";

    heightAver = calcAver(heightAver);
    weightAver = calcAver(weightAver);
    neckAver = calcAver(neckAver);
    absAver = calcAver(absAver);

    var bmiAver = bmiCalc(weightAver,heightAver)

    document.getElementById('BMI').innerHTML = "Your Body Mass Index is: "+
    bmiAver.toFixed(2);

    var totalFatNavy = gbfCalcNAvy(neckAver,absAver,heightAver);
    var totalFatNormal = gbfCalcNormal(bmiAver,ageUser);
    var totalFat = totalFatPorcentage(totalFatNavy,totalFatNormal)

    document.getElementById('GBF').innerHTML = "Your Body Fat Index is: "+
    totalFat.toFixed(2)+" %";
    
    var bassalMatabolicRate = bassalMet(weightAver,heightAver,ageUser)

    document.getElementById('BMR').innerHTML = "Your Bassal Metabolic Rate is: "+
    bassalMatabolicRate.toFixed(2)+" Calories";

    document.getElementById('report').innerHTML = healthRep(bmiAver,totalFat);

    var waterExer = waterIntake(weightAver) + ((exerciseMin*0.4)*0.0295735)

    document.getElementById('WaterIntake').innerHTML = "According to your weight, you should be getting " 
    + waterIntake(weightAver).toFixed(1)+" L"
    + " in non excercising days but if you are working out "+ exerciseMin+" min. a day, you should be taking "
    + waterExer.toFixed(1) +" L of water."

    var userActivityOper = document.getElementById('oper').value;
    var userActivityCal = caloriesAct(bassalMatabolicRate,userActivityOper)

    document.getElementById('Calories').innerHTML = "With your BMR of "+ parseInt(bassalMatabolicRate) 
    + " you will need to consume "
    + userActivityCal.toFixed(2) +" calories for your " + userActivityOper+" routine";

    var userActivityProtein = proteineAct(userActivityOper,bassalMatabolicRate,weightAver)

    document.getElementById('Protein').innerHTML = "With your current mesures, you will need to consume "
    + userActivityProtein.toFixed(2) +" grs. of proteine for your " + userActivityOper+" routine";

    var userActivitycarbs = carbsAct(userActivityCal)

    document.getElementById('Carbs').innerHTML = "With your current mesures, you will need to consume "
    + userActivitycarbs.toFixed(2) +" grs. of carbs for your " + userActivityOper+" routine";

    var userActivityFat = fatsAct(userActivityCal)

    document.getElementById('Fat').innerHTML = "With your current mesures, you will need to consume "
    + userActivityFat.toFixed(2) +" grs. of fat for your " + userActivityOper+" routine";

};