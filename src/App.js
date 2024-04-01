import "./App.css";
// 1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있다
// 2. 리스트에 유저 이름과 전화번호를 추가할 수 있다
// 3. 리스트에 아이템이 몇개있는지 보인다
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다
import ContactForm from "./conponent/ContactForm";
import ContactList from "./conponent/ContactList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>연락처</h1>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "980px",
          margin: "auto",
        }}
      >
        <article
          style={{
            width: "100%",
            borderRight: "1px solid #bbbb",
            padding: "20px",
          }}
        >
          <ContactForm />
        </article>

        <article
          style={{
            width: "100%",
            padding: "20px",
          }}
        >
          <ContactList />
        </article>
      </section>
    </div>
  );
}

export default App;
