/* Drag and Drop 
-> we use the drag and drop api
Steps the implement drag and drop
1. Designate an element as draggable by setting draggable as 'true;
2. Designate an area as a drop zone by attaching suitable event listeners
3. Store and transfer data specific to the dragged item using the data transfer object
4. When the element is dragged and dropped on the drop zone, the data stored is transferred
5. Use the transferred data to implement visual changes to the elements 

dragstart => when the user starts to drag an item 
drag => when the item is being dragged
dragenter => when the item enter the drop zone 
dragover => when the item is dragged over the drop zone
drop => when the item is dropped over the drop zone
dragleave => when the item being dragged leaves the drop zone without getting dropped
dragend -> when the dragging ends
*/


const allEmployees = document.querySelector('.all-employees');
const taskForce = document.querySelector('.task-force');
const employeeCards = document.querySelectorAll('.employee');
const { top, left } = allEmployees.getBoundingClientRect();

const createPanel = (x, y, name) => {
  const createPanel = document.createElement('div');
  createPanel.setAttribute('class', 'info-panel');
  createPanel.innerText = name;
  createPanel.style.top = `${y}px`;
  createPanel.style.left = `${x}px`;
  return createPanel;
};

const removeInfoPanel = () => document.querySelector('.info-panel')?.remove();

allEmployees.addEventListener('contextmenu', function (evt) {
  evt.preventDefault();
  removeInfoPanel();
  if (evt.target.getAttribute('class') === 'employee') {
    const name = evt.target.getAttribute('data-name');
    const infoPanel = createPanel(evt.clientX - left, evt.clientY - top, name);

    allEmployees.append(infoPanel);
  }
});

allEmployees.addEventListener('click', () => removeInfoPanel());

// drag and drop 
// The moment one starts to drag any of these employee cards we want to fetch their unique data id value from the data attribute
// And we want store that value using the data transfer object
//This should happen one starts to drag these elements, hence we have to use the dragstart event
//We need add a dragstart event on all the employee cards

employeeCards.forEach((el) =>{
  el.addEventListener('dragstart', function(evt){
      //Remove any name panels that might be on display at the time that the darg begins
      removeInfoPanel();
      const getId = evt.target.getAttribute('data-id');
      //Allows you to store data to be transferred
      evt.dataTransfer.setData('text/plain',getId);
  });
});


taskForce.addEventListener('dragenter',function(evt){
  evt.preventDefault();
  //Next we need to add a visual effect to indicate the area as a drop zone
  //This can be done by changing the border attribute
  //We evt.target is the div under the mouse pointer, whereas the currentTarget is the element on which this event is attached this will change as we drag about
  evt.currentTarget.classList.add('highlight-drop');

});

  //When we move a employee to the drop zone the change in border stays, but this should not happen
  taskForce.addEventListener('dragleave',function(evt){
    evt.preventDefault();
    evt.currentTarget.classList.remove('highlight-drop');
  });

  taskForce.addEventListener('drop', function(evt){
    evt.preventDefault();
    const empId = evt.dataTransfer.getData('text/plain');
    evt.currentTarget.append(document.querySelector(`div[data-id='${empId}']`));
    evt.currentTarget.classList.remove('highlight-drop');
  });

  taskForce.addEventListener('dragover',function(evt){
      evt.preventDefault();
  });

