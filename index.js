let inputDate = document.getElementById("input-date");
let sensorAddButton = document.getElementById("sensor-add-button");

let SensorArray = [];

sensorAddButton.addEventListener("click", addSensorList);

function addSensorList() {
  let task = {
    TaskContent: inputDate.value,
  };
  SensorArray.push(task);
  console.log(SensorArray);
  render();
}

function render() {
  let resultHtml = "";
  for (let i = 0; i < SensorArray.length; i++) {
    resultHtml += `<tbody id="sensor-dashboard">
            <tr> 
              <th scope="row">${SensorArray[i].TaskContent}</th>
              <td>35</td>
              <td>26</td>
              <td>2024-02-05</td>
              <td>12:00</td>
              <td class="td-button">
                <button class="btn btn-secondary">수정</button>
                <button class="btn btn-danger">삭제</button>
              </td>
            </tr>
          </tbody>`;
  }
  document.getElementById("sensor-dashboard").innerHTML = resultHtml;
}
