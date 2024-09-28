// 페이지가 로드된 후 실행되도록 보장
window.onload = function() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const emailInvalidError = document.getElementById('email-invalid-error');

  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");
  const passwordLengthError = document.getElementById("password-length-error");

  const signinLoginBtn = document.getElementById("signin-login-btn")

  // 정규 표현식
  const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  // 이메일 형식 검증 함수
  function checkEmailFormat() {
    if (!emailInput.value) { 
      // 값이 비어있으면
      emailInput.classList.add("error");
      emailError.style.display = "block";
      emailInvalidError.style.display = "none";
    } else if (!emailPattern.test(emailInput.value)) {
      // 이메일 형식이 맞지 않으면 
      emailInput.classList.add('error');
      emailError.style.display = 'none';
      emailInvalidError.style.display = 'block';
    } else {
      // 형식이 맞으면 에러 제거
      emailInput.classList.remove('error');
      emailError.style.display = 'none';
      emailInvalidError.style.display = 'none';
    }
  }

  function checkPasswordFormat() {
    if (!passwordInput.value) {
      // 비밀번호가 비어있으면
      passwordInput.classList.add("error");
      passwordError.style.display = "block";
      passwordLengthError.style.display = "none";
    } else if (passwordInput.value.length < 8) {
      // 비밀번호가 8자 미만이면
      passwordInput.classList.add("error");
      passwordError.style.display = "none";
      passwordLengthError.style.display = "block";
    } else {
      // 비밀번호가 8자 이상이면 에러 제거
      passwordInput.classList.remove('error');
      passwordError.style.display = 'none';
      passwordLengthError.style.display = 'none';
    }
  }

  function validateForm() {
    const isEmailValid = checkEmailFormat();
    const isPasswordValid = checkPasswordFormat();

    if (isEmailValid && isPasswordValid) {
      signinLoginBtn.disabled = false;
    } else {
      signinLoginBtn.disabled = true;
    }
  }


  emailInput.addEventListener("input", validateForm); // 이메일 입력 변화 감지
  passwordInput.addEventListener("input", validateForm); // 비밀번호 입력 변화 감지


};
