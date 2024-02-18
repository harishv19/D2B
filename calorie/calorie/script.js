function calculateMaintenance() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = document.getElementById('activity-level').value;
  
    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
      alert('Please enter valid values for weight, height, and age.');
      return;
    }
  
    let maintenanceCalories;
  
    if (gender === 'male') {
      maintenanceCalories = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      maintenanceCalories = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    switch (activityLevel) {
      case 'sedentary':
        maintenanceCalories *= 1.2;
        break;
      case 'lightly-active':
        maintenanceCalories *= 1.375;
        break;
      case 'moderately-active':
        maintenanceCalories *= 1.55;
        break;
      case 'very-active':
        maintenanceCalories *= 1.725;
        break;
      case 'extra-active':
        maintenanceCalories *= 1.9;
        break;
    }
  
    const resultElement = document.getElementById('maintenance-result');
    resultElement.innerHTML = `Your maintenance calorie intake is approximately ${maintenanceCalories.toFixed(2)} calories per day.`;
  }
  