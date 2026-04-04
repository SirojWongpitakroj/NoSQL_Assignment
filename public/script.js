// add step
const addStepBtn = document.getElementById('add-step-btn');

const stepContainer = document.getElementById('steps-container');

let stepCount = 1;

addStepBtn.addEventListener('click', () => {
    const newStep = `
        <input id="step_${stepCount}" type="textarea" name="step" placeholder="Enter Step" style="margin-top: 0.5rem;" required>
    `;

    stepContainer.insertAdjacentHTML("beforeend", newStep);
    stepCount++;
});

// add equipment
const addEqBtn = document.getElementById('add-equipment-btn');

const equipmentContainer = document.getElementById('equipment-container');

let eqCount = 1;

addEqBtn.addEventListener('click', () => {
    const newEquipment = `
        <input id="equipment_${eqCount}" type="text" name="equipment" placeholder="Enter Equipment Needed" style="margin-top: 0.5rem" required>
    `;

    equipmentContainer.insertAdjacentHTML("beforeend", newEquipment);
    eqCount++;
});

// add ingredient
const addIngredientBtn = document.getElementById('add-ingredient-btn');

const ingredientNameContainer = document.getElementById('ingredient-name-container');
const ingredientAmountContainer = document.getElementById('ingredient-amount-container');
const ingredientUnitContainer = document.getElementById('ingredient-unit-container');

let ingredientCount =  1;

    addIngredientBtn.addEventListener('click', () => {
        const newName = `
            <input id="ingredientName_${ingredientCount}" class="ingredient__Name" name="ingredientName" type="text" placeholder="Enter Ingredient Name" required>
        `;

        const newAmount = `
            <input id="ingredientAmount_${ingredientCount}" class="ingredient__Amount" name="ingredientAmount" type="number" placeholder="Enter Amount" required>
        `;

        const newUnit = `
            <select id="ingredientUnit_0" class="ingredient__Unit" name="ingredientUnit" required>
                <option value="" disabled selected>Select a unit</option>

                <optgroup label="Volume">
                    <option value="ml">Milliliter (ml)</option>
                    <option value="l">Liter (l)</option>
                    <option value="tsp">Teaspoon (tsp)</option>
                    <option value="tbsp">Tablespoon (tbsp)</option>
                    <option value="cup">Cup</option>
                </optgroup>
                
                <optgroup label="Weight">
                    <option value="g">Gram (g)</option>
                    <option value="kg">Kilogram (kg)</option>
                    <option value="oz">Ounce (oz)</option>
                    <option value="lb">Pound (lb)</option>
                </optgroup>
                
                <optgroup label="Quantities">
                    <option value="whole">Whole / Piece</option>
                    <option value="clove">Clove</option>
                    <option value="pinch">Pinch</option>
                </optgroup>
            </select>
        `;

        ingredientNameContainer.insertAdjacentHTML('beforeend', newName);
        ingredientAmountContainer.insertAdjacentHTML('beforeend', newAmount);
        ingredientUnitContainer.insertAdjacentHTML('beforeend', newUnit);

        ingredientCount++;
 });

//  Remove function
const removeIngredientBtn = document.getElementById('ingredient-remove-btn');
const removeStepBtn = document.getElementById('step-remove-btn');
const removeEqBtn = document.getElementById('equipment-remove-btn');

//Remove Ingredient
removeIngredientBtn.addEventListener('click', () => {
    
    if (ingredientCount > 1) {
        ingredientNameContainer.lastElementChild.remove();
        ingredientAmountContainer.lastElementChild.remove();
        ingredientUnitContainer.lastElementChild.remove();
        ingredientCount--;
    } else {
        console.log("You must have at least 1 ingredient!")
    }
});

//Remove Step
removeStepBtn.addEventListener('click', () => {
    
    if (stepCount > 1) {
        stepContainer.lastElementChild.remove();
        stepCount--;
    } else {
        console.log("You must have at least 1 step!")
    }
});

//Remove Equipment
removeEqBtn.addEventListener('click', () => {
    
    if (eqCount > 1) {
        equipmentContainer.lastElementChild.remove();
        eqCount--;
    } else {
        console.log("You must have at least 1 equipment!")
    }
});

