// interface で値をセット
interface UserInfo {
  id: string;
  name: string;
}

let userInfo: UserInfo = {
  id: getId(),
  name: getName(),
};

function getId() {
  return '001';
}

function getName() {
  return 'tarou';
}

console.log(userInfo);
