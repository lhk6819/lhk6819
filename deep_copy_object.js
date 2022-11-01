const kim = {
  nid: 3,
  addr: 'Pusan',
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
};

 
function CopyArrayandObject(object) {
  
  // 1. object가 null값이거나 'object'자료형이 아닌 경우 그 값을 그대로 출력
  if (object === null || typeof object !== "object") {
    return object;
  }

  // 2. 객체인지 배열인지 판단하여 새로운 Array나 Object를 선언함.
  let ret;
  if (Array.isArray(object) === true) {
    ret = [];
  } else {
    ret = {};
  }
  
  // 3. 재귀함수를 이용하여 primitive와 reference형 자료를 분류하여 복사함.
  console.log(Object.keys(object));
  for (let key of Object.keys(object)) {
    ret[key] = CopyArrayandObject(object[key]);
  }

  // 4. result를 출력함.
  return ret;
}
 
const newKim = CopyArrayandObject(kim);
 
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = 'Daejeon';
console.log(kim, newKim); // oo와 arr이 다르면 통과!