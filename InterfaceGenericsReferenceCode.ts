// インタフェースとジェネリクスの組み合わせ
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

class Table<T> {
  data: T;
  getData(): T {
    return this.data;
  }
}

let ut = new Table<UserInfo>();

ut.data = userInfo;

console.log(ut.getData())
