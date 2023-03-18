import { Field, Form } from "react-final-form";
import "./login.css";
import { getUserData, login } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import { set_user_data } from "../redux/Actions/AuthActions";
import { useNavigate } from "react-router-dom";
import {set_UserId} from "../redux/Actions/MessagesAction";

const LoginPage = (props) => {
  const { isAuth } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const onSubmit = async (value) => {
    const { rememberMe, email, password } = value;
    await login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        getUserData().then((response) => {
          if (response.data.resultCode === 0) {
            const { login, email, id } = response.data.data;
            dispatch(set_user_data(login, email, id));
            dispatch(set_UserId(id))
          }
        });
      }
    });
  };
  const required = (value) =>
    value ? undefined : "Поле не должно быть пустым";

  const minValue = (min) => (value) =>
    value.length >= min ? undefined : `Должно быть больше чем ${min} символов`;

  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
  const navigate = useNavigate();
  if (isAuth === true) return navigate("/");
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="registration">
          <button>Авторизация</button>
        </div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="inputContainer">
              <div className="inputContainer">
                <Field
                  validate={composeValidators(required, minValue(8))}
                  name="email"
                >
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="text"
                        placeholder="Введите логин"
                        className="inputField"
                      />
                      {meta.error && meta.touched && (
                        <span className="errorValidate">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
                <Field
                  className="inputField"
                  name="password"
                  component="input"
                  placeholder="Введите пароль"
                  type="password"
                />
                <div>
                  <Field name="rememberMe" component="input" type="checkbox" />
                  <label>Запомнить меня</label>
                </div>
              </div>
              <button type="submit" className="enterButton">
                Войти
              </button>
            </form>
          )}
        />
        <div className="isRegistration">
          <span>
            Еще не зарегистрированы, тогда <span className="click"> жми!</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
