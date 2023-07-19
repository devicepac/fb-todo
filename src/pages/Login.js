import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import firebase from "../firebase";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { useLogin } from "../hooks/useFireBase";

const Login = () => {
  const { login } = useLogin();
  // Link, NavLink, useNaviage
  const navigate = useNavigate();
  // 로그인
  const onFinish = async values => {
    console.log("Success:", values);
    try {
      login(values.email, values.password);
    } catch (error) {
      console.log(error);
    }
    
    // Firbase 로그인
    // try {
    //   await firebase
    //     .auth()
    //     .signInWithEmailAndPassword(values.email, values.password);
    //   // 로그인 된 사용자의 정보를 가지고 옴
    //   const user = firebase.auth().currentUser;
    //   setFBName(user.displayName);
    //   setFBEmail(user.email);
    //   setFBUid(user.uid);
    //   navigate("/");
    // } catch (error) {
    //   console.log(error.code);
    //   if (error.code === "auth/invalid-email") {
    //     setModalMassage("올바른 이메일 형식이 아닙니다.");
    //   } else if (error.code === "auth/wrong-password") {
    //     setModalMassage("올바르지 않은 비밀번호입니다.");
    //   } else if (error.code === "auth/user-not-found") {
    //     setModalMassage("가입되지 않은 사용자 입니다.");
    //   } else {
    //     setModalMassage("로그인이 실패하였습니다.");
    //   }
    //   showModal();
    // }
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  // Modal 기능
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMassage, setModalMassage] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="p-6 mt-5 shadow rounded-md bg-white">
      <h2>Login</h2>
      {/* AntD Modal */}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{modalMassage}</p>
      </Modal>
      {/*  AntD form */}
      <Form
        name="basic"
        labelCol={{
          span: 3,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1280,
          margin: "0 auto",
        }}
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "이메일을 입력해주세요.",
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error("At least 2 passengers"));
                }
              },
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "패스워드를 입력해주세요.",
              validator: async (_, password) => {
                if (!password || password.length < 6) {
                  return Promise.reject(new Error("At least 6 passengers"));
                }
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#1677ff", margin: "0 50px" }}
          >
            로그인
          </Button>
          <Button
            type="primary"
            htmlType="button"
            style={{ backgroundColor: "#1677ff" }}
            onClick={() => navigate("/signup")}
          >
            회원가입
          </Button>
        </Form.Item>
      </Form>
      {/* 
        1. emotion 을 활용하여 tag 의 용도를 구분한다. 
        2. css 도 함께 적용한다.
      */}
    </div>
  );
};

export default Login;
