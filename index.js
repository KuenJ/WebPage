let inputDate = document.getElementById("input-date");
let sensorAddButton = document.getElementById("sensor-add-button");

let SensorArray = [];

sensorAddButton.addEventListener("click", addSensorList);

function addSensorList() {
  let task = {
    id: randomIDGenerate(),
    TaskContent: inputDate.value,
  };
  SensorArray.push(task);
  console.log(SensorArray);
  render();
}

function deleteTask(id) {
  for (let i = 0; i < SensorArray.length; i++) {
    if (SensorArray[i].id == id) {
      SensorArray.splice(i, 1);
      break;
    }
  }

  render();
}

function updateTask(id) {
  for (let i = 0; i < SensorArray.length; i++) {
    if (SensorArray[i].id == id) {
      let updateInput = document.getElementById(`updateInput${id}`);
      let newValue = updateInput.value;
      SensorArray[i].TaskContent = newValue;
      break;
    }
  }
  console.log("업데이트");
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
                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#updateModal${SensorArray[i].id}">수정</button>
                <button class="btn btn-danger" onclick="deleteTask('${SensorArray[i].id}')">삭제</button>
              </td>
            </tr>
          </tbody>`;

    // 모달추가한모습 . 수정버튼 클릭시 나오게된다.
    resultHtml += `
      <div class="modal fade" id="updateModal${SensorArray[i].id}" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="updateModalLabel">센서 수정</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="text" id="updateInput${SensorArray[i].id}">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
              <button type="button" class="btn btn-primary" onclick="updateTask('${SensorArray[i].id}')" data-bs-dismiss="modal">변경 사항 저장</button>
            </div>
          </div>
        </div>
      </div>`;
  }
  document.getElementById("sensor-dashboard").innerHTML = resultHtml;
}

//랜덤아이디를 만들어서 고유 아이디값을줘서 다른것과 수정이나삭제시 중복안되게 그아이디값으로삭제되도록
function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
