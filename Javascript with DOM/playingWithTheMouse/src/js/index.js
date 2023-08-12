const allEmployees = document.querySelector('.all-employees');
const taskForce = document.querySelector('.task-force');
const employeeCards = document.querySelectorAll('.employee');
const { top, left } = allEmployees.getBoundingClientRect();

//To display the name of the employee
//It takes in the x and y position of the cursor and also the employee's name
const createPanel = (x, y, name) => {
  const createPnl = document.createElement('div');
  createPnl.setAttribute('class', 'info-panel');
  createPnl.innerText = name;
  //the name of the employee has to be displayed where the cursor is clicked
  createPnl.style.top = `${y}px`;
  createPnl.style.left = `${x}px`;

  return createPnl;
};

//An optional chaining is used juz in case there is no names to remove
const removePanel = () => document.querySelector('.info-panel')?.remove();

//You don't need to attach event listener to each and every employee, you can juz add ot to the parent class all-employees 
allEmployees.addEventListener('contextmenu', function (evt) {
  //This method is used to remove the default browser actions so that we can do right click with a right click context menu
  evt.preventDefault();
  //Beofre a new name is displayed the previous names has to be removed
  removePanel();
  //This if statement is used to check whether you have clicked an employee
  if (evt.target.getAttribute('class') === 'employee') {
    //get's the name of the clicked employee
    const name = evt.target.getAttribute('data-name');
    //Since the web page has extra margin we subtract the left and top margin.
    const infoPanel = createPanel(evt.clientX - left, evt.clientY - top, name);

    allEmployees.append(infoPanel);
  }
});

//We need to remove the name panels when we do a left click
allEmployees.addEventListener('click', removePanel);
