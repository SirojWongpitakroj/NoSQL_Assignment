// add step
const addStepBtn = document.getElementById('add-step-btn'); 

let stepCount = 1;

addStepBtn.addEventListener('click', () => {
    const newStep = `
        <input id="step_${stepCount}" type="textarea" name="step" placeholder="Enter Step" style="margin-top: 0.5rem;" required>
    `;

    addStepBtn.insertAdjacentHTML("beforebegin", newStep);
    stepCount++;
})

// add equipment
const addEqBtn = document.getElementById('add-equipment-btn');

let eqCount = 1;

addEqBtn.addEventListener('click', () => {
    const newEquipment = `
        <input id="equipment_${eqCount}" type="text" name="equipment" placeholder="Enter Equipment Needed" style="margin-top: 0.5rem" required>
    `;

    addEqBtn.insertAdjacentHTML("beforebegin", newEquipment);
    eqCount++;
})



