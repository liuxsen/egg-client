const validatePhone = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback('请输入手机号码');
  } else {
    const oReg = /1\d{10}$/;
    if (!oReg.test(value)) {
      callback('手机号码格式不正确');
    } else {
      callback();
    }
  }
};

export { validatePhone };
